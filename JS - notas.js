
/* 
! ===========================================
! 				CONCEPTOS VARIOS
! ===========================================
*/
//!---------------------
//! STRING LITERAL
//!---------------------

// para ingresar texto con variables uso el 'backtik'
// en conjunto con la variable, puesta asi: ${VAR}
// pueden hacerse operaciones dentro tambien
let resultado = 10;
console.log(`el resultado es ${resultado + 5}`)


console.log() // imprime la instruccion dentro del parentesis

console.table() // devuelve una tabla con el elemento / s que haya dentro


// cuando armas un carrito, suele ser un array de objetos

/*
% Metodos para operar */

/*
> setTimeout .
sirve para agregar un delay al inicio de una instruccion. Ejecutar la funcion luego de X segs */

boton.addEventListener('click', function () {
	setTimeout(() => {
		alert('hola!')
	}, 2000); // esto retrasara 2000 ms ( 2s) el inicio de la funcion declarada
})


/* EN JS TODO SE PUEDE PASAR A BOOLEANO */
while(div.firstChild) // va a evaluar si ese div tiene un firstChild!!



/* 
! ===========================================
! 				VARIABLES
! ===========================================
*/

// let. Definiendo variables con sintaxis ES6
let variable2 = 'Variable ES6';
variable2 = "Otro contenido";

//const . Constantes con ES6
const PI = 3.1416

let condicion = PI;
let condicion = Boolean(1) // Verdadero
let condicion = Boolean(0) // Falso
let condicion = Boolean("Algo") // Verdadero
let condicion = Boolean("") // Falso
let condicion; // Falso (undefined)
let condicion = null; // Falso

/* 
! ===========================================
! 				CONTROL DE FLUJOS
! ===========================================
*/

 /* OPERADORES */

//  Comparacion == (relajada)
 console.log(2 == "2");
 
//  Comparacion === (estricta)
 console.log(2 === "2");
 
//  Comparaciones de magnitud
 console.log(2 > 5);
 console.log(2 >= 1);
 console.log(2 <= 1);
 console.log(2 < 10);
 
 let resultado = false;
 
//  Operador NOT
 if (!resultado) {
     console.log("Dentro del if");
 }
 
//  Operador "distinto" (relajado)
 console.log(2 != "2");
 
//  Operador "distinto" (estricto)
 console.log(2 !== "2");


/* 
! ===========================================
! 				CONDICIONALES
! ===========================================
*/

//* if

if (resultado > 20) {
	console.log("Mayor que 20");
} else if (resultado > 10) {
	console.log("Mayor que 10");
} else {
	console.log("Menor o igual que 10");
}


//* OPERADOR TERNARIO
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// PREGUNTA            ?          IF TRUE                     :  IF FALSE
shipping.free_shipping ? '<p class="envio">Envio gratis!</p>' : ""

//. Variante de AND
//                  BOOLEANO       esto se muestra si es true
const operadorAND = activo  && 'Mostrar esto si la primera parte de TRUE'



/* 
! ===========================================
! 				LOOPS
! ===========================================
*/

/*
% ----------------- FOR ---------------------- 
% --------------------------------------------
ciclo for
*/


/* continue . break . Cantidad fija de iteraciones */
for (let i = 0; i < 10; i++) {
	if (i == 5) {
		// Paso a la iteracion siguiente
		continue;
	}
	if (i == 7) {
		// Termino el ciclo
		break;
	}
	console.log(i);
}


/*
?for... in */

// puedo usarlo para iterar sobre elementos de un objeto

for (let prop in Producto) {
	console.log(prop)
//esto va a imprimir cada PROPIEDAD del objeto
}

// PERO si fuera un array, imprimiria el INDICE
for(mes in meses) {
	console.log(mes)
}
// 1, 2, 3 , 4... 12



/*
? for... of */

// para extraer cada propiedad de un ARRAY tengo que usar

for(mes of meses) {
	console.log(this)
}

// puedo tambien crear una variable que cambie su valor respecto al contenido del array
for(let precio of [10, 100, 87 ]) {
	plataEnBilletera  = plataEnBilletera - precio
  }



// podria hacerlo con el forEach y sacar ambos datos
meses.forEach((mes, nro) => console.log(mes, nro))
// 'Enero' 0
// 'Febrero' 1 ....



/*
% ----------------- WHILE -------------------- 
% --------------------------------------------
*/

let i = 0

while (true) {
	if (i == 7) {
		break;
	}
	console.log(i);
	i++;
}

/*
?  do while . Ciclo DO WHILE ---------
 */

//no se usa tanto
let condicion = true
let j = 0;
do {
	console.log(j);
	j++
} while (condicion)


/*
% ----------------- SWITCH -------------------- 
% --------------------------------------------
*/
/* Cada condición se evalúa y si se cumple, se ejecuta lo que esté indicado adentro.
Normalmente, después de las instrucciones de cada case se incluye la sentencia break
 para terminar la ejecución del switch, aunque no es obligatorio.

¿Qué sucede si ningún valor de la variable del switch coincide con los
 valores definidos en los case? En este caso, se utiliza el valor default 
 para indicar las instrucciones que se ejecutan cuando ninguna condición
  anterior se cumplió.
 */

const opcion = prompt("Ingrese una opcion");

operar();
    

function operar(opcion) {
	let respuesta;

	switch (opcion) {
		case "sumar":
			respuesta = "Ingresaste la opcion 1";
			break;
		case "restar":
			respuesta = "Ingresaste la opcion 2";
			break;
		case "multiplicar":
			respuesta = "Ingresaste la opcion 3";
			break;
		case "dividir":
			respuesta = "Ingresaste la opcion 4";
			break;
		default:
			alert("Ingresaste una opcion incorrecta")
			respuesta = undefined;
			break;
	}

	return respuesta;
}

/* 
! ===========================================
! 				FUNCIONES
! ===========================================
*/

 /* Diferencia entre funcion y metodo */
miFuncion(); //Funcion "comun"
producto.mostrarInfo(); // Metodo


/* Function expression */
const saludar = function (nombre) {
	console.log(`Saludos ${nombre}!!`);
}

/* Function declaration */
function sumar(x, y) {
	// let suma = x + y;
	console.log(`El valor de la suma es ${x + y}`);
	return x + y;
	console.log("despues") // No se ejecuta
}

// Arrow function (Function expression)
const restar = (x, y) => x - y;


// arrow function . =>
/* Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body. */

// Traditional Function
function nombreFuncion (a) {
    return a + 100;
}
  
// Arrow Function Break Down
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
}
  
// 2. Remove the body brackets and word "return" -- the return is implied.
  (a) => a + 100;
  
// 3. Remove the argument parentheses
  a => a + 100;


/* 
! ===========================================
! 				OBJETOS
! ===========================================
*/

  /* En programación, y también en JS, Un objeto es una colección de datos
   relacionados y/o funcionalidad (que generalmente consta de variables 
	y funciones, denominadas propiedades o atributos y métodos cuando están dentro de objetos)
	. Por ejemplo: el objeto Persona, tendría como una propiedad, la altura,
	 y como un método, hablar.
 */


/*
% ----------------- THIS -------------------- 
% --------------------------------------------
*/

