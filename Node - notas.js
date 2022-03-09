/* 
, Node.js
    . Entorno en tiempo de ejecucion multiplataforma
    . De codigo abierto
    . Asincrono
    . Es para la capa del servidor 
    . Model dirigido a evento, de no bloqueo
    . Rapidismo. Sobre le motor de JS de chrome V8

    . Altamente escalable, gracias al mecanismo de evento quen hace que el servidor responda no bloqueante

    . Sin buffering. Produce datos en trozos

    > module.exports
        / sirve para poder utilizar los metodos al importar este modulo en otro

        module.exports.NOMBRE = variable

        module.exports.FUNCION = funcion()

        module.exports = {
            NOMBRE: variable,
            FUNCION: funcion()
        }

, Nodemon
/ https://www.npmjs.com/package/nodemon

Libreria que ayuda al desarrollo de aplicaciones reiniciando la app cuando se ejecutan cambios

.1 Instalar libreria:
    ? $ npm i nodemon --save

.2 Agregar la siguiente linea en:
    % ./package.json --> EN "scripts"

    ! el --inspect es para abrir el debugg
    "nodemon": "nodemon --inspect app.js"

Luego, al correr:
? $ npm run nodemon
Va a iniciar el debugg. Lo puedo ver desde el navegador, en la consola


, .ENV
/ https://www.npmjs.com/package/dotenv

.1 Instalar libreria:
    ? $ npm i dotenv --save

.2 Creo un archivo:
    % .env
    
    . y lo relleno por ejemplo con:
    SERVER_HOST_NAME=127.0.0.1
    SERVER_PORT=3000

.3 Incluir a .env e el .gitignore

    # Variables de entorno
    .env

.4 Instanciar la libreria en el codigo:

    require('dotenv').config();

.5 Utilizar las variables como sigue

    const hostname = process.env.SERVER_HOST_NAME;
    const port = process.env.SERVER_PORT;
*/