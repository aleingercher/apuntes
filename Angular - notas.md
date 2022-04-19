https://angular.io/  
https://angular.io/cli  
https://angular.io/guide/file-structure  

## HISTORIA

. Es un framework para SPA  
. SPA (partial updates). Ej: Maps, emails  
. Angular 2 (2016) fue un rewrite entero del 1.JS (2010)  
. Actualizaciones cada 6 meses  
. Muchos desarrolladores usan las propiedades PUBLICAS y no usan los getters y setters 


## comandos consola

_PRINCIPALES_  

        node  

        npm  

        tsc  

_INSTALAR CLI_

        > npm install -g @angular/cli

_CREAR PROYECTO_  

        > ng new nombre-codigo

_CORRER EL CODIGO_  

        > node nombreArchivo.js

_CORRER COMO NPM START_  

        > ng serve
                Esto:
                transpila
                comienza el server en http://localhost:4200
                hace un watch
                updatea mientras cambio cosas

        > ng serve --open
                Abre la web por mi

        > ng serve --port 5100 --open
                Abre la web especificamente en el puerto 5100

_CREAR NUEVO COMPONENTE_

        > ng generate component nombre-componente

_CREAR NUEVA CLASE_  
Tengo que apuntar a la carpeta donde quiero que se cree la clase

        > ng generate class sales-person-list/SalesPerson
                


## partes que lo componen

. Component  

        Parte principal. Tiene dos partes  
        1. Vista de la user interface  
        2. Clase que contiene la logica de aplicacion y manejo de la vista  

. View Template

        HTML

. Directive

        Agrega funcionalidades al HTML. Lo usamos para loops, ifs, etc

. Service

        Es el *.ts que crea una clase que usamos para traer data, hacer calculos, validar. 

. Module

        Es una coleccion de componentes relacionados, directivas, servicios.


##        DECORATORS
Son como los Annotations en Java

``` js
@Component({
        selector: 'app-name',
        templateUrl: app.component.html,
        styleUrls: [ './app.component.css']
})
```

##      DIRECTIVAS
https://angular.io/api/common#directives

### *ngFor

For loop  
Se usa con un for of  

``` html
<ul *ngFor="let user of users">
        <li> {{ user.firstName }} </li>
</ul>
```

### *ngIf

For loop  
Se usa con un for of  

``` html
<p *ngFor="BOOLEAN EXPRESSION; else #idParaElElse">
        Mostrara esto si es verdadero
</p>
<ng-template #idParaElElse>
        Mostrara esto si es falso
</ng-template>
```

### [ngClass]  
Aplica clases condicionales si le paso un objeto  
``` html
<!-- Va a aplicar la clase 'active' si evalua a true. Puede ser un bo -->
<p [ngClass]={'clase1': BOOLEAN EXPRESSION,
              'clase2': BOOLEAN EXPRESSION
              }></p>
```


##      ANGULAR PIPES
https://angular.io/api/common#pipes

### currencyFormatting
https://angular.io/api/common/CurrencyPipe  
solo funciona para formatear, no realiza ningun calculo

        {{ person.salesVolume | currency: 'USD' }}