/* 
	El uso de la palabra reservada this, funciona con las siguientes reglas:

	/ Dentro de una función, refiere a la función en sí misma

	/ Dentro de un objeto, refiere al objeto propiamente dicho
 */


 // una forma de crear objetos
let miObjeto = new Object();
miObjeto.nombre = 'Alejandro';
miObjeto.apellido = 'Ingercher';
miObjeto.edad = 37

//puedo usar corchetes tambien
miObjeto['pelo'] = 'ninguno'


/*
% ----------------- CONSTRUCTOR -------------- 
% --------------------------------------------
*/

function Producto(nombre, ancho, alto, pulgadas, precio) {
	this.nombre = nombre;
	this.ancho = ancho;
	this.alto = alto;
	this.pulgadas = pulgadas;
	this.precio = precio;
	//esto es un METODO
	this.mostrarInfo = function () {
		console.log(`Este producto es: ${this.nombre} y tiene un precio de $${this.precio}`);
	};
	// y returnear elementos del objeto
	this.getName = function () {
		return this.nombre;
	};
	//puedo meter funciones externas.
	this.setName = cambiarNombre(otroNombre);
}

function cambiarNombre(nuevoNombre) {
	this.nombre = nuevoNombre;
}


/*
% ----------------- DESTRUCTURING ------------ 
% --------------------------------------------
// Se ingreso en ES6
*/

// . asi extraia las propiedades de un objeto y las asigno a una variable
const nombre = producto.nombre;
const precio = producto.precio;

// Igual a esto, es hacerlo de esta forma. Las llaves a la izq, y el objeto va a la derecha
// aca debo poner el MISMO nombre de la propiedad dentro de las llaves
const {PROP1, PROP2, PROP4} = OBJETO

const {nombre, precio} = producto

// . para sacar propiedades anidadas

const {nombre, info:{dni}} = persona;

// . Le paso como valor por defecto 'Ale'. Por si no encuentra al objeto, le paso ese valor por defecto.
const {nombre = 'Ale'} = OBJETO seleccionado de una lista de objetos;

// . Puedo cambiar el nombre de la variable NOMBRE a EPONIMO

const { nombre: eponimo } = persona;
console.log(eponimo);


const getPersona2 = ({ edad, nombre, dni, sexo = "M" }) => {
	// agrego el atributo sexo que no es parte del objeto original
	// idealmente le paso un valor por default, porque me devuelve 'undefined' sino
	/* console.log(nombre, edad, dni, sexo ); */
};
getPersona2(persona);

// . Si tengo una funcion que retorne un objeto con objetos anidados
const getPersona3 = ({ edad, nombre, dni, sexo = "M" }) => {
	return {
		id: dni,
		nacimiento: 2021 - edad,
		latLong: {
			lat: 1234854,
			long: -6848613,
		},
	};
};

// > Destructuracion anidada
const {
	id,
	nacimiento,
	latLong: { lat, long },
} = getPersona3(persona);
/* console.log( id, nacimiento, lat, long); */


// > Destructuring de arrays
let arrayPersonas = ["ale", 'azu', 'naty', 'jano']

const [primero,segundo] = arrayPersonas

console.log( primero ) //    'ale'

/*
% --------------- UNIR OBJETOS --------------- 
% --------------------------------------------
*/

const info1 = {
	nombre: "Pepito",
	edad: 67
}

const info2 = {
	cursos: 'Javascript',
	aprobado: true
}

/* Sintaxis anterior a ES6 */
const infoTotal = Object.assign(info1, info2);



/*
?  con SPREAD OPERATOR (los 3 puntitos) ---------
 */

//decir ...ALGO es igual a copiar el contenido del objeto
// separo con COMA
const infoTotal = { ...info1,
		
	...info2 };

/*
% -------------OBJECT ENHANCEMENT ------------ 
% --------------------------------------------
*/
// variables entre llaves y ya puedo formar el objeto
// Es como la contracara del destructuring

const a = 'don pepito';
const b = 'hola';
const c = 'don jose';

const cancion = {
	b,
	a,
	b,
	ultima: c
}

/*
? para acceder a una propiedad de un objeto dentro de un array
 */

carrito[1]['nombre'] //Mouse

// o

carrito[1].nombre


/* 
? para sacar el largo de un objeto:

> Object.keys(OBJETO).length
*/
Object.keys(cancion).length


/* 
! ===========================================
! 				ARRAYS
! ===========================================
*/

 const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

 const dias = new Array('Lunes', 'Martes', 'Miercoles', 
 'Jueves', 'Viernes', 'Sabado', 'Domingo')

 const cambalache = ['Hola', true, 63, [1, 'dos', 3], { curso: 'Javascript', camada: 10635 }]

// uso su indice para llamar elementos del mismo
cambalache[3] // [1,2,3]

 /* 
 > length . 
 	puedo usar su largo
  */
 meses.length // devuelve 6


 /* 
 > toString . 
 El método toString convierte un Array a un String compuesto por cada uno de los elementos del Array separados por comas.
  */

 meses.toString()


 // join . Como el toString, pero selecciono un separador
let otroArray = ["hola", 22, "mundo"];
console.log(otroArray.join("*") ); // "hola*22*mundo"



 /* Chequear si una variable es o no un arreglo */
console.log(Array.isArray(numero))


/* ***** CARRITOS ********** */

const carrito = [];

function Producto(nombre, precio) {
	this.nombre = nombre;
	this.precio = precio;
}

const monitor = new Producto("Monitor", 12000);
const gabinete = new Producto("Gabinete", 7000);
const mother = new Producto("Motherboard", 27000);
const mouse = new Producto("Mouse", 27000);
const ram = new Producto("ram", 66000);



// carrito[0] = monitor;


/* Inserto un elemento al final del array */
carrito.push(ram);
carrito.push(mouse);
carrito.push(gabinete);
carrito.push(monitor);
carrito.push(mother);


/* pop. 

 Elimino un elemento al final del arreglo */
carrito.pop();

//puedo almacenarlos en una variable o array
let borrado = carrito.pop()

// pido al usuario que ingrese un producto

const nombreUser = prompt('ingresa un producto')
const edadUser = Number(prompt('ahora su precio'))

//luego lo pusheo

carrito.push(productoUser)



/* 
> unshift .
Inserto un elemento al inicio del arreglo */
carrito.unshift(productoUsuario);

/* 
> shift . 
 Elimino un elemento al inicio del arreglo. */
carrito.shift();

/* 
> shift . 
puedo almacenarlos en una variable o array */
let borrado = carrito.shift()



/* 
> splice . 
Eliminar un elemento de cualquier posicion y returnea lo que cortamos */
// (POS INICIAL, CANT DE ITEMS QUE ELIMINA)
carrito.splice(2, 2); // elimina desde el 2 inclusive, 2 items


/* 
> slice . 
Extraer una porcion de un arreglo. No incluye la pos final
 (no modifico el original) */
// (POS INICIAL, POS FINAL)
const resultado = carrito.slice(1, 4); // extrae de pos 1 a pos 3



/* 
> concat .
 Concatenar o unir arreglos */
console.log(dias.concat(meses));

/* 

> ...
Concatenar o unir arreglos con spread operator (ES6) */
const nuevoArreglo = [...dias, ...meses];
console.log(nuevoArreglo);


