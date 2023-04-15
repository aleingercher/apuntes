# GITHUB

Comandos utiles

> http://guides.beanstalkapp.com/version-control/common-git-commands.html


para logear, tengo que tener una carpeta con un COMMIT HECHO con GIT

luego


## git remote
    git remote add origin https://github.com/aleingercher/web-natyrocca.git


## Verify new remote
    git remote -v
    o
    git config remote.origin.url

    > origin  https://github.com/user/repo.git (fetch)
    > origin  https://github.com/user/repo.git (push)


## git push
Ahora pusheo mi repo a github

> <h2>-u</h2> es por Upstream, para dejar seteado ese remote 

    git push -u origin master

    // o si quiero que mi "master" se llame "main"

    git branch -M main
    git push -u origin main


Luego de la primera vez, pongo solo

    git push
, no hace falta poner el "origin main"

Si quiero pushear TODAS LAS RAMAS A LA VEZ

    git push --all


## git pull
    //       de donde / y de que rama
    git pull origin main


> TENGO QUE CHEQUEAR QUE MI MAIL SEA PUBLICO EN GITHUB
(sino tira error)


### SUBIR LA PAGINA

GitHub nos permite publicar nuestros proyectos online. Para generar una GitHub page debemos: 

1. Ir a los “Settings” de nuestro repositorio 
2. Scrollear hasta abajo y  activar nuestro GitHub page
3. Seleccionar qué rama queremos usar
4. Guardar los cambios y GitHub cumplirá la función básica de cualquier otro Hosting.

Importante: El proyecto solo debe ser de archivos estáticos, ningún archivo que requiera de BackEnd especial.

SI TENGO QUE CAMBIAR el nombre o mover un archivo

> git mv oldname newname

