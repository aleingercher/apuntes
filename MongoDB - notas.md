# MONGOdb
- Viene de _humongous_ que significa _gigante_
- Base de datos no relacional (NoSQL)
- Permite la ejecucion de JS del lado del servidor
- Estructura BSON (JSON Binario). Tiene colecciones con documentos dentro
- Potente sintaxis de consulta
- Cualquier campo puede ser indexado. Puede tener indices secundarios
- Escalable 
- Proposito general
- Esta escrito en C++
- __Document__ Oriented
- Schemaless
- Facil escalado horizontal. Si crecemos, agregamos mas maquinas. No necesitamos una mas potente, sino mas compus.

- Surge de las __Limitaciones de las bases SQL__
    - Escrituras no durables ni verificables
    - Problemas de escalabilidad
    - Era complicado el manejo de transacciones

## Estructura
> TABLAS > BASES DE DATOS > COLECCIONES > DOCUMENTOS

## MongoDB Server

### Atlas  
> La nube

### Server
> Local

## Instalacion

### Agregar al PATH

1. _C:\Program Files\MongoDB\Server\5.0\bin_

2. Voy a Environment Variables > User PATH y la pego

3. Voy a _C:_ y creo una carpeta _C:/data/db_

## SHELL

- Corre Javascript. Puedo correr comandos de JS, usar librerias (Date, Math, etc...)

## Comandos basicos
Chequear instalacion  

    mongod --version

Comenzar la ejecucion del server mongo  

    mongod

Conectar al servidor y abrir mongo SHELL

    mongo

Ver la DB ACTUAL

    db

Ver TODAS las DB

    show dbs

Usar alguna DB. Si no existe LA CREA

    use _NOMBRE DB_

HELP

    db.help()

## Comandos CRUD

Crear DB

    use _NOMBRE DB_

Borrar DB (parado en la base que quiero borrar)

    db.dropDatabase()

Ver las colecciones

    show collections

Crear coleccion

    // Asi creamos la coleccion mientras insertamos el primer doc
    db._NOMBRE COLECCION_.insert({"name": "laptop"})

    o

    db.createCollection("users")

Borrar coleccion
    
    db._NOMBRE COLECCION_.drop()

Insertar un documento

    db.products.insert({"name": "laptop"})

Buscar TODOS los documentos

    db.products.find()

    o

    db.products.find().pretty()


Buscar filtrando

    db.products.find({name: "mouse"})

Buscar el PRIMERO

    //                                  devuelve solo el name y description
    db.products.findOne({name: "mouse"}, {"name": 1, "description": 1, "_id": 0})


## METODOS
/https://docs.mongodb.com/manual/reference/operator/query/#std-label-query-projection-operators-top

    > db.COLLECCION.insertMany() 
        / inserta nuevos documentos en la coleccion indicada
        / The operation returns a document that contains the acknowledgement indicator and an array that contains the _id of each successfully inserted documents.

    > db.COLECCION.find({<field> equals <value>}) --> FILTER
                        / { "directors" : "Steven Spielberg"}

    % COMPARACIONES
    /https://docs.mongodb.com/manual/reference/operator/query-comparison/#std-label-query-selectors-comparison

    > db.COLECCION.find( {"awards.wins": { $gt: 100 } })
        / Uso {} para usar COMPARACIONES
        
    > db.COLECCION.find( {})
    / Uso {} para usar COMPARACIONES

    > db.movies.find( {<REGISTROS>}, { "title": 1, "directors": 1, "year": 1 } );
    / filtrar columnas. Si le paso 0, no la muestra
    / Si REGISTROS lo dejo vacio, me muestra todos. Para filtrar, uso las busquedas como puse antes

    > db.movies.aggregate( [
        // unwind separa cada elemento de ese campo en un documento nuevo
        { $unwind: "$genres" },
        // doy nombre a la columna con los valores de ese campo
        {
            $group: {
            _id: "$genres",
            // creo una columna con la operacion $count
            genreCount: { $count: { } }
            }
        },
        // orden de mayor a menor segun esa columna
        { $sort: { "genreCount": -1 } }
    ] )

    % Operadores para filtrar
        $lt = Less than
        $gt = Greater than
        $in = search in an Array
 
, ExpressJS
    . Es un framework de Node.js
    . Permite construir aplicaciones web en poco tiempo
    . Tiene un middleware copado para las peticiones del cliente
    . Entorno minimalista
    . Similar a MVC
    . Puede usarse para SPA, multipagina e hibridas

    . Define un enrutamiento basado en una URL y HTTP
    . Es ASINCRONICO y tiene un unico hilo

