/* 
, ===========================================
,        		TIPS React
, ===========================================

> Las funciones y los nombres de los componentes, empiezan con MAYUSCULA
>    (por ejemplo, React)

> No puede haber mas de 1 export default en un archivo

> Al importar un componente, si el archivo se llama index.js, no ahce falta incluirlo.
> EJ: import Welcome from './components/Welcome';

> No puedo poner como contenido de un componente multiples cajas.
    > siempre debe ser UNA CAJA CONTENEDORA, con elementos dentro
    > Una alternativa es
    % REACT FRAGMENT
    %      <> </>
    > Esto a la hora de TRANSPILAR el codigo, no genera un div por ej.

> Las imagenes se crean siempre en
    % public/img
    / porque los assets que busque van a partir siempre de public. Entonces cuando busque una imagen desde cualquier componente pongo:
    ? "/img/NOMBRE_IMAGEN"

> un COMPONENTE es una pequeña pieza de codigo encapsulada reutilizable que puede o no tener estado


> para simplificar una funcion flecha con unsoloa rgumento, que tiene una sola instruccion que lo toma:
 */
onclick = { (e) => { handleAdd(e) } }

//. es igual a escribir

onclick = { { handleAdd } }

/* 

> Si react no se actualiza solo luego de cualquier cambio, creo un .env y le agrego esto:


,      BABEL
, ===========================================

    / Transpilar el codigo JS a codigo que entienda el navegador

, 	CREAR aplicacion REACT
, ===========================================
?   https://create-react-app.dev/

    .1 Instalar NodeJS
        // una vez en el directorio donde quiero crear mi carpeta con mi proyecto:
    .2 
        > npm install -g create-react-app
    .3 
        > npx create-react-app prueba-react
    .4 
        > cd prueba-react
        //  ---> ahi estoy entrando a la carpeta
    .5 
        > npm start
         levanta el webpack del server


, Node.js
Ahora crearon un entorno llamado Deno. Hoy no se usa.
    / https://deno.land
    . Seria como el JVM de Java
    . Es un entorno de ejecucion que permite al codigo en JS ser ejecutado en la computadora.


, 	CREAR COMPONENTE funcional
, ===========================================

    .6 Crear una carpeta dentro de src llamada "components"
    .7 Dentro, van carpetas con los componentes.
    .8 En la carpeta de un componente, creo un 
        / index.js
    .9 Dentro, ya no se usa mas el Import react from 'React';
        . Ahora en programacion funcional, directamente arrancamos con funciones.
        
        ----------------------------------------------
        I) primero creo la funcion aka componente
%        function Welcome(){    
%            return <p>Hola CourseIt + ReactBA</p>
%        }

        II) Luego tengo que exportar el componente
%        export default Welcome;
        ----------------------------------------------
    .10. Luego, debo importar  en las primeras lineas los componentes desde App.js. ASi:
%        import Welcome from './components/Welcome';

    .11 Luego desde aca, llamo al componente asi:
?        function App() {
?            return (
?                <div className="App">
?                   <header className= "App-header">
!                       <Welcome />
?                   </header>     
?                </div>
?       );
}

https://es.reactjs.org/docs/events.html

, 	PROPS
, ===========================================

/ Se pasan como si fueran atributos de HTML
/ pero son
            > son OBJETOS
/ El padre manda las props, para que le hijo lea las props
/ Al ser funciones los componentes, pongo las 
    > props
/  entre los parentesis en el nombre del componente

Ej:
% function Welcome(props) {
% 	return (
% 		<>
% 			<p>Hola {props.nombre}, como estas?</p>
% 			<p>Asi que te llamas {props.nombre}</p>
% 		</>
% 	);
% }

Ej:
%   <Welcome nombre="Ale"/>
%   <Welcome nombre="Fer"/>
%   <Welcome nombre="Pablo"/>

?    <Componente propiedad=""  />

    . Puedo pasar:
        % funciones
            / Se llaman callbacks
        % Componentes

        % children

. puedo pasar un valor por default para otraPropiedad, cosa que si no se pasa, cargue ese valor
?   const PrimeraApp = ( {propiedad,  otraPropiedad = 'texto default' } ) 


. Otra forma de pasar un valor por default es
? PrimeraApp.defaultProps = {
?    tercera: 'esta es otra forma de pasar un valor por default'
? }


> propTypes
! rafcp
es el snippet para crear un componente con proptypes
sirve para validar el tipo de las props. Tambien si son requeridas o no

// arriba
?   import PropTypes from 'prop-types';

// abajo
// aca defino el tipo que deberia tener cada prop
?   PrimeraApp.propTypes = {
?       primera: PropTypes.string,
?       segunda: PropTypes.number.isRequired,
?   }


> { children }

Podemos pasarle el contenido de un componente a su hijo.
Este puede ser texto, una funcion, un componente...

?   <Padre>
//      contenido para el hijo    
?   </Padre>

    . Luego en el hijo uso la prop children
?export const DivDePrueba = ({ children }) => {
?    return (
?       <div>
?            <h1>{ children }</h1>
?        </div>
?   )
?}

, 	STATES
, ===========================================

// En clase based components
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div>
                <Hello name = { this.state.name }
            </div>
        )
    }
}

/*  


, 	EVENTOS
, ===========================================
se les pasa una funcion callback.
Podemos usar el parametro 
>                           e o event
para sacar informacion util del evento que llamemos   

> onClick( () => algo para hacer en el click)
 */

