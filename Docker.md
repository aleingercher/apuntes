# DOCKER


## Run
Corre una imagen. Genera un contenedor.  Inicia el proceso

    docker run  postgres
. El comando __run__ hace un pull si no existe, y luego lo corre.  

    -e POSTGRES_PASSWORD=password  

. Para postgres, quizas me pide que agregue esta linea entre run y postgres:

    docker run -p 3000:3000 postgres
Especifico el puerto donde va a correr
MI_PUERTO:PUERTO_DOCKER

## Start y stop
    // arranca el container. Tr
    docker start docker-tutorial
    // frena el container
    docker stop docker-tutorial
. Cuando estan ya creados, los freno e inicio con estos comandos.     
. Mantienen los datos que generaron.
 

# Build
Para construir una imagen desde un directorio

    docker build -t NOMBRE_CONTAINER .

# Dockerfile

Ejemplo:
```
FROM node:16-alpine3.16 // imagen:version-distribucionLinuxversion

WORKDIR /app  // /directorioDondeVoyATrabajar. /app no existe en node, pero se crea

COPY . . // copia los archivos del directorio al WORKDIR del contenedor -> /app

RUN yarn install --production  // compilar todo nuestro codigo de node

CMD ["node", "app/src/index.js"]  // este es el comando que quiero que corra cuando corra el contenedor
```


# COMANDOS VARIOS

    docker images
Muestra las imagenes que estan INSTALADAS en la maquina  

    docker ps
Muestra los contenedores que estan CORRIENDO

    docker ps -a
Muestra los contenedores que alguna vez corrieron

    docker logs ID O NOMBRE_DEL_CONTAINER
Muestra los logs del container seleccionado 

    docker exec -it NOMBRE_CONTAINER
. Ejecuta un comando en un contenedor que YA esta corriendo  
. el  -i es para que genere una interfaz interactiva  
. el -t es para que genere una terminal  
