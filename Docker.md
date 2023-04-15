# DOCKER

- Hay repositorios
    - publicos  
            _DockerHub_

    - Privados

- Una __imagen__:  
    Es el empaquetado de dependencias + codigo

- Un __container__:  
    Son capas mas capas de imagenes.  
    La de mas abajo suele ser 'Alpine Linux'  
    Mas arriba otras capas, Node, MySQL, etc...

- Docker Virtualiza SOLO las __aplicaciones__. Usamos el __Kernel__ del OS que estamos utilizando.

## Docker Desktop

- Puede correr de manera nativa en Windows con WSL2 (Windows Subsystem for Linux)

### Docker Compose

### CLI

## DockerHub

https://hub.docker.com

- Provee contenedores para descargar.  
Podemos bajar una imagen de Node, por ejemplo.  
Se ver algo asi:
    > 18-alpine3.15  

    Esto es la version 18 de Node, corriendo sobre un alpine3.15  

## Pull
          
Para bajarlo habra qu e ir a la consola y correr esto:      
  
        docker pull node  

esto va a bajar la ultima version de Node. Si quiero una especifica, debo especificarlo.

        docker pull node:17

 bajaria solo la version 17

## Create

Ahora tengo que crear nuestro __container__

    //         OPC            NOMBRE IMAGEN
    docker [container] create mongo  

Esto nos devuelve un __ID__. Es el identificador del container creado.  
Algo asi:  
2888044a714a0b07d13f8ce814eae006d6ce669779643c3e2ff4e73ef82f7e4f

Este ID lo vamos a necesitar para correr nuestro contenedor

O mejor crearlo ya con un nombre, como __monguito__:

    docker create --name monguito mongo


## Start
    // arranco el container por ID
    docker start 2888044a714a0b07d13f8ce814eae006d6ce669779643c3e2ff4e73ef82f7e4f

    // o con un alias
    docker start dreamy_cray 


## PS
Sirve para ver los containers que tenemos inicializados

Mostrar los contenedores que estan CORRIENDO

    docker ps  

        // ID corto                                                                                       
        CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS              PORTS       NAMES
        2888044a714a   mongo     "docker-entrypoint.s…"   5 minutes ago   Up About a minute   27017/tcp   dreamy_cray

Mostrar los contenedores que hay en el sistema, esten corriendo o no

    docker ps -a

## Stop
. Cuando estan ya creados, los freno e inicio con estos comandos.     
. Mantienen los datos que generaron.

        docker stop 2888044a714a
        or
        docker stop dreamy_cray

## Port Mapping
Hay que mapear puertos de nuestra computadora a los puertos de los containers.

Por ejemplo, para mapear al crear hacemos esto

    //           -p[puertoPC]:[puertoContainer]
    docker create -p27017:27017

        CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS        PORTS                      NAMES
        d92d570bbc0b   mongo     "docker-entrypoint.s…"   20 seconds ago   Up 1 second   0.0.0.0:27017->27017/tcp   monguito

        0.0.0.0:27017->27017/tcp  <---------

Si pusieramos un solo puerto, docker asigna un puerto aleatorio de nuestra PC al container

    docker create -p27017 --name monguito2 mongo

        CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                      NAMES
        7e5d24c8f52c   mongo     "docker-entrypoint.s…"   9 seconds ago   Up 3 seconds   0.0.0.0:53102->27017/tcp   monguito2

        0.0.0.0:53102->27017/tcp <---------

## Logs
Para ver los logs pongo el comando

    docker logs monguito

Para verlos 'en vivo'

    docker logs --follow monguito

## Run
Corre una imagen. Genera un container.  Inicia el proceso  
Una mezcla de 

pull + create + start

    docker run mongo
. El comando __run__ hace un pull si no existe, y luego crea el container y le da start.   
. Funciona como si le pusiera --follow, mostrando los logs.  
  Lo malo es que si usamos CTRL + C para frenarlo, tambien es como si pusieramos STOP.

Para correrlo en modo DETACHED, y que no muestre los logs:

    docker run -d mongo

Puedo usar los mismos flags que para el CREATE

    docker run --name monguito -27017:27017 -d mongo



### Postgres

    -e POSTGRES_PASSWORD=password  

