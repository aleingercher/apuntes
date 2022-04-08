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

.   ARGUMENTOS OPCIONALES 
    Los parametros opcionales se declaran asi
        parametro?: tipo
*/
const fullName = (firstName: string, lastName?: string) => {}; // OK . Aca el opcional es el ultimo
const fullName = (firstName: string, lastName?: string, upper: boolean = false) => {}; // OK . Aca al poner un default, lo hace opcional al ultimo argumento

const fullName = (firstName?: string, lastName: string) => {}; // WRONG . Aca el opcional no es el ultimo. Esto no esta permitido


/*  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        TIPOS DE DATOS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PRIMITIVOS:
    String
    Number
    Boolean
    Null o Undefined:
        . Para que pueda usar null como valor booleano: "strictNullChecks": false,     
    Symbol
    VOID:
        . Es lo que retorna una funcion sin return implicito
        . Evalua a undefined

COMPUESTOS:
    Objetos literales
    Funciones
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            CASTEO
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

let avenger: any = 'Dr. Strange';

// para que me muestre el intelliJ, puedo decirl que lo trate como string, para que muestre la ayuda

console.log( avenger.charAt(0) ) // WRONG
console.log( ( avenger as string ).charAt(0) ) // OK
console.log( <number>avenger.charAt(0) ) // OK pero mas feo