/*
> some .
Itera por cada elemento del arreglo y ve si cumple alguna condicion. Para ver si un elem esta en otro
-> Retorna TRUE o FALSE 
el PREDICADO es function(VALOR, INDICE, ARRAY)
*/

const resultado = carrito.some(function (elem) {
	return elem.nombre == "Escritorio";
});


// version reducida con arrow function
const resultado = carrito.some(elem => elem.nombre == "Escritorio");

/* 
> find .
Retorna  UN SOLO  elemento. el PRIMERO que cumpla la condicion. O sea , UN solo elemento*/
const resultadoFind = carrito.find(prop => prop.nombre === "Gabinete");


/* 
> filter .
Retorna un ARREGLO con TODOS los elementos que cumplen la condicion */
const resultadoFilter = carrito.filter(prop => prop.nombre === "Gabinete");

//. o

const resultadoFilter = carrito.filter(prop => {
	return  prop.nombre === "Gabinete"
});


//						Se pueden usar para cuando tenes un carrito, chequear primero
//						si ya tenemos ese item. Si es asi, sumamos 1 en vez de 
//						agregarlo de vuelta


/* ****** iteracion en arreglos ******** */

/* forEach.
es un for especial para arreglos. Realiza una funcion para cada elemento del array 

a la funcion puedo pasarle (value, index, array)
*/

carrito.forEach(function(value) {
	console.log(value) // devuelve los productos en el carrito
})



/* 
> map .
Es igual al forEach, pero devuelve un nuevo array con el resultado
*/

carrito.map(function(elem, index, array) {
	elem.color = `#${index}${index}${index}`
})

console.table(carrito)


/* 
> sort .
Ordena de menor a mayor por DEFAULT
.1 convierte los elementos a string
.2 compara sus UTF'16 values
*/

// para arrays simples funciona sin parametros
const mesesOrdenado = meses.sort() // 'Abril', 'Agosto'...

/* Podemos chequearlo con este for each, donde devuelve el codigo del primer caracter */
mesesOrdenado.forEach((element) => {
    console.log(element, element.charCodeAt(0));
});


// esto para arrays con objetos dentro. Usamos un comparator
const carritoOrdenado = carrito.sort(function (a, b) {
	return a.precio - b.precio;
});

//, Comparator
let numbers = [131,6,11,56,5]
let people = ["ale",  'jano', 'seba','Naty', 'azu',];
const spiceGirls = [
    {name: 'gingr', age: 37},
    {name: 'sporty', age: 30},
    {name: 'baby', age: 19},
    {name: 'posh', age: 20},
]

//, si quiero ordenar un array de objetos por un atributo

// uso un comparador adaptado a las propiedades de los objetos
const comparatorAges = (a,b)=> {
    return a.age - b.age;
}
const comparatorNameLengths = (a,b)=> {
    return a.name.length -b.name.length;
}

console.log(spiceGirls.sort(comparatorAges));
console.log(spiceGirls.sort(comparatorNameLengths));


people.forEach((element) => {
    console.log(element, element.charCodeAt(0));
});

const comparador = (a,b) => {
    //> esta expresion es igual a la de abajo
    return a-b;

    // if(a<b) return -1;
    // if(a > b) return 1;
    // else return 0;

    // si a es menor, dara negativo. SI es mayor, positivo. Si iguales, 0, 
}

console.log(comparador(3,5));
const sorted = numbers.sort(comparador);

// console.log(sorted);

console.log(sorted);

/* 
! ===========================================
! 				STRINGS
! ===========================================
*/

let stringPrueba = 'Hola, soy un string de prueba'

 /* 
	> METODOS y PROPIEDADES MAS COMUNES	

		* length . Conocer el largo de una cadena: 
		* indexOf() . Detectar la posición de un carácter en una cadena: 
		* toUpperCase() . Pasar a mayuscula: 
		* toLowerCase() . Pasar a minuscula: 
		* split() . Subdividir un string en varios a partir de un carácter: 
		* replace() . Reemplazar una parte por otra: 
		* trim() . Quitar espacios de un string:  
 */

/* 
> length .
longitud de string (incluye espacios)
*/
stringPrueba.length


/* 
> charAt .
Acceder a un determinado caracter del string */
stringPrueba[2]
stringPrueba.charAt(2)


/* 
> indexOf .
Posicion de la PRIMERA ocurrencia del caracter o cadena.
Puedo darle una posicion de inicio
Si no lo encuentra, devuelve -1
*/
resultado = stringPrueba.indexOf('x', 5) //busca la x desde pos 5


/* 
> toLowerCase . 
Pasar todo a minusculas */
stringPrueba.toLowerCase();

/* 
> toUpperCase .
 Pasar todo a mayusculas */
 stringPrueba.toUpperCase();


/* 
> split .
Dividir un string (con una cierta estructura) 
Devuelve un ARRAY
Elimina el separador que designamos
*/
const nuevoString = "HTML5, CSS3, Javascript, PHP, SQL";
const stringDividido = nuevoString.split(', ');



/* 
> slice . substring (son iguales)
 Cortar una parte de un string de A a B.
 No incluye B*/
const subString = stringPrueba.slice(1, 8); // 'ola, so'
const subString3 = stringPrueba.substring(1, 8);


/* 
> substr . 
Es como el splice de arrays. Devuelve desde A por B casilleros */
const subString2 = stringPrueba.substr(5, 8); // 'soy un'


/* 
> trim . 
Eliminar espacios */
const stringEspacios = "    String con espacios        "
const sinEspacios = stringEspacios.trim();
const sinEspaciosIniciales = stringEspacios.trimStart();
const sinEspaciosFinales = stringEspacios.trimEnd();


/* 
> includes . 
Verificar si un string contiene un caracter (o string) */
const correo = "correo@correo.com"
const existe = correo.includes(".com.ar"); // false
const existe = correo.includes("@"); // true

/* 
> contains . 
The contains() method returns a Boolean value indicating whether a
 node is a descendant of a specified node. */
 node.contains(node)

	//ejemplo del workshop
	function agregarProducto(e) {
		e.preventDefault();// quiero sacar el comportamiento de los <a> de que me lleve arriba de la pag. Otra opcion es usar un <button>

		// uso la clase 'agregar-carrito' para seleccionar el boton
	if(e.target.classList.contains('agregar-carrito')) {
		console.log(e.target);

	}


	}


/* 
> replace .
reemplaza un string por otro. A x B */
let miAuto = "Ford Mustang";
let resultado = miAuto.replace('Mustang','Mondeo'); 
//guarda en la variable "Ford Mondeo"



/* 
> match .
cuenta las ocurrencias de un elemento en otro */


/* 
> parseInt() 
parsea o convierte a numero un string */

parseInt('100') // 100

/* 
! ===========================================
! 				STORAGE
! ===========================================
*/

 /* El objeto Storage (API de almacenamiento web) nos permite almacenar  datos de manera local en el navegador, sin necesidad de realizar alguna conexión con el servidor.
Hay dos tipos de almacenamiento: localStorage y sessionStorage. Uno es indefinido en el navegador, y otro es temporal, hasta cerrar la pestaña.
 */

//?            localStorage o sessionStorage
/* setItem . 

? LOCAL STORAGE 
 La información almacenada en localStorage (variable global preexistente) se almacena en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser).

? SESSION STORAGE
La info en sessionStorage es mas fugaz. CUando cerramos el navegador, se borra.
Para almacenar información 
se utiliza 
> setItem:
 */