. Para postgres, quizas me pide que agregue esta linea entre run y postgres:

    docker run -p 3000:3000 postgres
Especifico el puerto donde va a correr
MI_PUERTO:PUERTO_DOCKER


## REDES, o como Agrupar containers
Los containers no se ven entre si.  
Para que interactuen, debo agruparlos en una red.  
- Cuando se encuentran en la misma red, los contenedores se conectan por el nombre del container. En este caso. voy a tener que cambiar la URL

> mongodb://nico:password@monguito:27017/miapp?authSource=admin

Primero veo las redes que tengo disponibles 

    docker network ls

Creo mi propia red

    docker network create mired

Puedo borrarla

    docker network rm mired

Para crear mis containers con la red incluida

    docker create --name monguito -p27017:27017 --network mired -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo

Ahora creo el container de la app que acabo de colocar en una imagen 

    docker create -p3000:3000 --name chanchito --network mired miapp:1
 
# Dockerfile
Es necesario para CREAR imagenes (__build__)
Se tiene que llamar siempre asi
Se utiliza para que podamos construir nuestros containers
Todas las imagenes que creemos, tienen que basarse en otra.
Para eso se usa el __FROM__

Ejemplo HolaMundo de Youtube:
``` dockerfile
FROM node:18 
            // imagen:version-distribucionLinuxversion

RUN mkdir -p /home/app  
            // es una ruta DENTRO del mismo contenedor. En Home/app meteremos el codigo fuente

COPY . /home/app  
            // Toma los archivos necesarios de nuestro propio OS y los copia al contenedor. 
            Primero pongo la ruta de MI OS, luego la ruta dentor del container

EXPOSE 3000
            //Expongo un puerto para que se conecten a mi contenedor

CMD ["node", "/home/app/index.js"]
            //Pongo el comando + args que tienen que ejecutar para que corra mi container. La ruta deber se completa, usando la carpeta que cree en el primer RUN


```

Otro Ejemplo:
``` dockerfile
FROM node:16-alpine3.16 // imagen:version-distribucionLinuxversion

WORKDIR /app  // /directorioDondeVoyATrabajar. /app no existe en node, pero se crea

COPY . . // copia los archivos del directorio al WORKDIR del contenedor -> /app

RUN yarn install --production  // compilar todo nuestro codigo de node

CMD ["node", "app/src/index.js"]  // este es el comando que quiero que corra cuando corra el contenedor
```

# Build
Para construir una imagen __desde un archivo dockerfile__.

Lleva dos argumentos:  
    - Nombre del tag  --> -t NOMBRE_CONTAINER:ETIQUETA
    - Ruta de donde se encuentra mi proyecto. El punto representa el lugar donde me encuentro actualmente  --> .  

    docker build -t miapp:1 .

Luego chequeo si se creo mi imagen con un __docker images__

Mis contenedores, para entenderse, deben estar en la misma red.  
Eso lo hago desde su construccion.

## Ejemplo practico

1. vamos a docker hub
2. buscamos 'mongo' y scrolleamos para buscar los comandos de configuracion que necesita
3. En este caso, necesitamos una Variables de Entorno
4. Vamos a consola

    docker pull mongo

5. Primero creo una red para luego crear los containers asociados a esta

6. Creamos el container de mongo con las variables.   
Las agregamos con el -e (Variable de entorno)

    docker create -p27017:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo

7. Armo mi proyecto de node, en base a una imagen de Node.

8. Configuro mi dockerfile como esta arriba

9. Ejecuto el build

10. Creo mi container de mi app en Node

    docker create -p3000:3000 --name chanchito --network mired miapp:1

11. Starteo primero mongo, luego la app

# COMANDOS VARIOS

Muestra las imagenes que estan INSTALADAS en la maquina  

    docker images  
    // REPOSITORY   TAG IMAGE   ID  CREATED SIZE

Borrar una imagen

    docker image rm node:17

Borrar un container

    docker rm dreamy_cray

Muestra los logs del container seleccionado 

    docker logs ID O NOMBRE_DEL_CONTAINER

. Ejecuta un comando en un contenedor que YA esta corriendo  
. el  -i es para que genere una interfaz interactiva  
. el -t es para que genere una terminal  

    docker exec -it NOMBRE_CONTAINER
