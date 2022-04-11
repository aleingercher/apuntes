/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        comandos consola
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$ tsc -v
    veo la version de tsc que tengo

$ tsc --init
    Inicia el archivo de config

$ tsc
    transpila todos los archivos

$ tsc -w (o tsc --watch)   
    Inicia el observer para que vaya transpilando en vivo

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            VENTAJAS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

. Al poner el tipo, ayuda con el intellisense

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            VARIOS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
. Por defecto, undefined es asignable a una variable de tipo null.
*/
let vacio = undefined
/*  

.   ARGUMENTOS OPCIONALES y DEFAULT
    Opcionales:
        parametro?: tipo

    Default
        parametro: tipo = valor
*/
const fullName = (firstName: string, lastName?: string) => {}; // OK . Aca el opcional es el ultimo
const fullName = (firstName: string, lastName?: string, upper: boolean = false) => {}; // OK . Aca al poner un default, lo hace opcional al ultimo argumento

const fullName = (firstName?: string, lastName: string) => {}; // WRONG . Aca el opcional no es el ultimo. Esto no esta permitido



/*  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        TIPOS DE DATOS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PRIMITIVOS:
    string
    number
    boolean
    null o Undefined:
        . Para que pueda usar null como valor booleano: "strictNullChecks": false,     
    symbol
    VOID:
        . Es lo que retorna una funcion sin return implicito
        . Evalua a undefined

COMPUESTOS:
    Object
    Function   defino asi el tipo: 
        */ let myFunction: (x: number, y: number)=> number = (x,y)=>{
            return x + y;
        };/*  
    Clases
    Arreglos
    
PROPIOS DE TYPESCRIPT:
    Nuevos tipos
    Interfaces
    Genericos
    ENUM:
 */   
     // Asi se declara
     enum Audiolevel {
        min, // 0
        medium, // 1
        max // 2
    }

    // pero se imprime esto
    // {
    //     "0": "min",
    //     "1": "medium",
    //     "2": "max",
    //     "min": 0,
    //     "medium": 1,
    //     "max": 2
    // }

     // Puedo darle un valor inicial, diferente al default
     enum Audiolevel {
        min = 10, // 10
        medium, // 11
        max // 12
    }
/* 
    TUPLAS:
*/ 
        const hero: [string,number] = ['Dr Strange', 100]
        const heroTrupla: [string, number, boolean] = ["Dr Strange", 100, true];
/* 
..........................................................................

Inferir tipos
....................

Al declarar una constante, estoy declarando un nuevo tipo
La idea es declarar nosotros mismos el tipo de dato

*/

// FUNCION ANONIMA AUTOINVOCADA
// sirve para encapsular el codigo. No quiero que los archivos choquen entre si
(()=> {
    const a: number  = 10;

    console.log(a)
})()


/* 
Personalizados
....................

Se definen

type Nombre = {...}
*/

type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
};

let flash: Hero = {
  name: "Barry Allen",
  age: 24,
  powers: ["Super velocidad", "Viajar en el tiempo"],
  getName() {return this.name}
};

let superman: Hero = {
    name: "Clark Kent",
    age: 34,
    powers: ["Super velocidad", "Super fuerza"],
  };

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            CASTEO
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

let avenger: any = 'Dr. Strange';

// para que me muestre el intelliSense, puedo decirle que lo trate como string, para que muestre la ayuda

console.log( avenger.charAt(0) ) // WRONG
console.log( ( avenger as string ).charAt(0) ) // OK
console.log( <number>avenger.charAt(0) ) // OK pero mas feo

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            TS.CONFIG
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Los campos que estan comentados no estan activos. Es decir, tienen un valor recomendado, pero no es un default. Si queremos que actuen, hay que descomentarlos.
 
{
"sourceMap": true,   
    . Create source map files for emitted JavaScript files.
    . Sirve para poder debuguear correctamente y que por ejemplo un console.log te muestre en que linea esta del archivo.ts

"removeComments": true,    
    . Remueve los comentarios del archivo JS

"outFile": "./main.js",
    . Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.
    . Sirve basicamente para que no gener un archivo .js por cada .ts


},
  "exclude": [
      "nombre_carpeta_a_excluir"
            . Aca pongo el path de las carpetas que quiero que no me autogenere el .js. El node_modules ya lo tiene por defecto
  ],
  "include": [
      "nombre_carpeta_a_INcluir"
            . SOLO LAS CARPETAS QUE ESTEN ACA VAN A INCLUIRSE. O sea, mucho cuidado con esta propiedad
  ]



 */