// clave = nombre del elemento
// valor = Contenido del elemento
let nombrePrueba = 'Alejandro'

// Opción 1 ->  localStorage.setItem(name, value)
localStorage.setItem('Nombre', nombrePrueba);

// Opción 2 ->localStorage.name = content
localStorage.Nombre = nombrePrueba


/* 
> ***** guardar JSON */
//! la posta para guardar en storage  es JSON
// le paso stringify al arreglo
// > JSON.stringify
// sirve para pasar a string un JSON. Lop puedo usar para imprimir un objeto con forma de objeto.
// JSON.stringify(imprimir, null, 3)
localStorage.setItem('Nombre', JSON.stringify(nombrePrueba) );


const carritoJson = JSON.stringify(carrito);

//"[{\"nombre\":\"Monitor\",\"precio\":15000,\"color\":\"Negro\"},{\"nombre\":\"Mouse\",\"precio\":12000,\"color\":\"Negro\"},{\"nombre\":\"Teclado\",\"precio\":11000,\"color\":\"Negro\"}]"




/* 
> getItem . 

Para leer informacion de los storage */
const nombreRecuperado = localStorage.getItem('nombreStorage')
const cursoRecuperado = localStorage['cursoStorage'];
const cursoRecuperado = localStorage.meses; //al leer un array, devuelve un string
const carritoRecuperado = JSON.parse(localStorage.carritoStorage);


/* removeItem .
remover items individualmente de los storage */
localStorage.removeItem('nombreStorage')

/* clear .
remover TODOS los itemps de un storage */
localStorage.clear()



/* 
! ===========================================
! 				JSON
! ===========================================
*/



 /* 
 J ava
 S cript
 O bject
 N otation 

 es un formato de texto plano para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web.
Aunque es muy parecido (casi similar) a la sintaxis de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir; parsear) y generar JSON.

Funciona para comunicar entre diferentes lenguajes de 
programacion

* Las datos en formato JSON se pueden almacenar en archivos externos .json. Exemplo: datos.json
* JSON es sólo un formato de datos — contiene sólo propiedades, no métodos.
* Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione. Se debe ser cuidadoso para validar cualquier dato que se quiera utilizar. 


Los atributos son siempre STRING con COMILLA DOBLE

{
	"nombre": 'algo',
	"precio" : 15000,
	"color" : 'negro'
}

LINK para comprobar si un JSON esta bien escrito
% https://jsonformatter.curiousconcept.com/

 */

 // puedo hacer ARRAYS y dentro OBJETOS
 let unJSON = [
	 {
    "nombre":"Juan",
    "edad":30,
    "auto":null
   },
   {
    "nombre":"Pedro",
    "edad":30,
    "auto":'tiene'
   },
   {
    "nombre":"Carlitos",
    "edad":30,
    "auto":"Camioneta"
   }
]


/*
> JSON.stringify . 
convierte un formato JS a JSon */
const carritoJson = JSON.stringify(carrito);


/* 
> JSON.parse . 
proceso inverso sl stringify. Pasa de JSon a formato JS */
const carritoRecuperado = JSON.parse(localStorage.carritoStorage);


/* 
! ===========================================
! 				DOM
! ===========================================


El DOM, o Modelo de Objetos del documento es lo que permite interactuar 
a JS con los diferentes elementos HTML de una web, como también poder operar 
sobre ellos y modificarlos.
Es decir que, por ejemplo, desde JS podemos modificar el contenido de una
 etiqueta <h1> en un archivo HTML.
 */

 // COMO FUNCIONA???

 /* 
 El DOM funciona mediante una transformación del código HTML que contiene
 la estructura de una web, a una representación estructural del documento,
 en forma de árbol, mediante la cual podemos acceder usando JS, y operar
 sobre los elementos.
Esta transformación es realizada automáticamente por los navegadores, 
por lo que no es necesario realizar nada desde el código, simplemente 
basta con operar mediante JS sobre el DOM.
 */

 // ESTRUCTURA

 /* element . nodos
 
Cada etiqueta HTML se transforma en un NODO de tipo "Elemento". La conversión de etiquetas en nodos se realiza de forma      . 
De esta forma, del nodo raíz solamente pueden derivar los nodos HEAD y BODY. 
A partir de esta derivación inicial, cada etiqueta HTML se transforma en un nodo que deriva del correspondiente a su "etiqueta padre".
La transformación de las etiquetas HTML habituales genera dos nodos: el primero es el nodo de tipo "Elemento" (correspondiente a la propia etiqueta XHTML) y el segundo es un nodo de tipo "Texto" que contiene el texto encerrado por esa etiqueta XHTML.

Podemos modificar:
* Element
* Attributes


! TIPOS DE NODOS

* Document, 
nodo raíz del que derivan todos los demás nodos del árbol.

* Element, 
representa cada una de las etiquetas XHTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.

* Attr,
 se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.

* Text,
 nodo que contiene el texto encerrado por una etiqueta HTML.

* Comment,
 representa los comentarios incluidos en la página HTML.

*/

/* DOCUMENT ******************** */

/* para acceder a todos los elementos de HTML */
document.all; //ya no se usa mas


/* seleccionar head*/
document.head;

/* NODOS : 
		SELECCIONAR o ACCEDER ******** */

// * .getElementById() 

//por ID 
const titulo = document.getElementById('titulo')
console.log(titulo)
 // <h1 class="titulo-primario mx-2" id="titulo">Curso Javascript</h1>
 console.log(titulo.className) //titulo-primario mx-2



/*  getElementsByClassName() .
				devuelve un HTMLcollection.
*/

// por CLASE . trae TODOS los elementos con esa clase
const parrafo = document.getElementsByClassName('parrafo')
// me trae un HTMLcollection, que Es como una array con todos los elementos que tienen esa clase

// >  Array.from 

/* Pasamos de HTMLCollection a Array para movernos mejor */
const arreglo = Array.from(parrafo)

console.log(parrafo) // d 

console.log(parrafo[0]) // trae el primer elemento con esa clase





/* getElementsByTagName() .

*/

// selecciono por etiqueta
const div = document.getElementsByTagName('div');


/* ****** QUERYSELECTOR******** */
// estas dos son las mas populares
// podemos usar lenguaje css para SELECCIONAR ELEMENTOS
// uso . para clases, # para ID, etc...

//* querySelector()
let resultado = document.querySelector('.titulo-primario');

/* querySelectorAll() .
		 devuelve un NodeList. Puedo pasarlo a array
 		* const arrayFromQuery = Array.from(parrafo)
		   o
		* const arrayFromQuery = [...document.querySelectorAll('#ALGO)]
		 
		 */ 
let resultado2 = document.querySelectorAll('.parrafo.texto'); // selecciona todos los elementos con ambas clases, parrafo y texto


/* MOVERSE ENTRE PADRES E HIJOS (herencia) traversing */


/* parentElement .
 selecciona el elemento PADRE
*/

resultado.parentElement // 
// pueden acumularse para subir mas en jeraquia

resultado.parentElement.parentElement;


/* childNodes .
 selecciona LOS elementos HIJOS
*/


resultado.childNodes
//tiene la particularidad de que devuelve una lista con los HIJOS
// pero marca como '#text' los espacios en blanco entre los elementos