.1 
    ? $ npm init

.2 instalamos Express y http
/ https://www.npmjs.com/package/http
    ? $ npm i express --save
    ? $ npm i http -save
    ? $ npm i @types/node --save
    // esto nos ayuda con el intellisense para vscode

.3 creamos un archivo app.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Primer proyecto con Node.js con Express')
})

server.listen(port, hostname, ()=> {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});


.4 Agregar el debugging en:
    % ./package.json

    "scripts": {
        ... 
        "start": "node --inspect app.js"
    },

.5 Luego poner en marcha el proyecto:
    ? $ npm run start


, MongoDB Atlas

.1 creo una cuenta

.2 construyo mi primer CLuster
    / un cluster es una agrupacion de ordenadores o nodos

.3 selecciono alguna que tenga etiqueta de Free

.4 Voy a Dabase Access --> nuevo usuario Administrador

.5 Network Access --> Allow access from anywhere

.6 Clusters (selecciono mi cluster) --> Collections --> Create Database

.7 Pongo un nombre de DB y un primer documento

.8 Databases --> Connect --> Selecciono Node.js

.9 Copio la URL donde Mongo me pide la URL de mi DB.
    / Remplazo el password correcto en la url y el nombre de la DB
    mongodb+srv://admin:admin@ingercher.2hnfv.mongodb.net/ingercher?retryWrites=true&w=majority

.10 Una vez que lo conecte desde Express, voy a Atlas e inserto un documento


, Mongoose
/ https://mongoosejs.com

Es una libreria de
Modelado de
Datos de 
Objeto (ODM) para Mongodb y Node.js

    . Gestiona relaciones entre datos
    . Da validaciones de Schema
    . Se usa para traducir codigo a MongoDB
    . Incluye casteo de tipo incorporado, validacion de construccion de consultas.

.1 Instalar libreria:
    ? $ npm i mongoose --save

.2 Importacion y establecimiento de conexion con MongoDB en:
    % ./index.js
    
    const express = require('express');
    const mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/testdb", {
        useNewUrlParser: true }).then( () => {
            const app = express();
            app.listen(5000, ()=> {
                console.log("Servidor levantado!")
            })
        })

.3  Crear al menos un archivo con el nombre, por ejemplo:
    % ./Modelo.js

    const mongoose = require("mongoose");
    const schema = mongoose.Schema({
        propiedad1: String,
        propiedad2: String
    });

    module.exports = mongoose.model("Modelo", schema);

.4 Crear un archivo para el enrutamiento de la API via Express:
    % ./rutas.js

    const express = require("express")
    const Modelo = require("./modelos/Modelo")
    const router = express.Router();

    router.get("/modelos", async (req, res) => {
        const modelos = await Modelo.find();
        res.send(modelos)
    })

.5 Puedo usar query helpers
   

        % en el model
    schemaPersona.query.byEdad = function(min,max) {
        console.log('min -> ' + min);
        console.log('max -> ' + max);

        return this.find({}).where('edad').gt(min).lt(max)
    }

        % en el rutas.js
    

    . un ejemplo con GET puede ser
    router.get('/personasByEdad/:min/:max', async (req, res) => {
    // aca hacemos una llamada asincronica a una funcionque se llama byEdad
        const personas = await personalbar.find().byEdad( req.params.min, req.params.max);
    res.send(personas);
})


!!!!!!!!!!!!  PASOS para conectar MongoDB y Node JS

se suele correr en el puerto 27017

.1 Instalar node.js
.2 
    ? $ npm init
.3
    ? $ npm install mongodb --save

.4 Bajar e instalar mongoDB, para tener una base de datos local
    ! install MongoD as a Service
    ! Install MongoDB Compass
    / https://www.mongodb.com/try/download/community
    
    En caso de no correrlo como servicio, hay que levantarlo:
    ? $ mongod --dbpath=/data

.5 Crear un archivo app.jsx y en la carpeta raiz configurar:
    ? $ node app.jsx

    y usando la API siguiente, podemos realizar el CRUD y operar esa base de datos
    / https://mongodb.github.io/node-mongodb-native/3.4/api/


    % CONECTAR Node.js con Express

, Postman

.1 Voy a Collections.

    . La alternativa es por
        /        metodo            url            header                 info del payload
        ? curl -X POST localhost:5000/api/personas -H  {contenido header} --data '{datos}' 
