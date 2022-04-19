/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Acerca de
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    documentacion
    https://www.typescriptlang.org/

    . Creado en 2012 por Microsoft
    . Es un super set de Javascript
    . Al poner el tipo, ayuda con el intellisense


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        comandos consola
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$ tsc -v
    veo la version de tsc que tengo

$ tsc --init
    Inicia el archivo de config

$ tsc
    transpila todos los archivos

$ tsc fileName.ts
    transpila el archivo especifico

$ tsc --noEmitOnError fileName.ts
    SOLO transpila si NO hay ERRORES el archivo especifico

$ tsc -w (o tsc --watch)   
    Inicia el observer para que vaya transpilando en vivo

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

"noEmitOnError": true,                                   
    . No podes compilar si hay errores

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

Desestructuracion
....................

Puedo llamar un objeto destructurado como argumento y pasarle el tipo para que complete el intelliSense
*/
const printAvenger = ({ironman, ...rest}: Avengers) => {
    console.log(ironman, rest.vision)
}


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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    CLASSES en JAVASCRIPT ES6
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Un ejemplo bobo de como funciona las clases en JS. 
Sin TS es un bardo...

Accesibilidad de las propiedades:
    Públicas
    Privadas
    Protegidas

Métodos de las clases que pueden ser:
    Públicos
    Privados
    Protegidos

Herencia:
 */

class Avenger {
    name;
    power;

    constructor(name, power) {
        this.name = name,
        this.power = power;
    }
    
}

class FlyingAvenger extends Avenger{
    flying;

    constructor( name, power) {
        super(name, power);
        this.flying = true;
    }
}

const hulk = new Avenger('Bruce Banner', 'pegar');
const falcon = new FlyingAvenger('Falcon', 'volar');

console.log(hulk)
console.log(falcon)


/* 

1. Crear clases en TypeScript 
*/
    // class Avenger {
    //     private name: string;
    //     public team: string;
    //     public realName?: string;
    //     static avgAge: number = 35;

    //     constructor(name: string, team: string, realName?: string){
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }
    // }

    class Avenger {
// METODOS ESTATICOS
        // los metodos estaticos son comunes a todas las instancias de esta clase.
        // se llaman:
        //      Avenger.avgAge
        static avgAge: number = 35;

        static getAvgAge() {
            // aca me refiero al nombre de la clase en si. O sea Avenger
            return this.name; // Avenger
        }

        constructor(
        private name: string,
        private team: string,
        public realName?: string
        ) {}
    }

// HERENCIA


    class Xmen extends Avenger {
        constructor(
            //tengo que crear los parametros que le paso al super antes que nada 
            name: string,
            realName: string,
            public isMutant: boolean = true,
        ){
            super(name, realName); // lo primero que tengo que llamar. El super()
            console.log('XMENNNNN')
        }
// GETTER
        get fullName(): string {
            return `${ this.name } - ${ this.realName }`
        }

// SETTER        
        // no lleva un type!
        set fullName(name: string) {

            // puedo agregarle validaciones
            if(name.length < 3) {
                throw new Error('El nombre debe contener mas de 3 letras')
            }

            this.name = name;
        }

        // Lo uso de esta manera:
        //  wolverine.fullName = 'Jose Armando';
        // Puedo hacer una nueva funcion en base a la anterior
        // Llamar funciones del padre, desde los hijos
        getFullNameDesdeXMEN() {
            console.log( super.getFullName())
        }

        // O sobreescribir la anterior
        get fullName(): string {
            return super.getFullName() +  ' funcion sobreescrita'
        }
    }
/* 

// CLASES ABSTRACTAS
    // sirven para que otras clases implementen lo que yo quiero.
    // NO se instancia
    // Las clases que la extienden, son tambien del tipo Mutante en este caso
 */
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}

        // este metodo SI o SI va a tener que ser definido en el hijo
        abstract superPower(): string ;
    }

    class XMEN extends Mutante { 
        // metodo obligado, por ser abstracto en la superclase
        superPower(): string {
            console.log(' poderes del BIEN ')
        }

        salvarMundo() {
            return 'Mundo a salvo'
        }
    }

    class Villain extends Mutante { 
        // metodo obligado, por ser abstracto en la superclase
        superPower(): string {
            console.log(' poderes del MAL ')
        }

        conquistarMundo() {
            return 'mundo conquistado'
        }
    }

    const wolverine = new XMEN('Wolverine', 'Logan')

    const magneto = new Villain('Magneto', 'Magnus') 

    console.log( wolverine)
    console.log( magneto)

    const printName = ( character: Mutante ) => {
        console.log(character.name)
    }

    printName(magneto)

// CONSTRUCTOR PRIVADO
    // sirve para manejar singletons
    // no se esta utilizando demasiado ahora
    class Apocalipsis {

        static instance: Apocalipsis;

        // este constructor solo se podra usar desde la instancia
        private constructor(
            public name: string
        ){}

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Nombre de apocalipsis');
            }
            return Apocalipsis.instance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    // apocalipsis1.changeName('Xavier')

    console.log(apocalipsis1, apocalipsis2, apocalipsis3)

    /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        INTERFACES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // NO son instanciables. Se pasan como un type
    // La diferencia es que PUEDEN EXPANDIRSE
    // NO tiene una representacion fisica en JS (como el tipo)
    // NO suelen usarse para metodos. Si necesitamos pasar un metodo, mejor utilizar una clase
    // si paso un metodo, este se debe implementar obligatoriamente
    // Se pueden implementar o usarse como un type
    */

    interface XMEN {
        name: string,
        realName: string,
        mutantPower( id: number ): string
    }

    interface Human {
        age: number;
    }

// IMPLEMENTS
    class Mutant implements XMEN, Human {
        public age: number;
        public name: string;
        public realName: string;

        mutantPower(id: number): string {
            return ''
        }
    }
    
// COMO UN TYPE    
      let wolverine: Mutant = {
        name: "Wolverine",
        age: 24,
        realName: 'Logan',
      };