resultado.children
// HTMLCollection mejor que el childNodes. NO pueden acumularse


/* Etiqueta HTML del elemento */
console.log(resultado.nodeName);



/*
! ATRIBUTOS */

/* 
TODO titulo.
TODO	.className 
 devuelve un string con las clases

TODO	.classList 
  devuelve un objeto con las clases

TODO	.textContent  
  el texto dentro. parecida a innerText (innerText, si el elemento esta hidden, no lo muestra)

TODO	.innerHTML 
  odo el contenido HTML dentro.
	//CUIDADO!!! borra lo anterior, y pone el contenido que le de

	divContenido.innerHTML = `
		<h1> borre todo el resto y solo quedo este H1 </h1>
	`
 */

/* Obtener/preguntar/eliminar atributos */
const atributo = parrafo.getAttribute('class');
const hasAtributo = parrafo2.hasAttribute('id');
parrafo.removeAttribute('id');


/* acceder a las PROPIEDADES ( con un . )*/
document.querySelector(#user).value // devuelve el contenido de un elemento
//como por ejemplo lo escrito en un input

document.querySelector(#link).href // devuelve el href




/* cambiar los ESTILOS */

titulo.style.color = 'red';

// los estilos con mas de una palabra van con camelCase!!!!
titulo.style.backgroundColor = 'grey'




/* crear ELEMENTOS */

const parrafo = document.createElement('p')

/* crear nodo de texto */

const contenido = document.createTextNode('lorem...');


/* Agregamos CONTENIDO */

parrafo.textContent = `Lorem ipsum ${2 + 2}`;


/*
TODO .add()
agregar CLASES */

parrafo.classList.add('clase1', 'clase2')

/*
TODO .remove()
 borrar clases */

parrafo.classList.remove('py-4');


/* o agregar y borrar una clase cuada vez que se ejecuta */
parrafo.classList.toggle('py-4')



/*
TODO appendChild . 
insertar ELEMENTOS en el HTML
Los inserta en ULTIMO lugar
*/

// 1) primero le tengo que dar una referencia
const divContenido = document.querySelector('.contenido')

// 2) le agrego el contenido
divContenido.appendChild(parrafo)


// 2.b) puedo REEMPLAZAR un elemento
let parrafoNew = document.createElement('p')
parrafoNew.textContent = 'soy un contenido nuevo'

divContenido.replaceChild(parrafoNew, parrafoOld)


// insertBefore . 
// para insertarlo ANTES uso 
// PADRE.insertBefore(QUE INSERTO, HIJO referencia)
divContenido.insertBefore(parrafo2, document.querySelector('#img'))

/* para setear un ATRIBUTO */

parrafo.setAttribute('id', 'el-parrafo')


/* para BORRAR un elemento */
let user = document.querySelector('#user')
user.remove()



/* 
TODO window.scrollY 
para devolver el scroll en pixeles desde el top de la pantalla 
. Tambien existe el scrollX

La propiedad pageYOffset es un alias para la propiedad scrollY:

window.pageYOffset == window.scrollY; // Siempre verdadero
*/

// Asegurate de bajar a la segunda página
if (window.scrollY) {
	window.scroll(0, 0);  // Restablece la posición de desplazamiento en la parte superior izquierda del documento
  }
  
  window.scrollByPages(1);


/*
! *** EVENTOS **** */

//https://developer.mozilla.org/en-US/docs/Web/Events


const boton = document.querySelector('#boton');

/* Sintaxis onEvento */
// puedo agregarlos como atributo con un 'on' delante
//ej: onclick, onscroll....
// las onALGO sobreescriben a otra anterior.
// si ejecuto un onclick, y luego otro, solo considera el segundo
/* elemento.evento = funcion a ejecutar cuando ocurre el evento */
boton.onclick = mostrarAlert;
boton.onclick = function () {
	alert("Segunda funcion manejadora del click");
}


/* creando LISTENERS */
boton.addEventListener('click', mostrarAlert())

/* eliminar LISTENER */
boton.removeEventListener('click', mostrarAlert())




/* ***** obteniendo informacion del usuario */

/* window.event .
  puedo poner 'e' o 'event'. Es para sacar informacion 
  de las acciones del usuario.
  En el ejemplo de abajo devuelve el objeto click

  Lo que mas nos importa es el elemento:

	target

  la tactica seria hacer un listener a un contenedor
  y usar el target para seleccionar el elemento
  sobre el cual se efectua la accion (un click por ej)

	luego uso las propiedades dentro de target para ver, 
	por ejemplo, la clase

	e.target.className

	o el contenido de texto

	e.target.textContent

 */


/*
* ********** algunos EVENTOS */


//TODO DOMContentLoaded
// esta asociado al DOCUMENT
// se dispara cuando se carga completamente el HTML
document.addEventListener('DOMContentLoaded', function(){
	console.log('se cargo la pagina')
})


//TODO load .
// esta asociado al WINDOW
// espera que se cargue COMPLETA la pagina
document.addEventListener('load', function(){
	console.log('se cargo la pagina ENTERA')
})


/* 
TODO click . */ 

boton.addEventListener('click', function(event) {
	console.log(event);
})
// para obtener el lugar donde hacemos click en este caso,
// seria algo asi
const divContenido = document.querySelector('#contenido');

divContenido.addEventListener('click', function (e) {
	console.log(e.target);
}); // <div id="mouseover" class="alto">

// devuelve el elemento html donde clickeo



/*
TODO input .
evento para traer datos de los input */

document.addEventListener('input', e => {
	console.log(e.target.value);
})
// aca selecciono del documento, el input sobre el que este parado
// y logueo el 'value'


/* 
TODO keydown .
es cuando aprieto una tecla
TODO keyup 
es cuando levanto

los atributos interesantes son:

key --> devuelve la tecla que aprieto
code --> devuelve el CODIGO de la tecla apretada
*/


/* 
TODO documentElement */
// sirve para usar elementos del documento.
//por ejemplo, para preguntar cuanto scroll tenemos en el documento
// scrollTop nos devuelve la distancia al principio del HTML

window.onscroll = function() {
    const scroll = document.documentElement.scrollTop;

    console.log(scroll);
}




/* 
! ===========================================
! 				JQuery
! ===========================================
*/

/* 
* En JS, una librería (o biblioteca) es un archivo de JavaScript que contiene muchas funciones, y esas funciones realizan alguna tarea útil para tu app o web.
* Para conocer cómo usarlo, debemos acceder a su documentación. La mayoría de las bibliotecas la tienen, donde explican sus funciones disponibles y un ejemplo de uso.

? DOCUMENTACION
? https://api.jquery.com/

Ahora estan por la version 3.5


Existe la version:

* minificada 
es una sola linea de codigo. Mas liviana. Es la que se suele usar
se especifica con un .min antes del js
Ej)
jquery.min.js

* slim
no incluye ajax ni efectos
bootstrap por ejemplo usaba la version slim
 

* uncompressed
la mas pesada, pero completa



*/
/* 
! SELECTOR

* $ : Reemplaza al document.querySelector()
? Devuelve un OBJETO parecido a un array.
? para seleccionar un unico elemento y que sea igual al queryselector, debo indicarle el indice
? para poder utilizar un metodo, como .hide(), tenemos que usarlo como objeto, no pasarlo a array
* $('#elemento').hide()


ej:
 */
$('#lista-productos')[0] == document.querySelector('#lista=productos')


//TODO SELECTORES AVANZADOS

$( "p:last" ); //Selecciona el ultimo <p> de la pagina
$( "li:first-child" ); //Selecciona todos los <li> que son primeros hijos
$( "li:last-child" ); //Selecciona todos los <li> que son ultimos hijos
$( "li:only-child" ); //Selecciona todos los <li> que sean hijos unicos
$( "li:nth-child(3)" ); //Selecciona todos los <li> que sean el tercer elemento de su lista
$( "tr:nth-child(odd)" ); //Selecciona todos los <tr> que sean impares
$( "tr:nth-child(even)" ); //Selecciona todos los <tr> que sean pares
$( "div:nth-child(3n)" ); //Selecciona cada tercer elemento <div>


//TODO selectores para FORMS

$( ":text" );
$( ":checkbox" );
$( ":radio" );
$( ":image" );
$( ":submit" ); // para formularios, $('#formulario').on('submit', filtrarProd)
$( ":reset" );
$( ":password" );
$( ":file" );
$( ":input" ); //Selecciona los elementos input, textarea,select y button
$( ":button" ); //Selecciona los elementos button e input con atributo "type"="button"
$( ":enabled" ); //Selecciona los elementos del formulario activados
$( ":disabled" ); //Selecciona los elementos del formulario desactivados
$( ":checked" ); //Selecciona los radio buttons y checkboxes que están pulsados
$( ":selected" ); //Elementos de una lista de opciones que este seleccionados



//! METODOS //////////////
//! los metodos devuelven OBJETOS de jQuery


//TODO on. (eventListener)
// para generar un listener, uso esta notacion:

$('#formulario').on('submit', filtrarProd)
$('#cuadrado').on('click', filtrarProd)


//puedo pasarle mas de un evento

//? on.(EVENT: FUNCTION, EVENT2, FUNCTION2)
$('#img-carrito').on({
	'mouseover': function () {
		$('#carrito').slideDown(500)
	} ,
	'mouseleave': function () {
		$('#carrito').slideUp(500)
	}
})



//TODO document.ready()
// inicialmente se utilizaba esta forma. El codigo dentro  del ready se ejecutaba una vez que el DOM estuviera listo para que se ejecute JS 

//? el 'ready' no espera a las imagenes. El 'load' si 

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// jQuery recomienda usar solamente el handler entre parentesis con el $
// Shorthand for $( document ).ready() seria solamente $('')
$(function() {
    console.log( "ready!" );
});

//? si comparamos el 'load', 'ready' y 'DOMContentLoaded' se ejecutan en este orden. 

//TODO DOMContentLoaded()
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLOADED');
})