// una forma de pasar funciones que usan el event, es asi
const handleAdd = (e) => {
    console.log(e);
}

<button onClick={ handleAdd }></button>

/* 

, 	ESTILOS
, ===========================================

    . Al pasarle estilos a una etiqueta con el atributo style, se pasa en realidad un JSON con pares key / value

        ? <h1 style = { { color: 'violet',
        ?                 backgroundColor: '#333' 
        ?                }}


    . Otra opcion es usar

, styled-components (es recomendable para encarar el laburo)
        https://styled-components.com/

        Material UI funciona tambien para modificar los estilos
        Crea componentes que ya tengan el estilo insertado.
        La idea es que gestiones los estilos, que no se crucen.

        . Esta bueno instalar la extension: 
            vscode-styled-components 

    .1. 
        % npm install --save styled-components

    .2. poner arriba de todo
        % import styled, { css } from "styled-components"

    // Es importante que esta clase este afuera de la funcion principal
    // y que comience con MAYUSCULA
    .3.
    ? const Button = styled.button `
            propiedades CSS aqui
    ?       `

    > props
        ! es un OBJETO 


, bootstrap
.1 
    ? $ npm install bootstrap

.2 en App.jsx
    ? import 'bootstrap/dist/css/bootstrap.min.css'


, SASS

.1 Primero, instalar SASS (node-sass esta deprecado)
    ? npm install sass

.2 Crear carpeta para scss
    % scss / app.scss

    



, 	CICLOS DE VIDA
, ===========================================

Con componentes de clase, se hacia con otros metodos. COn hooks, se usa UseEffect

> Montaje
    // ANTES de generar un componente. Se incluye en el DOM
    . componentWIllMount()

> Actualizacion
    . componentWillReceiveProps()
        / Antes de que el componente reciba props, ejecuta algo

    . componentWillUpdate()
        / Se ejecuta antes de actualizar la vista. Prepara el render luego de actualizar estado o propiedades

> Desmontaje
    // cuando se elimina del DOM

    . componentWillUnmount()
        / Antes de que muera el componente, ejecuto una funcion

,      HOOKS
, ===========================================
    . Es una solucion a las vueltas que habia que dar para actualizar componentes en el DOM
    . permiten enganchar nuestros componentes funcionales a características propias de un componente de clase
    . NUNCA se utilizan los hooks de manera condicional.
    . SIEMPRE tienen que estar conectados al componente


, useState

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // todos los callbacks aceptan el parametro de event
    const handleAdd = (e) => {

        // el setter (setCategories) del useState recibe el valor de la variable ( categories ) como parametro para poder realizar operaciones con callbacks
        setCategories( categoria => [ ...categoria, 'Nuevo Elemento', e.target.innerHTML])

        // usando el parametro que representa el ultimo valor dentro del setter, podemos usarlo para actualiazar el State desde un hijo!!!!!!!! Sin tener que pasar el State como prop
    }




, useEffect
    . Controla el ciclo de vida
    . Se encarga de mutaciones en estados y props
    . Cuando uso un LISTENER, tengo que matarlo desde el return
    . Cada vez que updateo, primero MATO al componente anterior, y luego MONTO el nuevo
    . EL log daria asi:
        App will RENDER
        App will UNMOUNT
        App MOUNTED (esta seria la nueva instancia del componente)
 */

    function App2() {
        const [name, setname] = useState(initialState);

        useEffect(() => {
            console.log('App MOUNTED');
            return () => {
                console.log('App WILL UNMOUNT');
            }
            // si paso un [], solo se ejecutara el MONTAR
        }, [/* filtros */]);

        console.log('App will RENDER');
        return (
            <div>
                algo
            </div>
        )
    }

