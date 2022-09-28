# JAVA WEB APi

Profe:  
Leonardo Lopez  
leonardorlopez@hotmail.com


Educacion it  
https://alumni.education/course/277/300703  
<br >

## PREGUNTAS
#### Problemas con el apache tomcat
Instalar el 9 de vuelta, o el 8.5


## CLASE 1 y 2


### Instalaciones

1) Windows -> Preferences -> Server -> runtime. Elijo el apache que tengo instalado  

2) Selecciono la version, y brindo la ruta de isntalacion


### Dynamic Web Project
1) Creo un nuevo idem
    - Esto es un proyecto web
    - Vinculo al tomcat que tenga instalado.

### Maven project
1) next

2) Filter -> maven-archetype-webapp
    - Groupid: ar.com.galicia.cobranzas // nombre de la empresa
    - ArtifactId: Cheques // nombre del proyecto
3) Busco la dependencia de servlet

4) Cambio el mvn compiler a por los servicios web
``` xml
<maven.compiler.source>1.8</maven.compiler.source>
<maven.compiler.target>1.8</maven.compiler.target>
```

5) Voy al  Descriptor de despliegue 


#### web.xml
- Descriptor de despliegue
- Se utiliza para marcar rutas, vincular recursos.
- Es un archivo privado. 
- Es para poner info sensible
- Ahora lo reemplazamos por la notacion
``` java
@WebServices
```

6) Creo la carpeta "java" en "main"

7) webapp > WEB-INF > index.jsp

> index.jsp

#### .JSP
- Cuando la compila, la considera como una clase.
- Es la solucion de Java para el desarrollo web
- Este archivo tiene contenido HTML.
- Tenemos objetos implicitos poara invocar
    - request
    - response
    - sesion
    - out
- El codigo java se insertaba entre <% %>
- Comentarios: <%-- comentario aqui --%>

> ▣ webapp

tiene permisos limitados. Nuestro jsp va a quedar medio escondido para el server

8) Click der en src/main/java
    - new -> servlet -> uso el nombre del paquete
    - Esto modifica el web.xml

### SERVLET

Me permite escuchar metodos que reciben info de por HTTP

El objeto SESSION, esta dentro del request. Y este guarda los datos
Las COOKIES son archivos de info que se guardan en el cliente


### SESIONES

#### SESSIONID
La sesión permite identificar a un cliente en particular del lado del servidor. Puede mantener un conjunto de valores determinados únicamente para ese cliente a lo largo de un periodo de tiempo. Técnicamente, es una espacio de memoria que reserva el servlet container para un cliente, identificando este espacio con un identificador de sesión o SESSIONID.
Las sesiones se utilizan típicamente en logins de usuarios, sitios de e-commerce donde resulta necesario construir un carrito de compras,
y también en bancos que proveen el servicio de Home Banking.

``` java
session.setAttribute(“nombre_del_atributo”, objeto_con_el_valor);
```

Un ejemplo de envío del identificador de sesión es el siguiente:
>../destino.jsp;jsessionid=aa363bcaa3af23bac8f4999

#### SESSION TIMEOUT

- Es en minutos
- Es el tiempo que dura la session sin que el usuario interactue con el servidor.
- Hay que poner esto en el descriptor de despliegue  
 ``` xml
<session-config>
    <session-timeout>10</session-timeout>
</session-config>    
```

### Web Service  
Se creo para comunicar diferentes tecnologias. Es 'agnostico' digamos.

#### Web Service Protocol Stack
protocolo TRANSMITIR => HTTP 
protocolo de MENSAJERIA -> SOAP
protocolo de DESCRIPCION -> WSDL
protocolo de DESCUBRIMIENTO -> Pagina Web


SOAP -XML



``` XML
// un WSDL es un XML com superpoderes

// para ver un WSDL busco el address (URL), y le agrego ?wsdl al final 

```

#### NNotaciones