//TODO  ready()
$(function() {
	console.log('ready JQuery');
})

//load .. porque carga muchas mas cosas
window.addEventListener('load', () => {
	console.log('load');
})


//TODO .val()
//es equivalente al .value de JS
$('#buscador').val() // devuelve lo que escriba en el buscador


//TODO animate()
// sirve para hacer animaciones

$('.ir-arriba').click(function(){
	$('html, body').animate({ // ponemos que anime, y adentro lo que quermos que haga
		scrollTop: '0px' // que el scroll top sea 0px, o sea que este arriba
	}, 1000); // este numero en violeta, es la velocidad en ms

})


//TODO .addClass, .removeClass, .toggleClass
// puedo poner mas de una, separadas por un espacio en blanco
// la diferencia con className es que esta borraba todas las anteriores
// mientras que addClass las agrega nomas
$(".div-click").addClass('clase1 clase2')


//TODO .remove
$(".div-click").remove(); //borra el/los elemento/s del DOM

//TODO .append
$(".div-click").append("<strong>Hello</strong>"); //Agrega el código HTML como hijo del elemento. Puede ser texto HTML, o tambien una variable conteniendo un elemento jQuery.

//TODO .insertBefore
// como el append, pero inserta al principio del bloque donde va
// se declara antes del metodo
$('h2').insertBefore($('.container'))


//TODO .parent
$(".div-click").parent(); //Devuelve la referencia al elemento padre del selector

//TODO .children
$(".div-click").children(); //Devuelve un array con todos los elementos directamente hijos del elemento selector.


//TODO media query con jQuery!
//? https://dzone.com/articles/checking-media-queries-jquery




//! EFECTOS y ANIMACIONESS //////////////
//! 

//TODO show(), hide(), toggle()
//es el equivalente al display block / none. Los elementos se achican o agrandan
// las transiciones se ponen dentro del parentesis
// show( TIME, FUNCION) . Puedo agregarle una funcion a ejecutarse cuando termina la animacion
// esta funcion se llama CALLBACK

$("button").click(function(){ 
	$("p.texto").toggle(); 
  });


  // puede tener una duracion 
  $("button").click(function(){ 
	$("p.texto").toggle('slow'); // slow, fast, o numeros en milisegundos
  });
  


//TODO fadein(), fadeout(), fadeToggle()
//anima la opacidad
//acepta los mismos parametros que show, hide...

  $("button").click(function(){ 
	$("p.texto").fadeIn(600); 
  });


//TODO fadeTo('slow', 0.3)
// lleva el elemento seleccionado a un nivel de opacidad



//TODO slideDown(TIME, CALLBACK) , slideUp(), slideToggle()
// anima la altura
$("button").click(function(){ 
	$("p.texto").slideDown(1000, function() { alert('Terminó'); }); 
  });
  

//TODO css.
/* JQuery provee una función para aplicar cambios directos sobre el css del elemento. Llamando a la función css()le podemos indicar qué propiedad modificar de css, y qué valor asignar.
 La sintaxis funciona así:  selector.css("propiedad-css","valor");
 Para mas de uno: selector.css({"propiedad-css","valor",
								"propiedad2-css","valor" })
 */

 // un a propiedad sola
$("p").css("background-color", "yellow");
$(".titulo").css("color", "black");
$("h1").css("font-size", "40px");
$("p").css("width", "50%");

// mas de una
$('#focus').css({'background-color': 'lightgreen',
				  'color': 'red'})


/* 
! SCROLLEAR A UN ELEMENTO
 */

/* 
! .animate() 

? el primer parametro y el unico obligatorio es un objeto con las propiedades CSS y a que valor las llevo
*/

$('a').click( function(e) { // asociamos la animacion al click en un elemento <a>
    e.preventDefault(); //Sirve para frenar la propagación del click en un (recargar pagina)
   
    $('html, body').animate({
        scrollTop: $("head").offset().top  
    }, 1500);
} );

// ?scrollTop es la PROPIEDAD, y $("#seccionContacto").offset().top el VALOR

//TODO offset()
//? el metodo offset me da dos valores: top y left. Devuelve en pixeles la distancia a la parte superior e izquierda de la pantalla

// Llamamos al método animate, sobre el body, y le pasamos como parámetro scrollTop, la posición del scroll donde está el elemento #seccionContacto. Asi jQuery sabe hasta donde scrollear la pantalla. El segundo parámetro de animate, es el tiempo de duración: en este caso 2000 ms (2 segundos)


//> scrollTop.
$(window).scrollTop() // ver si la distancia desde el inicio de la pagina al scroll actual



/* 
! ===========================================
! 				AJAX
! ===========================================
*/