/* 


,      TESTING
, ===========================================
, Versionado Semantico
En el package.json aparecen las librerias que tenemos en nuestro proyecto, para que si borro la carpeta de node_modules, cuando la isntale de vuelta pueda instalar automaticamente las librerias utilizadas

. version  = solo instala la version indicada
. ~version = actualiza SOLO la Z
. ^version = actualiza Y.Z
. >version = instala versiones mayores que la indicada
. X.Y.x    = instala versiones con cualquier fix, pero no modifica X.Y
. latest   = instala el ultimo release

 //     2.3.5
 //      X.Y.Z

 / X = Version Mayor
 / Y = Version Menor
 / Y = Fix

 Hay comodines para ver que version se instala

,       PIRAMIDE DE PRUEBAS
,-----------------------------------
    MANUAL
  INTEGRACION
  UNITARIA | SNAPSHOT

/ Varias pruebas unitarias y de snapshot puede usarse para validar pruebas de integracion.
/ Varias de integracion, puede usarse para pruebas manuales
/ Para FRONT, se aconseja empezar con UNITARIAS / Snapshot. integracion luego, si se necesita
/ Las pruebas son LOCALES. No se suben a produccion.




> de Integracion
    . para probar conexiones entre componentes
    . Probamos relaciones padre / hijo
    . Pureba partes que no se ven con las pruebas unitarias

> Unitarias y de Snapshot
    . forma facil de probar componentes
    . Son para items AISLADOS
    . SNAPSHOTS. Esta bueno probarlos con componentes de presentacion.
        . Dandole propiedades y esperando un render especifico

> AAA
 son los pasos en la etapa de pruebas

. Arreglar (Arrange)
    Inicializamos variables
    Import necesarios

. Actuar (Act)
    Llamamos metodos
    Simulamos clicks
    Realizamos acciones sobre el paso anterior

. Afirmaciones (Assert)
    Son los resultados esperados

, JEST
https://jestjs.io
https://jestjs.io/docs/api
? describe()
?   it()
? test(DESCRIPCION, CALLBACK A EVALUAR)

Viene instalado con React
Es de facebook. Prueba apps de React
Se puede usar solo, para pruebas con snapshots
. Ejecutor de pruebas
. libreria de asercion
> mocking.
    % tomar un objeto ciertos datos dummy que emulan el comportamiento real de un servicio
    / sirve para aislar compomentes y funciones. Se define la SALIDA de nuestra funcion o dependencia
    / la idea es imitar los casos de BORDE
    . 



> snapshot
https://jestjs.io/docs/snapshot-testing
    . es una captrua del estado actual del HTML que esta renderizado. Desde alli, podemos crear un wrapper con ese snapshot y ver de acuerdo al predefinido, si hubo modificaciones
    . Crea snapshot renderizado, lo compara a uno previamente almacenado.

    . Al correr el 
       > .toMatchSnapshot()
       . crea la carpeta __snapshots__ y me guarda un .snap con el snapshot para comparar


%  PASOS

/ se guardan en:
    %tests/__snapshots__/App.test.jsx.snap

.1. Armo un test para matchear snapshot
 */

//? expect()
// https://jestjs.io/docs/expect
/// expect tiene muchos metodos asociados. Estan todos en la pagina de Jest. Sirven para evaluar expresiones

