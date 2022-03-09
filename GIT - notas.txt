1
? WORKING DIRECTORY
carpeta local

2
* STAGING AREA
nube intermedia donde voy agregando mis cambios

3
! REPOSITORY
repositorio final



! Entrar a GIT Bash o el editor de turno

    . Chequear version:
    > git --version

    POR PRIMERA VEZ, se hace una sola vez

!Poner nombre y apellido

    > git config --global user.name "Alejandro Ingercher”


!Agregar mail

    > git config --global user.email "aleingercher@gmail.com"



************
Chequear datos:
    > git config user.email
    > git config user.name
    > git config --list


Para buscar ayuda:

    > git help config 
    > git config --help



!Luego, ir a la carpeta donde queremos instalarlo:

*** WORKING DIRECTORY
    > git init (o git init NOMBRE_DE_REPOSITORIO)

    . Ahi nos aparece un (master) en turquesa



!Agregar archivos al git (que se empiezen a actualizar):

*** STAGING AREA
    > git add . (el punto es para todos, sino pongo el archivo, onda index.html)


Chequeo que estoy trackeando

    > git status
    o 
    > git status -s


!Hago el primer COMMIT


*** REPOSITORY
    (el -m viene de Mensaje)
    > git commit -m "primer estado del proyecto"

    . Ahi me muestra los cambios que hice
    . Es importante que sean cortos, concisos y descriptivos



Si me equivoque con el Mensaje ( error en el mensaje)

    > git commit --amend -m "mensaje cambiado"



Para chequear el historial de commits:
    > git log
    o
    > git log  --oneline --decorate --all --graph
    . muestra los primeros 7 caracteres que sirve para agilizar


Para comprarar diferencias entre dos versiones
            (*nro de version 1*)   (*nro de version 2*)
    > git diff 96ce721 96ce321




* ****BRANCHES (features tambien)
Por si quiero agregar una nueva funcion, o hacer una modificacion grande ,creo un branch

    > git branch prueba1


. Si quiero crearla y cambiarme de una

    > git checkout -b <branch_name>


. para cambiarme a un branch. Es para movernos entre branchs

    > git checkout prueba1




. Ahi me aparece (prueba1) en vez de (master)

    > git checkout master 


. Ahi vuelvo al (master)



. Tambien puedo buscar el numero de version y usarlo para ir 
    moviendome por nro de commit

    > git checkout 40c4ee5

    Asi vuelvo a la version que ponga. Saco el nro de version con
        > git log  --oneline --decorate --all --graph


. para ver la LISTA de BRANCHES

    > git branch -l


. para BORRAR BRANCHES (tengo que estar parado en otro branch)

    > git branch -D *nombre_de_branch_a_borrar*

***** STASH
. A veces quiero guardar cambios sin commitear, para por ejemplo, actualizar el proyecto base sobre el que trabajo

.1) Tengo que tener cambios sin commitear

.2) para stashear los cambios sin commitear
    >  git stash save 'mi mensaje'

.3) SI lo quiero recuperar
    > git stash pop

.4) Otros comandos
    > git stash list
    muestra la lista de stash que haya


***** MERGE
    . Tengo que estar parado en el master
    
    > git chechkout master
    > git merge prueba1



SI TENGO QUE CAMBIAR UN NOMBRE DE archivo

    > git mv oldname newname



***** Visual Studio Code

    * Para abrir la carpeta actual en VS Code
        > code .

    ? VSC muestra mensajes al lado de los elementos en el explorer:

    * U es UNSTAGED (nunca se agrego )

    * A es ADDED

    ! M es MODIFICADO pero no se comiteo

    * M es MODIFICADO y COMITTEADO



** TAGUEAR versiones para interactuar con github
Puedo usar tags para las versiones.
Lo que haces es guardar una version completa del codigo hasta esa etiqueta, 
asi que en caso de querer volver ahi, bajo el .rar y tengo todo joya


Primero creo un tag. Es como un save completo del proyecto
    > git tag versionPrimera -m "Esta es la version base del proyecto"

Luego pusheo el tag

    > git push --tags


Luego puedo revisar la etiqueta. Muestra info copada

    > git show versionPrimera


Para borrar una etiqueta

    > git tag -D versionPrimera


RESUMEN

git init: Indicarle que en ESE directorio, donde ejecutamos este comando, será usado con GIT.
git add .: Agregar todos los archivos creados, modificados, eliminados al estado 2 (stage)
git commit -m “Mensaje”: Mensaje obligatorio para indicar que hemos cambiado por ejemplo, al estado 3.
Git log --oneline: Para conocer los códigos de los commits realizados.
Git checkout rama: Para cambiar de rama o ir a un commit específico (debemos conocer su código anteriormente) 
git merge rama: Debemos estar en MASTER para fusionar.
git branch rama: Creación de una rama (si queremos eliminar una rama ponemos git branch -D nombre-rama)

*************
COMANDOS para consola
*************

/? Si quieres saber más de un comando, añade /? para ver la ayuda relacionada. Te será muy útil para ver las muchas opciones de cada comando.

HELP Te mostrará una lista de comandos disponibles.

DIR Es el comando más conocido de DOS y sirve para ver el contenido de una carpeta.
(en MAC-OS usar LS)

CD Sirve para entrar en una carpeta o salir de ella con CD…

CLEAR limpiar consola

MKDIR Con este comando crearás una carpeta nueva. Con RMDIR podrás eliminarla.

MOVE y COPY Son los comandos para mover y copiar respectivamente archivos. Deberás indicar el nombre del archivo con su ruta (si está en otra carpeta en la que te encuentras) y la ruta de destino.

RENAME Sirve para renombrar un archivo o carpeta. Hay que indicar el nombre original y el definitivo.

DEL Es el comando para eliminar un archivo. Recuerda que no irá a la Papelera, así que piénsatelo antes de borrar nada. Y para eliminar carpeta usa el comando RD (en MAC-OS usar RM para archivos / para eliminar carpetas RM -RF)

EXIT Cierra la ventana de la línea de comandos o símbolo del sistema.

COPY CON Crear archivos. (en MAC-OS usar TOUCH)