/* AJAX significa JavaScript asincrónico y XML (Asynchronous JavaScript and XML). Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asincrónica, procesando cualquier solicitud al servidor en segundo plano. 
Como resultado, cualquier app o web que use AJAX puede enviar y recibir datos del servidor sin la necesidad de volver a cargar toda la página.


? usos de AJAX con JS
. Agregar o modificar productos a un carrito de compras
. Enviar un formulario sin refrescar la página
. Agregar o quitar productos de una wishlist
. Enviar un comentario en un blog.
. Notificaciones en Facebook, Twitter.
. Ventanas de chats


? la peticion AJAX no detiene la ejecucion de codigo siguiente. No se pone e cola de espera 


Antes de ver cómo utilizar AJAX, debemos entender cómo se envían los datos al servidor mediante AJAX. Se utilizan dos protocolos de comunicación HTTP: GET y POST.

En lineas generales el 
* peticion GET
se usa para obtener informacion del servidor
Las busquedas en Google son una peticion GET (se ven en la URL)
En las URL los parametros vienen luego de un ?
Los espacios se escriben asi: %20

* URL?key=value&key=value&key=value&key=value

? https://randomuser.me/api/?results=10&gender=male te da 10 resultados de hombre

* peticion POST
se usa para enviarla

? https://developer.mozilla.org/es/docs/Web/HTTP/Overview


* Pasamos dos parametros: URL y un array de parametros
(en GET peude hacerse sin el array)
Esos parámetros los usará el procesador en el servidor para realizar operaciones, y luego retornará cierta información a una función. 

* Casi siempre el servidor responde en JSON
javascript reconoce ese JSOn y lo parsea solo

? https://premium.wpmudev.org/blog/wp-content/uploads/2015/03/AJAX-Basics-101-for-WPMU_DEV.png

*/


/* 
! AJAX se usa con JQUERY

El llamado general es el metodo


! $.ajax({
!		url,
!	 	success: function(data, status, xhr){},
!		error: function(xhr, status, errorThrown){} 
!})

* data: parsea la data del archivo. En gral usamos este parametro
* status: devuelve si es success o error
* xhr: devuelve un objeto con mucha informacion. son siglas de XML HTTP Request

status codes:
? https://www.steveschoger.com/status-code-poster/img/status-code.png
200 = conectado

? https://api.jquery.com/jquery.ajax/

 */

$.ajax({
	url: 'js/products.json', //TODO URL. puede ser local o en un servidor o API
	success: function() { //TODO success. Se ejecuta si el servidor responde
		console.log('peticion exitosa');
	},
	error: function() { //TODO success. Se ejecuta si el servidor NO responde
		console.log('error en la peticion');
	}
})



/* 
! METODOS asociados */

//TODO $.get
/* 
 Es un shorthand de  
*/
$.ajax({
	url: url,
	data: data,
	success: success,
	dataType: dataType
  });


//* un ejemplo de uso:

  $("button").click(function(){ // Asociamos la llamada AJAX a un click en un boton
	$.get("demo_test.php", //nombre del archivo en el servidor que procesa la llamada
  
  function(data, status){ 
	  //función que se ejecuta cuando la llamada regresa del servidor
	  alert("Data: " + data + "\n Estado: " + status);
	 // se reciben dos parámetros, el primero es la información devuelta del servidor (podría ser un JSON), y el segundo es el estado de la operación: success o error
   });
});
  


//TODO $.post
/* 

El method por defecto es GET. Para hacerlo post hay que explicarlo
Pages fetched with POST are never cached
 Es un shorthand de
*/
$.ajax({
	method: "POST",
	url: url,
	data: data,
	success: success,
	dataType: dataType
  });


//* un ejemplo de uso:

  $("button").click(function(){ // Asociamos la llamada AJAX a un click en un boton
	$.post( "prueba_post.php", //nombre del archivo en el servidor que procesa la llamada
	{ //array con parámetros que se envían en la llamada
	  nombre: "Juan Perez", 
	  ciudad: "Buenos Aires"
	},
	function(data, status){
  //función que se ejecuta cuando la llamada regresa del servidor
  alert("Resultado: " + data + "\n Estado: " + status);
  // se reciben dos parámetros, el primero es la información devuelta del servidor (podría ser un JSON), y el segundo es el estado de la operación: success o error
	});
  });



/* 
! ===========================================
! 				API
! ===========================================
*/

/* 
API o Application Programming Interfaces, es un conjunto de reglas y especificaciones que las aplicaciones pueden seguir para comunicarse entre ellas. El uso de una API es el mecanismo más útil para conectar dos softwares entre sí. De esta manera, podemos garantizar el intercambio de mensajes o datos en formato estándar.

Por ejemplo: Una web de e-commerce que permite pagar con MercadoPago, está integrando la API de MP, mediante la cual una web X puede cobrar una compra. Esa web usará las funciones y reglas de la API de MP para integrarla a sus necesidades del e-commerce.

*/

/* 
*Una de las formas de comunicarse con una API (siempre y cuando esta lo contemple) es utilizar AJAX en jQuery. En la práctica sería muy similar a realizar una llamada AJAX común, sólo que tendremos que cumplir los requisitos que la API defina para cada llamada. Por ejemplo: si fuera una API de una plataforma de pagos, podremos usar llamadas para enviar pagos, para consultar cuotas, etc.
 */


//* Ejemplo para traer datos de la API de starwars
$.ajax({
	url: 'https://swapi.dev/api/people/',
	dataType: 'json',
	success: function (data) {
		console.log(data.results[2]);
	}
});


//* Para traer de mercado libre	
document.getElementById("buscador").addEventListener('input', e =>{
	        const busqueda = e.target.value.replace(" ", "%20");
	        $.get({
	            url:`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`,
	            data: "json",
	            dataType: "json",
	            success: mostrarResultado
	        });
	    })


//* Ejemplo para usar leaflet (mapa)

//?HTML
//?en el head
{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/> */}

//? en el fin del body
{/* <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script> */}

// en el HTML
<div id="map"></div>

/* Make sure the map container has a defined height, for example by setting it in CSS:
#map { height: 180px; } */

// JS
let map = L.map('map').setView([-34.61232276317193, -58.493619886637504], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.61232276317193, -58.493619886637504]).addTo(map)
	.bindPopup('Casita')
	.openPopup();



/* 
! ===========================================
! 				SPA
! ===========================================
*/