test('debe coincidir con snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})

/* 

    / Armar los test suites
    / Dentro, testcases
    / Dentro van los
    >  matchers
    Se usan para afirmar que un objeto esperado es igual, cercano, menor , mayor o contiene cualquier otra conexion logica al objeto de salida.
    . Se pueden crear construcciones diferentes con estas conexiones logicas.





, ENZYME
    // https://enzymejs.github.io/enzyme/
    / desarrollo de airbnb para testing
    / solo funciona para REact
    / NO puede funcionar solo. Necesita de un ejecutor de pruebas, como Jest
    * Tiene 3 tipos de renderizacion:
        > Shallow rendering
            Aisla el componente. Protege el test contra cambios en componentes hijos.
?           import { shallow } from 'enzyme';
?           const wrapper = shallow(<MyComponent  PROPS OPCIONALES/>);

        > Static Rendering ( render )
            renderiza HTML estatico. Incluye hijos
            Menor funcionalidad que mount
            Es ideal cuando hay interaccion con APIs DOM
            Es el unico modo de probar DidMOunt y DidUpdate
?           import  { onrender }
?           const wrapper = onrender(<MyComponent />);

        > Full Rendering ( mount )
            Renderiza el DOM completo. Hijos cincluidos
            Permite acceso props pasados por defecto o props del componente
            Podemos usar los ciclos de vida de React par probar el componente
?           import  { mount }
?           const wrapper = mount(<MyComponent />);



% MATCHERS
https://jestjs.io/docs/using-matchers
    / parte 1 wrapper.
    % shallow
    .contains(<ELEMENTO CON PROPS EXACTAS>) // 

    .containsMatchingElement(<ELEMENTO con Props mas flexibles>)

    .props().disabled.toBe(true) // boton deshabilitado o no

    .exists().toBe(true)
        muestra si existe o no el contenedor

    .find(ELEMENT) 
        devuelve una lista

// puedo simular listeners con
    .simulate(event[, ...args]) => Self
        event (String): The event name to be simulated
        (Any [optional]): A mock event object that will get passed through to the event handlers.

    % mount
    > children
    . expect.(mount(COMPONENTE).children(NOMBRE DEL COMPONENTE HIJO).length).toEqual(1)
        aca pregunto si hay un HIJO que se llame asi. Veo si su longitud es 1, a ver si existe
        / children devuelve un array con lo que encuentra

// puedo simular listeners con
    . wrapper.setProps( LE PASO PROPS para que la evalue )
        es similar al simulate de shallow

    / parte 2
    .toBe()
        false or true para saber si una estructura existe en el html (<h1></h1>)
    .not.LO QUE SEA
        es el negativo de lo que este testeando


        

    %-----------------------------------------------------------------------
    % PASOS 
    %-----------------------------------------------------------------------

/ Jest ya esta instalado
. 1) Tener a mano la documentacion de:
    / Jest
    / enzyme 

. 2) Instalar enzyme
/ @types/jest es para el intellisense para palabras clave de jest
/     como describe y test
?   $ npm install enzyme enzyme-adapter-react-16 @types/jest
/  enzyme-to-json es para los snapshots
?   $ npm install enzyme-to-json

! si no anda el adapter-16
?   $ npm install --save-dev enzyme enzyme-to-json @wojtekmaj/enzyme-adapter-react-17


. 2.1) puedo modificar el
        %package.json 
        .para agregarle el --verbose
    ? "test": "react-scripts test --verbose"
    



. 3) Agregar el adaptador Enzyme en la carpeta:
    % <root>/setupTests.js
*/

    const Enzyme = require('enzyme')
    const Adapter = require('enzyme-adapter-react-16')

    // se instancia la configuracion para el nuevo adaptador
    Enzyme.configure({ adapter: new Adapter() });

/* . 4) Agregar tests de ejecucion en el archivo:
    % src/App.test.js 
    */
    import React, { Component } from 'react';
    import App from '../App';
    import { shallow } from 'enzyme';

    describe('NOMBRE DEL CONJUNTO DE TESTS', function () {

        // aca pongo al wrapper global para todos los tests
        // el wrapper es de enzyme. Envuelve y aisla un componente
        // No se testea sus hijos
        //! si creo un wrapper dentro de cada test, ahi tendra ambito local para cada test!!!
        let wrapper;
        beforeAll(()=> {
            wrapper = shallow(<App />);
        })

            // o test
        it('LO QUE DEBERIA HACER este caso', () => {
                                        //  aca se selecciona como en jQery
                                        //  ".clase" "#id", etc
            const appComponent = wrapper.find("a");
        // cada API tiene sus metodos. find es uno. Buscar mas en enzyme
                                    //    https://enzymejs.github.io/enzyme/docs/api/
            expect(appComponent.text()).toBe('hola');
        })
    })

/* 
> trabajando con SNAPSHOTS

    / se guardan en:
    %tests/__snapshots__/App.test.jsx.snap

    */
        describe('NOMBRE DEL CONJUNTO DE TESTS', function () {
        // aca pongo al wrapper global para todos los tests
        // el wrapper es de enzyme. Envuelve y aisla un componente
        // No se testea sus hijos
            let wrapper;
            beforeEach(()=> {
                wrapper = shallow(<App />);
            })

                // o test
            it('debe coincidir con snapshot', () => {
                expect(wrapper).toMatchSnapshot();
            })


//> SIMULATE
describe('TEST SUITE DENTRO DE TEST SUITE', function () {
    
                    let wrapper;
    //. simulando un evento en el DOM
                    beforeEach(()=> {
                        // encuentro el primer input
                        const input = wrapper.find('input').first()
                        // simulo un cambio en el value del elemento
                        input.simulate('change', {
                            target: {value: elemento}
                        })
                    })
        
                        // o test
                    it('debe coincidir con snapshot', () => {
                        expect(wrapper).toMatchSnapshot();
                    })
        
        
                })


        })

/* 
> TEST ASINCRONOS

Para ejecutar test asincronos, debo pasar el parametro done al test, y luego llamarlo al terminar la operacion asincrona, para marcarle a JEST que tiene que esperar.

	// paso como parametro el done, para luego mostrarle donde termina el test asincrono
?	test('getHeroeByIdAsync debe retornar un heroe  async', (done) => {
?		const id = 1;

		// retorna una promesa que si encuentra el id, al segundo y medio devuelve el heroe respectivo
		// si lo hago sin el done(), no va a esperar la respuesta y me va a pasar por alto

?		getHeroeByIdAsync(id).then((heroe) => {
?			expect( heroe ).toBe( heroes[0]);
?			done();
?		});
?	});


, AXIOS 

El truco sobre probar llamadas a la API, es que no se invca la API. se hacen 
, MOCKS
https://jestjs.io/docs/mock-function-api
de promesas

Los mocks son una implementacion de Jest
    %-----------------------------------------------------------------------
    % PASOS 
    %-----------------------------------------------------------------------

 .1.) En el componente, exporto una peticion get con axios
 En la api, creo una clase que invoca una url que obtiene una respuesta
*/
import axios from 'axios';

class Items {
    static getColores() {
        return axios.get('./obtenerColores').then(resp => resp.data)
    }
}

// .2) Importo la clase en la parte del test
import Items from './Items';

//declaro que voy a mockear axios
jest.mock('axios')

test('debe restornar colores', () => {

// creo una respuesta posible para meter como mock
    const respuesta = {data: [{color1: 'Rojo', color2: 'Verde', color3: 'Azul'}]}

    // Acepta una funcion que deberia usarse como la implementaicon de un mock
    axios.get.mockImplementation(()=> Promise.resolve(respuesta))

    // se comparan todas las propiedades de las instancias de objeto
    return Apis.getColores().then(data => expect(data).toEqual(respuesta.data))
})

//. 3) Creo un archivo donde creo un mock de la respuesta esperada
const rango = n => [...Array(n).keys()];

const recobrarArticulos = () => {
    return Promise.resolve({
        response: {
            results: rango(10).map( i => ({
                webUrl: `https://abc${i}.com`,

                webTitle: `Algun titulo ${i}`
            }))
        }
    })
}

export default recobrarArticulos



/* 
, CLI
https://jestjs.io/docs/cli

opciones de CLI de Jest
. usamos powershell
. Tiene comandos y modificadores para poder trabajar con generacion de reportes
. Si no hay test, que los test no rompan


?   $ npx jest --coverage
    hace la cobertura de codigo de los test que estuvimos ejecutando


, REACT ROUTER
,....................................................

, react-router-dom: "^6.0.2"
Cambian varias cosas respecto a la version 5

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!         CAMBIOS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

! Redirect
x
* Navigate

! Switch
x
* Routes
    / Routes va a ser mas fuerte que el switch
    / dentro, SIEMPRE debe tener hijos Route

!...................................................................................
!       useHistory
x
*       useNavigate

! const history = useHistory()
x
* const navigate = useNavigate();

! history.replace("/login")
x
* navigate("/login")

! history.push(`?q=${ searchText }`);
x
* navigate(`?q=${ searchText }`);

! const { go, goBack, goForward } = useHistory();
! go(-3), goBack, goForward
x
* navigate(-3), navigate (-1), navigate(1)

! history.length
x
* navigate.length

!...................................................................................

! component  ===>  <Route  path="/marvel" component={ MarvelScreen } />
x
* element ===>     <Route  path="/marvel" element={ <MarvelScreen /> } />


><NavLink
  to="/messages"
- className="nav-link"
- activeClassName="activated"
+ className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
- exact
+ end
>

! activeClassName="activated"
x 
* className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}

! exact
x
* end

.......................................................................
. Cosas que si y que no
! Renombrar como Router al BrowserRouter

* Dentro de Routes, SIEMPRE tengo que poner Route.

! No puedo usar mas PrivateRoute y PublicRoute dentro de Routes.
* Routes > Route. 
    / Sino se rompe




    %-----------------------------------------------------------------------
    % PASOS 
    %-----------------------------------------------------------------------

    .1 Instalar react router
        ? $ npm i react-router-dom

    .2 Importar en App.jsx los modulos
        ? import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom';

        > <BrowserRouter >
            Sera el modulo que WRAPEA todo el codigo.

        > <Switch />
            Donde proyectaremos las vistas navegadas.
            Permite que agarrea UNA sola coincidencia.
             COntiene:

        > <Route exact path= "/cart (o la ruta que sea) "/>
            Que son las rutas aa los componentes que queremos mostrar
            / El exact es para que cargue la ruta exacta
            / El path es para indicarle la url que queremos que se relacione con el contenido del Route

            // path normal
            ? <Route path = "/">
            ?    <COMPONENTE1/>
            ? </Route>

            // path dinamico
            ? <Route path = "/categoria/:NOMBRE_CATEGORIA">

            > path

        > <Link to={'/PATH'}>

            / sirve para ur a un path desde otros componentes
            / En el DOM crea un <a></a>
            / Se usa para los links en la navbar 

            ? <Link to={`/contacto`}>
            ?    <b>Ir a la pagina de contacto</b>
            ? </Link>

        > <NavLink to={'/PATH'} activeClassName="texto-azul" 
        >                   className="texto-blanco">
            / es un Link con estilos para la clase selecionada en:

            // activeClassName 
                agrega una clase al elemento cuando esta ACTIVO

        > Redirect
           ?  <Redirect to="/" />

        > useHistory
            / Se usa para redirigir a una pagina especifica cuando te deslogueas o haces alguna accion


        , usa el HOOK useParams() 
            / Trae al componente los parametros que se pasan en el path del Route

            si paso
            ? <Route path = "/categoria/:categoriaID">
            ?    <componenteConZapatillas/>
            ? </Route>


            voy al componente

            ? const { categoriaID } = useParams()
            
            

            
*/
    <BrowserRouter>
        <Switch>
            <Route path = "/">
                <COMPONENTE1/>
            </Route>

            <Route path = "/componente2">
                <COMPONENTE2/>
            </Route>

            {/* este es un modo para pasar la pagina de ERROR por si no encuentra la ruta */}
            <Route path="*" children={<div>ERROR 404 amigo</div>} />

        </Switch>
    </BrowserRouter>

/* Otra forma de manejar las rutas, es como hacia Rodri en el Lab

> history
import { createBrowserHistory } from "history";

export default createBrowserHistory();

>Router
Usa history como prop
*/
        <Router history={history}>
          <Routes isLoggedIn={isLoggedIn} />
        </Router>

/* 
Al Router, le paso un componente llamado 
    . <Routes/>

Luego en Routes, va a ir wl Switch





*/



/* 
,....................................................
,               LIBRERIAS
,....................................................





, FORMIK
,............................
>https://formik.org/docs/overview#installation

/ es para hacer formularios en pocos pasos
/Para validar todos los campos, antes habiar que manejar un estado por input. En formularios grandes, esto puede ser muy confuso

/imaginate hacer uno de estos para cada input
inputNOMBRE --> value={ inputNOMBRE } onChange={handleInputNOMBRE}
const [inputNOMBRE, setInputNOMBRE] = useState('')
const handleInputNOMBRE = (e)=> {
    setInputNOMBRE(e.target.value)
}

. FormiK toma los ** name ** ade los inputs

.1) Instalar formik
    ? npm install formik --save

.2) Importarlo
    ? import { Formik } from "formik";

.3) Encierro el codigo dengro de la etiqueta Formik
    . Usamos una RENDERER PROP. Vamos a renderizar el form, pero lo pasamos dentro de una funcion! Y le podemos inyectar valores de Formik.
    . Para que me retorne un JSX, voy a envolverlo en parentesis

    . Formik tiene muchos metodos preestablecidos para pasarle como props al Renderer Prop. Hago destructuring, para que sea mas legible
    { handleSubmit, values , handleChange, handleBlur}

    > onSubmit={(valores)=> { console.log(valores)}}> 
        Esto va en la etiqueta Formik. Recibe los valores de los inputs.
        


    		<Formik 
			initialValues={{
				nombre: 'Carlos',
				correo: 'correo@correo.com'
			}}
			onSubmit={()=> { console.log('Formulario enviado')
		}}>
			{( { handleSubmit, values , handleChange, handleBlur} ) => (
				<section className="container is-4 column card mt-4 has-background-primary">
					<form className="field center-text container mt-5" onSubmit= { handleSubmit }>
						<div>
							<label className="label" htmlFor="nombre">
								Nombre
							</label>
							<input
								className="input"
								type="text"
								id="nombre"
								name="nombre"
								placeholder="John Doe"
								value={ values.nombre}
								onChange={ handleChange }
								onBlur={ handleBlur }
							/>
						</div>
						<div>
							<label className="label" htmlFor="correo">
								Email
							</label>
							<input
								className="input"
								type="text"
								id="correo"
								name="correo"
								placeholder="correo@correo.com"
								value={ values.correo}
								onChange={ handleChange }
								onBlur={ handleBlur }
							/>
						</div>
						<div className="has-text-centered">
							<button
								className="button is-link mt-5 "
								type="submit"
							>
								SUBMIT
							</button>
						</div>
					</form>
				</section>
			)}
		</Formik>


, ESLINT

.1) 
? npm install eslint -D

.2) Para configurarlo para que quiero usarlo
? npx eslint --init

    ? (x) TO check sintax, find problems and enforce code style

    ? (x) JavaScript modules (import/export)

    ? (x) React

    ? (x) NO usamos typescript
    
    / con A selecciono los dos
    ? (x) Browser
    ? (x) Node

    ? (x) Use a Popular style

    ? (x) Standard: https://github.com/standard/standard

    / Which format do you want your config file to be in?
    ? (x) JSON or JAvascript

    > Luego me crea las dependencias con npm



, REDUX
// https://github.com/zalmoxisus/redux-devtools-extension
    . Libreria para manejo de estado a nivel global
    . Basado en patron FLUX. Hay UN FLUJO DE DATOS
        Action -> Dispatcher -> Store -> View
    
> Action Creator
    Funcion que retorna un objeto JS plano
    / te piden que llenes tus datos para un empleo

> Action
    Es un objeto de JS => Type / Payload
    / Son los datos ya llenados de la solicitud

> Dispatch
    Es el encargado de tomar le objeto y hacerlo llegar a quien corresponda
    / Es recursos humanos. Se encarga de llevar mi hoja a quien corresponda

> Reducers
    Verifica si una action corresponde con algun caso en especifico
    / Areas que verifican a quien corresponde ese CV

> Store
    Es un objeto enorme que representa otros objetos mas pequeños
    / Se guarda en el cajon de candidatos del area al cual llego

! PASOS

.1. npm install react-redux redux redux-thunk
.2. crear carpeta actions, reducers, selectors. O tener la carpeta REDUX
.3. Dentro, las carpetas 
                % Business. 
                Dentro
                % Business.actions.js, Business.types.js, Business.reducers.js
.4. Creo 
    % store.js
    creo
    ? import { compose, createStore } from "redux";
    ? import rootReducer from "./root-reducer"

// plugin para ver los cambios en el DOM
    ? const composeEnhancers = window.window.__redux_devtools_extension_compose__ || compose

// creamos el store
    ? const store  = createStore (
?        rootReducer,
?        composeEnhancers()
?     );


.5. En
    % index.js
    creo
    ? import { provider } from 'react-redux'
    ? import store from ''

.6. Creo :
    % root-reducer.js
    / va a guardar los archivos clave valor
    creo
    ? import {combineReducers} from "redux";

    export default combineReducers({
        test: "perrito"
    })



, Redux Thunk
    Es un middleware.
    composeEnhancers labura con los middlewares

    ? import { applyMyddleware } from 'redux';
    ? import ThunkMiddlware from 'redux-thunk';

, Redux Saga
    Ver que chota es


*/
