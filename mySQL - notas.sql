/* 
> mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . 
> mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . mySQL . 

!---------------------
!        
!--------------------- 
 */


/* 
! ===========================================
! 				DBMS
! ===========================================

> Data Base Manager System
 Son programas denominados sistemas gestores de bases de datos.
 Es una colección de software muy específico, cuya función es servir 
 de interfaz entre la base de datos, el usuario

% FUNCIONES DEL DBMS

    / Metadatos

    / Construccion

    / Manipulacion

    / Compartir

    / Consultas

    / Transacciones
        Lectura o escritura

    / Proteccion
        contra funcionamiento defectuoso y seguridad contra acceso

    / Mantenimiento

% BASE DE DATOS
Una base de datos es un conjunto organizado de datos pertenecientes a un mismo
contexto y almacenados sistemáticamente para su posterior uso

% Ventajas de una Base de Datos
    / Mayor independencia
        No dependen de un soft especifico

    / Mayor disponibilidad
        de diferentes contextos y aplicaciones

    / Mayor seguridad
        Es mas facil backupearla que a un conjunto de datos no estrucuturados

    / Menor redundacia
        hay menos volumen de datos y mayor rapidez de acceso

    / Mayor eficiencia


% TIPOS DE BASE DE DATOS

? 1) por modelado

    / RELACIONAL
        coleccion de tablas. SQL es su mayor exponente

    / ORIENTADO A OBJETOS

    / OBJETO - RELACIONAL (o relacional extendido)
        una mezcla de ambas

    / JERARQUICO
        estructuras jerarquicas de arbol

? 2) por numero de usuarios

    / Monousuario
    / Mulitusuario

%---------------------
%  MODELO RELACIONAL
%---------------------

/ basado en la lógica de predicados y en la teoría de conjuntos

/ Se organizan en TUPLAS

    / Tablas = Relacion
    / fila = registro o tupla
    / columna = campo

% ENTIDAD
/ Elemento básico representado por el modelo entidad relación
/ Puede ser un obbjeto, una persona, una venta PARTICULAR
/ Tiene ATRIBUTOS

% ATRIBUTOS
/ Deben ser:
    / COMPLETOS
    / PLENAMENTE ELABORADOS
    / INDEPENDIENTES


% PK o ID o CLAVE CANDIDATA
    / Uno por cada entidad

    / Se marcan con un
    %                  @ o PK

    / Preferentemente son NUMERICOS

% RELACION
    / Es la AB


*/

/* 
! ===========================================
! 	     SQL (Structured Query Language)
! ===========================================
/ Se usa para:
    / acceder
    / actualizar
    / manipular datos

/ es un RDBMS (DBMS Relacional)

? Tiene DOS tipos de comandos:
    ? DDL (Data DEFINITION Language)
    / Crea y define nuevas bases de datos o tablas
        . CREATE TABLE  usuarios (
            nombre varchar(50),
            email varchar(50)
            );
            crea
        . DROP TABLE x
            borra o elimina
        . ALTER TABLE x ACCION
            modifica
            / acciones posibles:
                / RENAME TO nuevo_nombre
                / ADD [COLUMN] nombre_atributo definición_atributo
                / DROP [COLUMN] nombre_atributo
                / MODIFY   nombre_atributo   definición_atributo
                / CHANGE nombre_atributo   nuevo_nombre    nueva_definición
                / ALTER COLUMN nombre_atributo   nuevo_nombre   nueva_definición

    ? DML (Data MANIPULATION Language)
    / Para generar consultas, ordenar o filtrar
        . SELECT para comenzar la consulta
        . INSERT carga lotes de datos
        . UPDATE seria "subir" los cambios de valores de campos y registros
        . DELETE elimina registros    
 */
/* 
> ...............................
>      Pasos para arrancar
> ............................... */

--> 1) Defino la carpeta donde voy a guardar las tablas. Luego:
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] nombre_base_datos


--> 2) Creo tablas
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] nombre_de_tabla
(
campo1 tipo dato [NULL/NOT NULL] | CHECK (expresiónLógica) | [ DEFAULT expresiónConstante],
campo2 tipo dato [NULL/NOT NULL] | CHECK (expresiónLógica) | [ DEFAULT expresiónConstante ],
campo-N,
PRIMARY KEY(campo_llave),
FOREIGN KEY (campo_llave) REFERENCES tabla2 (campo_llave-tabla2)
)

--> 3) Inserto filas o tablas:
INSERT INTO nombre_tabla (columna1, columna2, columna3,...) 
        VALUES (valor, valor2, valor3,...);

--> 4) Actualizar y subir los cambios que realice. Con el WHERE pongo condiciones:
UPDATE nombre_tabla
SET col_nombre_1={valor1|DEFAULT} [,col_nombre_2={valor2|DEFAULT}]
[ORDER BY ...] [WHERE condicion]

--> 5) Eliminar filas que no se requieran. Uso WHERE para filtrar :
    --/ Si no uso un WHERE se borran TODAS las filas. Pero la tabla existe aun. Queda vacia.
    --/ para borrarla definitivamente hay que DROPearla
DELETE FROM nombre_tabla 
[WHERE condicion] 
[ORDER BY ...] 
[LIMIT cantidad_filas]

--> 6) Realizar consultas o busquedas:
SELECT

--> 7) Si quiero guardar esa consulta (si por ej solo veo X columnas e Y filas), creo una VIEW
CREATE VIEW


/* 
Clase JAVA WEB APIs

# Inserto usuario SIN encriptacion
insert into usuarios(correo, clave, fechaActualizacion, fechaCreacion)
values('user3@gmail.com', '1234', '2022-08-28', '2022-07-20');

# PASSWORDS ENCRIPTADAS
# si quiero insertar una password CON encriptacion
# usando aes_encrypt('1234', 'JavaWebApi')
insert into usuarios(correo, clave, fechaActualizacion, fechaCreacion)
values('user1@gmail.com', aes_encrypt('1234', 'JavaWebApi'), '2022-08-28', '2022-07-20');

# para desencriptarla uso el cast y el aes_decrypt
select correo, clave, cast(aes_decrypt(clave, 'JavaWebApi') as char(50)),fechaActualizacion, fechaCreacion
from usuarios;

# borra la tabla
truncate table usuarios;

 */