/* 

* Que es?
GMAIL es un ejemplo. Cuando refresheas o entras a un mail, se actualiza la misma pagina, no cambia de HTML.
?Cambia el URL

Por SPA se conocen las aplicaciones de una sola página o Single Page Applications.
La aplicación o web se carga una única vez en el navegador, y luego todo intercambio de contenidos se realiza sin recargar la pantalla.
Una arquitectura SPA permite realizar cualquier sitio tradicional de escritorio vía web, ya que el tiempo de respuesta es mucho más rápido que el de una aplicación web tradicional.
La mayor parte de la funcionalidad queda en el cliente (navegador). 
El código en servidor se usa básicamente para proveer de una API REST que le brinde los datos a nuestro código cliente usando Ajax

* ROUTER
> Usa # para especificar rutas
El router o ruteador dentro de una aplicación SPA, cumple la función de controlar e interpretar cada solicitud que el usuario realice en la página, para realizar un cambio en la URL 
? mediante los Hash (Ej: dominio.com/#seccion).
<nav>
?		<a href="/">Home</a>
?		<a href="#/nosotros">Nosotros</a>
		<a href="#/novedades">Novedades</a>
		<a href="#/tienda">Tienda</a>
		<a href="#/contacto">Contacto</a>
</nav>

* Ejemplo de como mostrar los contenidos desde JS
const homeComponent = {
	render: () => {
		return `
			<h1>Pagina Principal</h1>
			<p>Bienvenidos al ejemplo del SPA</p>
		`
	}
}

Ese cambio de URL implica realizar al servidor la solicitud de los datos necesarios para luego renderizar o dibujar mediante JS la nueva página que se mostrará.Durante este proceso, el usuario no verá recargar la pestaña del navegador, sino que todo el proceso ocurre de manera asincrónica. Sólo notará que el contenido de la página web se modifica.


* MVC
> Es un PATRON DE DISEÑO
? Ej: Django de Python, Laravel de PHP, Angular
/ En la metodología SPA debemos utilizar el patrón 
%   MVC (
%	Modelo .
	 Se encarga del manejo de los datos
%	Vista .
	 Muestra al usuario lo que ve. No usa logica. Solo pone bonito lo que viene del controlador
%	Controlador .
	 Es un poco el cerebro de la pagina. Decide si pide o no informacion). 
	Este separa la lógica de la aplicación de la lógica de la vista en una aplicación.
 */



/* 
! ===========================================
! 				PROMESAS
! ===========================================
*/

/* 
* Una promesa (ES6) es un OBJETO que puede estar disponible ahora, en el futuro, o nunca.
* Representa el ciclo de vida de una tarea / operacion / funcion
* Es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
* Es más común consumir promises ya creadas que crear una propia.


?Una promesa puede tener 3 estados:
	. Pendiente (pending)
	y luego
	. Resuelta (fulfilled)
	. Rechazada (rejected)

? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

? https://lenguajejs.com/javascript/asincronia/promesas/

* Se suelen utilizar para resolver el problema de asincronía, es decir, para tratar operaciones asíncronas.

*  Definimos una promesa
Recibe como parametro una FUNCION, con dos parametros a su vez. 
> resolve y reject

*/

const validarUsuario = new Promise((resolve, reject) => {
	// la idea es que ingrese un booleano. Aca lo hardcodeo
	const auth = true;

	setTimeout(() => {  // el setTimeout lo uso para emular el tiempo que se tarda en buscar la info en el servidor
		if (auth) {
			//cuando se resuelva la promesa, uso el .then para llamar esta accion
			resolve({ status: "Ok", texto: "Promesa Resuelta" });
			// resolve("Aprobada carajo")
		} else {
			reject('Rechazada');
		}
	}, 3000);
});

// ejecuto la funcion. Enseguida me devuelve STATUS: PENDING, por el timeout que le puse.
// Luego, lo pasa a fullfilled

/* 
/ En realidad, se hace de esta manera. 
> THEN, trae lo que pasa en el RESOLVE
> CATCH, lo que devuelva el REJECT
*/

validarUsuario
// la funcion que escriba en el .then() va a sobreescribir a RESOLVE
	.then(function(resultado) { 
		console.log(resultado.texto);
	})
// asimismo, la del .catch() sobreescribe a la de REJECT
	.catch( error => console.log(error))

// tambien puede hacerse asi. Los log toman el primer argumento que reciben y lo pasan
validarUsuario
    .then(console.table)
    .catch(console.warn);


/* 

> .then() y .catch()

.then(FUNCION resolve) // ejecuta resolve cuando la promesa se cumple. REEMPLAZA
.catch(FUNCION reject)  // Ejecuta la funcion reject cuando la promesa se rechaza
.then(FUNCION resolve, FUNCION reject) // Metodo equivalente a las dos anteriores juntas
.finally(FUNCION end) // Ejecuta la funcion callback end, tanto si se cumple como si se rechaza
*/


/* 
! =========================================================================
! 								Async/Await
! =========================================================================

/ Async/await se introdujo en ES2017, con el objetivo de gestionar las promesas de una forma más “sencilla”. 

, Async
	/ Le dice al codigo que la funcion que viene es ascincronica

, Await
	/ El await le dice al codigo asociado
	! ESPERA

/  async function NOMBRE_FUNCION() {
/         const VAR = await PROMESA	
/  }

Se coloca delante de la declaración de la función. 
La convierte en una función que sabe cómo “esperar”.
la posibilidad de que await sea usada para invocar código asíncrono.

Si no la pusiera enfrente de cargaInicial, no sabriq que tiene que esperar, y devolveria una Promise, con estado 'pending'.
Al poner async, sigue de largo y la deja con sus tiempos
*/



function descargarProductos() {
	return new Promise((res, rej) => {

		setTimeout(() => {
			res("Los productos se descargaron correctamente");
		}, 2000);
	})
}

//? Es recomendable usarlo en un bloque try / catch
// intenta ejecutar el codigo en try. Si no puede, ejecuta lo que esta en catch y continua
async function cargaInicial() {
	try {
		const promesaResuelta = await descargarProductos();
		console.log(promesaResuelta)
	} catch (error) {
		console.log(error)
	}
}


// . Tambien puedo hacer una funcion
const cargaAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const h1 = traerProducto(id);
			if (h1) {
				resolve(h1);
			} else {
				reject("errorcito");
			}
		}, 1000);
	});
};

// Aca, puedo usar un log directamente para agarrar el resolve y el reject
cargaAsync(5).then(console.log).catch(console.warn);


/* 
> Promise.all([ARRAY])
> Manejando más de una consulta Async/await
le paso un array a Promise.all()
 */

async function app() {
	const resultado = await Promise.all([miPromesa1(), miPromesa2()])
}

/* 
> con FETCH */
async function consultarDatos() {
	const resultado = await fetch('js/datos.json'); // devuelve una promesa
	const datos = await resultado.json(); // uso await devuelta, porque resultado.json es otra promesa
	console.log(datos)
}

/* 
! ===========================================
! 				FETCH API
! ===========================================
Es una nueva API de Javascript para realizar peticiones HTTP asíncronas. 
Viene a reemplazar a AJAX. 
Se puede utilizar también con async/await.
Como esta integrado en el navegador, es super facil de usar.


> Devuelve un objeto RESPONSE. Es una PROMESA.
 Tambien puede devolver un REQUEST.
> Para recibir texto, hacemos resultado.text( )
Usamos then y catch

se suele utilizar para consultar una API
se usa 
? fetch(URL DE LA API)
*/

// ? para TEXTO
fetch('js/texto.txt')
	// aca busco el texto de la promesa que me devuelve
	.then(resultado => resultado.text()) 
	// aca logueo nomas el then anterior
	.then(result => console.log(result)) 
	.catch(error => {
		console.log(error)
	})




//? para JSON
fetch('js/datos.json')
	.then(res => res.json())
	.then(otroRes => console.log(otroRes) )
	.catch(error => {
		console.log(error)
})


//? para traer y mandar un archivo de imagen el DOM

const API_KEY = "DH96tj9GGDX97eKtC3GexxraklJk4yDi";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
    .then(res => res.json())
    .then(({data})=> {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })