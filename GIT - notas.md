- WORKING DIRECTORY
carpeta local

- STAGING AREA
nube intermedia donde voy agregando mis cambios

- REPOSITORY
repositorio final

1. Entrar a GIT Bash o el editor de turno

    Chequear version:  

        git --version

    

2. Poner nombre y apellido GLOBAL, se hace una sola vez

        git config --global user.name "Alejandro Ingercher”


1. Agregar mail GLOBAL

        git config --global user.email "aleingercher@gmail.com"

1. Si quiero agregar un email para un repo en particular

        git config user.email "mailParaRepoParticular@gmail.com"

    ************
    Chequear datos:

        git config user.email
        git config user.name
        git config --list


    Para buscar ayuda:

        git help config 
        git config --help



4. Luego, ir a la carpeta donde queremos instalarlo:

### WORKING DIRECTORY
Ahi nos aparece un (master) en turquesa

    git init (o git init NOMBRE_DE_REPOSITORIO)


6. Agregar archivos al git (que se empiezen a actualizar): 
### STAGING AREA
 
(el punto es para todos, sino pongo el archivo, onda index.html)

    git add . 


Chequeo que estoy trackeando

    git status
    o 
    git status -s


7. Hago el primer COMMIT


### REPOSITORY
(el -m viene de Mensaje)

    git commit -m "primer estado del proyecto"

. Ahi me muestra los cambios que hice  
. Es importante que sean cortos, concisos y descriptivos

Si me equivoque con el Mensaje ( error en el mensaje)

    git commit --amend -m "mensaje cambiado"


### RESET

> LOS CAMBIOS DEL RESET SON EN LA MISMA RAMA DONDE SE EJECUTAN

Si me arrepiento de agregar (add) un archivo

    git reset NOMBRE_ARCHIVO

Para sacar del stage TODOS los archivos

    git reset

Para borrar TODOS los commits

    git reset --hard

Para borrar los ultimos 3 commits desde el HEAD

    git reset --hard HEAD~3


Para chequear el historial de commits:

    git log

o

    git log  --oneline --decorate --all --graph
muestra los primeros 7 caracteres que sirve para agilizar

            (*nro de version 1*)   (*nro de version 2*)
    > git diff 96ce721 96ce321
Para comprarar diferencias entre dos versiones

## BRANCHES
Por si quiero agregar una nueva funcion, o hacer una modificacion grande ,creo un branch

    git branch NOMBRE_RAMA


. Si quiero crearla y cambiarme de una

    git checkout -b NOMBRE_RAMA


. Renombrar  cambiar nombre branch (en este caso, master a main)

    git branch -m master main

    o

    git branch -M main


. Tambien puedo buscar el numero de version y usarlo para ir 
    moviendome por nro de commit

    git checkout 40c4ee5

Asi vuelvo a la version que ponga. Saco el nro de version con

    git log  --oneline --decorate --all --graph


. para ver la LISTA de BRANCHES

    git branch -l

. para ver la lista de BRANCHES, pero con DETALLE

    git branch -vv

. ver BRANCHES REMOTOS y LOCALES

    git branch -a

. ver BRANCHES REMOTOS 

    git branch -r

. para BORRAR BRANCHES (tengo que estar parado en otro branch)

    > git branch -D NOMBRE_RAMA

## STASH
. A veces quiero guardar cambios sin commitear, para por ejemplo, actualizar el proyecto base sobre el que trabajo

-  Tengo que tener cambios sin commitear

-  para stashear los cambios sin commitear

        git stash save 'mi mensaje'

-  SI lo quiero recuperar

        git stash pop

- Ver la lista de los stashes guardados

        git stash list


## MERGE
- Tengo que estar parado en el master
    
        git checkout master
        git merge prueba1


***
## Visual Studio Code

Para abrir la carpeta actual en VS Code

    code .

### VSC muestra mensajes al lado de los elementos en el explorer:

<h2 style="color: green; display: inline">U</h2> UNSTAGED (nunca se agrego )

<h2 style="color: green; display: inline">A</h2> ADDED . Nuevo en el repo

<h2 style="color: gold; display: inline">M</h2> MODIFICADO . Archivo viejo, modificado, sin commitear

<h2 style="text-decoration: underline; display: inline">SIN COLOR</h2> MODIFICADO y COMITTEADO  


***
## TAGUEAR versiones para interactuar con github
Puedo usar tags para las versiones.
Lo que haces es guardar una version completa del codigo hasta esa etiqueta, 
asi que en caso de querer volver ahi, bajo el .rar y tengo todo joya


Primero creo un tag. Es como un save completo del proyecto  

    git tag versionPrimera -m "Esta es la version base del proyecto"

Luego pusheo el tag

    git push --tags


Luego puedo revisar la etiqueta. Muestra info copada

    git show versionPrimera


Para borrar una etiqueta

    > git tag -D versionPrimera


## RESUMEN
 Indicarle que en ESE directorio, donde ejecutamos este comando, será usado con GIT.

    git init
    
 Agregar todos los archivos creados, modificados, eliminados al estado 2 (stage) 

    git add .
Mensaje obligatorio para indicar que hemos cambiado por ejemplo, al estado 3. 

    git commit -m "Mensaje"

 Para conocer los códigos de los commits realizados.

    git log --oneline

Para cambiar de rama o ir a un commit específico (debemos conocer su código anteriormente) 

    git checkout NOMBRE_RAMA

Debemos estar en MASTER para fusionar.

    git merge NOMBRE_RAMA

    git branch NOMBRE_RAMA
Creación de una rama (si queremos eliminar una rama ponemos git branch -D nombre-rama)

**********************
COMANDOS para consola
**********************

/?  
Si quieres saber más de un comando, añade /? para ver la ayuda relacionada. Te será muy útil para ver las muchas opciones de cada comando.

HELP  
 Te mostrará una lista de comandos disponibles.

DIR  
 Es el comando más conocido de DOS y sirve para ver el contenido de una carpeta.
(en MAC-OS usar LS)

ECHO  
Puedo crear archivos con contenido. Un MD por ejemplo con el texto # mi_repo
Ej: 
> echo "# mi_repo" >> README.md

CD  
 Sirve para entrar en una carpeta o salir de ella con CD…

CLEAR  
 limpiar consola

MKDIR   
 Con este comando crearás una carpeta nueva. Con RMDIR podrás eliminarla.

MOVE y COPY   
Son los comandos para mover y copiar respectivamente archivos. Deberás indicar el nombre del archivo con su ruta (si está en otra carpeta en la que te encuentras) y la ruta de destino.

RENAME  
 Sirve para renombrar un archivo o carpeta. Hay que indicar el nombre original y el definitivo.

DEL  
 Es el comando para eliminar un archivo. Recuerda que no irá a la Papelera, así que piénsatelo antes de borrar nada. Y para eliminar carpeta usa el comando RD (en MAC-OS usar RM para archivos / para eliminar carpetas RM -RF)

EXIT  
 Cierra la ventana de la línea de comandos o símbolo del sistema.

COPY CON  
 Crear archivos. (en MAC-OS usar TOUCH)



