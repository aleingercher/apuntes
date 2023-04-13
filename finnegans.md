# FINNEGANS

Tres capas ( o  WORKINGSET) que comparten todas las verticales

- bsuite (ERP) -> es lo mas habitual
- teamplace (la parte social)
- openframe (rara vez se toca)

Luego tienen modulos personalizados.

Todas las capas tienen diferentes modulos dentro

## FTP

    Servidor: ftp.finnegans.com.ar/login
    usuario: ceresliveclientes
    clave:  guevaraPower533

## SonarQube

    user: aingercher
    pass: L2z5UiYb5oebB3

## Glosario


**Normalizacion**  
4 o 5 pasos que apuntan a evitar la redundancia de info

Tiene reglas;
- Cuando tengas una estructura con datos que se repiten separas en dos tablas, los que se repiten, y los que no.  
Ej:  
Factura (cabecera)  
FacturaID   | nro factura | Fecha | empresa    

FacturaItem (detalle)  
ItemID  | | FK a FacturaID | Producto   | Etc....

**patron Modelo Cabecera Detalle**  
Es un patron que consiste en tener una cabecera fija, y luego hacer un detalle para cada item, repeitiendo bastante info en cada fila 
nro factura | empresa   | Fecha | producto  | cant  | valor | subtotal  | total
    001     | coto      | 2/22  | cocacola  | 2     | 100   | 200       | 950
    001     | coto      | 2/22  | sprite    | 5     | 150   | 750       | 950

**PNC**
Productos No Conformes

**PPP**
Precio promedio ponderado.   
El sistema toma de forma automática el promedio del precio del bien de cambio a partir de las facturas de compra del periodo que se esté valorizando, valuándolas a dicho importe.

**PUC**
Precio Ultima Compra

Es para valorizacion

**Teamplace**  
Es la aplicacion

**TIPOS de Documento**  
0. Productos
1. Conceptos calculados
2. Vencimientos

**VNR**
Valor Neto Realizable

En ABM de productos, es el Costo Standard

Es el precio que podemos obtener por un elemento de nuestro activo, es decir, a qué precio podemos venderlo.  
Se calcula mediante la diferencia entre el valor de mercado (precio de venta) y los costos asociados de venta, entre los cuales se incluyen: Transporte, comisiones de los vendedores u otros siempre que estén directamente relacionados al proceso de venta; para llegar así al valor neto realizable.

### PROBLEMAS COMUNES

## Rutas de archivos que pueden faltar - JS
Si la consola del chrome te tira que falta algun js, ver si estan en

> /home/finnegans/wildfly18/standalone/deployments/ERPWeb.war

Si faltan por ejemplo, _ordenproduccion.js_, agregarle

> /general/forms

## Se rompe openframe, no compila NADA y pide la clase FAFUtils

SOLUCION

1. borrate openframe, clonalo de nuevo
2. Borrar la carpeta fafcache de Home/m2/repository/finnegans
3. luego solo compilate LegacyFafCache y Framework
4. parate en la carpeta openframe y corre esto en consola
    mvn -f pomGlobal.xml clean install




### TIPOS DE CLASE  
- **VO**  
Value Object

- **HLP**  
Controlador (Helper)

- **FORM**  
Vistas (los js y xml son tambien vistas)

## BSUITE

- **i18n**    
Es la capa que se encarga de la internacionalizacion

## Compilacion

- Compilamos los de codigo Java
    1. Voy a la consola levanto DOCKER
        - ```sudo docker start mssql```
    1. Levanto MSSQL (ver USO DE BASE DE DATOS CON DOCKER)
        1. Descomprimo la base en /mssql
        1. Navego a la carpeta /mssql
        1. Le doy los permisos
            - ```sudo chmod 777 NOMBRE_BASE_ENTERO.bak```
        1. Voy a Azure y la restauro
            1. Click der en _localhost_ -> _manage_
            1. _Restore_
            1.  _from BackupFile_
            1. Selecciono el .bak
        1. Blanqueo la base de datos 
            - Apenas restauro la base, corro el [script](./finnegans-blanqueoDB.sql) o este [script](https://gitlab.finneg.com/erp/bsuite/-/wikis/Script%20restauracion%20de%20bases)
    1. Voy y toco el _fafconfig.xml_
        - Copio y pego el modulo y modifico _name_ y _dsName
    1. voy a _fafconfigmodules.xml_
        1. Tengo que saber con que modulos labura el cliente. Para eso voy a https://qa.teamplace.finneg.com/BSA/ -> AppBuilder -> Modulos Instalados
        1. Los agrego en este orden, de mas especifico, y mas abajo, van los modulos comunes.
    1. Voy a _standalone.xml_
        1. Agrego un nuevo datasource.
    1. (SI NECESITO MODULOS) Voy al  _fafmodules.alt.wildfly.xml_. Lo toco solo si es necesario
        1. Voy abajo de todo, y lo agrego con el numero siguiente
    1. Abro el IntelliJ
    1. Vamos a la derecha, abrimos Maven
    1. Abrimos cada proyecto que queremos compilar
    1. proyecto -> Lifecycle -> clean and install
    (En intelliJ no anda el pom global)
    1. Levanto el servidor en DEBUG
    1. Ingreso al local -> http://localhost:8080/BSA
        - Nombre: "Supervisor"
        - Empresa: la que necesite (ej: COMERCIALIZADORA)    

## Conceptos generales

### Clasificacion de Tipos de documentos

#### Tipos de documento -> Categorias -> Documento
#### FAFTransaccionTipo -> FAFTransaccionCategoria -> FAFTransaccionSubtipo

### AppBuilder

1. Hago una transaccion  
_BSTransaccion_  (__PK__ TransaccionID)
Si es una operacion <-> _BSOperacion_ <-> _BSOrganizacion_ (Si es Venta=cliente, Compra=proveedor)  
Cada Operacion, se asocia a un <-> _BSOperacionItem_ <-> _BSPRoducto_

## Servicios  

### Contabilidad  
- Usa la tabla BSAsientoItem

### Stock  
- Usa la tabla BSMovimientoStock

### Dimensiones  
- Usa la tabla BSTransaccionDimension

### Vinculacion entre Operaciones
- Usa la tabla BSOperacionItemCancelacion

### de Cuenta Corriente (Aplicaciones) 
- Usa la tabla BSAsientoItemCancelacion

### Cotizaciones
- Usa la tabla BSTransaccionCotizacion

## Clases importantes

### SessionVO
    - SessionHLP.getSession(SessionID) -> devuelve SessionID
    - Representa al usuario LOGUEADO  

### DBHelper   
Es un servicio que ofrece el framework. Es el ayudante de la base de datos.  
    - Reserva un lugar en el POOL de conexiones. Cuando termina la conexion, la cierra.
    - Permite ejecutar Stored Procedures  
    - Lo inicializas como nulo
    - Le pasas una session. Extrae un sessionID

 ### QueryBuilder

 Hace una abstraccion de una sentencia ANSI SQL. Es parecido a lo que hace hibernate.  
 - Se genero con un patron de Diseño Factoria Abstracta.   Funciona con Interfaces. Animales y plantas, ambas comparten el respirar. 
 - Esto te permite adaptarte a postgre, mysql, o la base que sea de manera agil.  
 - Le proveemos un DBH (DB Helper)

 Ejemplo de codigo  
 ```java
    ISqlSelectStatement stmt = new SqlSelectStatement(dbh);
    stmt.addField(new SqlField("BSOperacionItem",
            "TransaccionID"));
    ISqlFromClause from = new SqlFromClause("BSOperacionItem");
    stmt.setFromClause(from);
    ISqlWhere where = new SqlWhere();
    where.addCondition(new SqlTerm(new SqlField("BSOperacionItem","OperacionItemID"),
                    SqlConstants.IGUAL,
                    "4910", //variable siempre String
                    Types.INTEGER, // Tipo de dato del valor 
                    true),// Sentencias preparadas es algo medio complejo de SQL
            SqlConstants.AND);
    stmt.setWhere(where);

    ResultSet rs = dbh.executeResultSet(stmt.getStatement());
    if(!CommonFunctionsHLP.vacio(rs) && rs.next())
        transaccionID = rs.getLong("TransaccionID");

/*
SqlUpdateStatement, 
SqlSelectStatement stmt -> Segun el tipo de base de datos, cambia la sentencia (Oracle, SQL Server, etc)
                    -> SELECT

stmt.setLimitRows(10)   
stmt.setLimitType(SqlConstants.LIMIT_TOP)   -> Es un TOP 10                    

stmt.addField   -> Agrega los campos al select (SqlField)
                -> SELECT TransaccionID

SqlField(BASE DE DATOS, CAMPO) -> Devuelve un campo especifico

SqlFromClause from  -> Genera una instruccion FROM (BASE DE DATOS) suelta 

ISqlJoinClause join = new SqlJoinClause(
    TABLA 2,
    new SqlField("TABLA_1", "CAMPO1"),
    "INNER JOIN", // aca va "LEFT JOIN" de ser necesario
    new SqlField("TABLA_2", "CAMPO2")
)

// Tengo que agregar el join al from

from.addJoin(join)

stmt.setFromClause(from) -> SELECT TransaccionID FROM BSOperacionItem

ISqlWhere where  -> Genera una instruccion WHERE () suelta


where.addCondition  -> Completa la sentencia WHERE
    - SqlTerm
    - SqlField
                    ->  SELECT TransaccionID FROM BSOperacionItem
                        WHERE BSOperacionItem.OperacionItemID = 25

stmt.setWhere(where)    -> Agrego el where cocinadito al statement

stmt.getStatement   -> Parsea el statement a un String

*/
 ```
<hr>

## Clases importantes

### BSTransaccion

Guarda las transacciones

>FK
>>FAFEmpresa  
FAFTransaccionTipo  
FAFTransaccionSubtipo  
FAFTransaccionCategoria

<hr>

## Conceptos
### Stored Procedures

Es un conjunto de sentencias SQL.  
Hay algunos propios existentes:  

- EXEC sp_help
- EXEC sp_help 'Campo_Especifico'
- EXEC sp_rename 'Lais', 'Elio'

Puedo crear los mios propios  
1. Ubicarnos en la base de datos.
1. Abro query nuevo. Empiezo con sp el nombre
1. 
```sql
 CREATE PROCEDURE spNombre_Del_Stored_Procedure
 (
    @Parametro TIPO
    @Actividad VARCHAR(50)
 )
 AS

 BEGIN
    SELECT *
    FROM #Nombre_Tabla
    WHERE #Columna = @Parametro
END
 ```
4. Ejecuto el codigo para que se guarde en la base de datos
1. Refresh
1. _Programmability_ -> _Stored Procedures_
1. Aca tengo dos opciones para ejecutarlas:
    1. - Click der en el que quiero ejecutar -> _Execute Procedure_
        - Asigno un valor a la variable (o parametro)
    1. 
```sql
EXECUTE spNombre_Stored_Procedure 'Parametro'
 ```

 #### Otra opcion para crear un SP

 ```sql
 ALTER PROCEDURE [dbo].[USR_INFORME_10](@@transaccionID Int)
AS
BEGIN

Declare @ParametroVacio Int
Set @ParametroVacio = IsNull(@@transaccionID, 0)

SELECT BSTransaccion.TransaccionID, 'Documento'= FAFTransaccionSubtipo.Nombre,
BSTransaccion.Fecha, 'Empresa'=FAFEmpresa.Nombre, 'Transaccion'=BSTransaccion.Nombre,
BSOperacion.OrganizacionID, 'Organizacion'=BSOrganizacion.nombre,
BSOperacionItem.CantidadWorkflow, BSOperacionItem.Precio,
BSOperacionItem.Importe, BSOperacionItem.tipo,
BSOperacionItem.DepositoIDOrigen, BSOperacionItem.DepositoIDDestino
FROM BSTransaccion
INNER JOIN FAFEmpresa ON FAFEmpresa.EmpresaID = BSTransaccion.EmpresaID
INNER JOIN FAFTransaccionSubtipo ON FAFTransaccionSubtipo.TransaccionSubtipoID = BSTransaccion.TransaccionSubtipoID
INNER JOIN BSOperacion ON BSOperacion.TransaccionID = BSTransaccion.TransaccionID
LEFT JOIN BSOrganizacion ON BSOrganizacion.OrganizacionID = BSOperacion.OrganizacionID
LEFT JOIN BSOperacionItem ON BSOperacionItem.TransaccionID = BSoperacion.TransaccionID
LEFT JOIN BSProducto ON BSProducto.ProductoID = BSOperacionItem.ProductoID
WHERE @ParametroVacio = 0 OR BSTransaccion.TransaccionID = @@transaccionID

END
 ```

 <hr>

 ## Archivos importantes

 ### standalone.xml
> /home/finnegans/wildfly18/standalone/configuration

Con este archivo, el JBOSS entiende que bases de datos esta levantando.


Este es el bloque de codigo que hay que copiar y pegar para configurar una nueva base de datos.
```xml
<datasource jndi-name="java:/jboss/datasources/COMERCIALIZADORA" pool-name="COMERCIALIZADORA">
                    <connection-url>jdbc:jtds:sqlserver://localhost/FAF12_Comercializadora;tds=8.0;lastupdatecount=true</connection-url>
                    <driver>jtds</driver>
                    <transaction-isolation>TRANSACTION_READ_COMMITTED</transaction-isolation>
                    <pool>
                        <max-pool-size>50</max-pool-size>
                        <flush-strategy>EntirePool</flush-strategy>
                    </pool>
                    <security>
                        <user-name>sa</user-name>
                        <password>clave_2019</password>
                    </security>
                    <validation>
                        <check-valid-connection-sql>select 1</check-valid-connection-sql>
                        <validate-on-match>false</validate-on-match>
                        <background-validation>true</background-validation>
                        <background-validation-millis>10000</background-validation-millis>
                    </validation>
                    <timeout>
                        <set-tx-query-timeout>true</set-tx-query-timeout>
                        <idle-timeout-minutes>1</idle-timeout-minutes>
                        <query-timeout>120</query-timeout>
                    </timeout>
                    <statement>
                        <track-statements>false</track-statements>
                        <prepared-statement-cache-size>30</prepared-statement-cache-size>
                        <share-prepared-statements>true</share-prepared-statements>
                    </statement>
                </datasource>
```

Lo que tenemos que tocar es esto
```xml
<datasource jndi-name="java:/jboss/datasources/**BASE DE DATOS**" pool-name="**BASE DE DATOS**">
<connection-url>jdbc:jtds:sqlserver://localhost/FAF12_**NOMBRE_COMO_APARECE_EN_SQL**;tds=8.0;lastupdatecount=true</connection-url>
<timeout>
    <query_timeout> QUIZAS TOCARLO SI LO NECESITO


```

 ### fafconfigmodules.xml
> /FAFApps/

Se encarga de cargar los modulos de la base de datos que elija.

```xml
	<FAFEmpresa name="COMERCIALIZADORA">
		<!--<ModuleDependencie name="CAPACITACIONAPP"/>-->
		<ModuleDependencie name="TEAMPLACE"/>
		<ModuleDependencie name="ERPLIVE"/>
		<ModuleDependencie name="OPENFRAME"/>
		<!--<ModuleDependencie name="AGROLIVE" />-->
		<!--<ModuleDependencie name="MANUFACTURA" />-->
	</FAFEmpresa>
```

 ### fafconfig.xml
> /FAFApps/

Configuracion interna de la aplicacion.  
- El campo con __name__ lleva el espacio de trabajo .
- El campo __dsName__ lleva el nombre de la base de datos

```xml
		<atribute name="name" value="COMERCIALIZADORA"/> 
		<atribute name="dsName" value="COMERCIALIZADORA"/>    	
```

 ### fafmodules.alt.wildfly.xml
> /FAFApps/

Tiene varios modulos del STANDARD, no de servicios.

```xml
       <FAFModule moduleDeployOrder="**NUMERO SIGUIENTE**" moduleDeployVersion="6.1.32.26" name="**NOMBRE DEL MODULO**">
        <moduleDeployPath>/home/finnegans/workspace/NOMBREMODULO/Codigo/NOMBRECARPETAWeb</moduleDeployPath>
        <moduleBasePath>/FAFApps/**NOMBRE ACCESO DIRECTO**</moduleBasePath>
        <target>
            <warTarget deployDirectory="/home/finnegans/wildfly18/standalone/deployments/ERPWeb.war"/>
        </target>
    </FAFModule>
```
<hr>

## Modulos

### Generar un modulo propio

Pasos si no esta en FAFApps

1. En _workspace_ genero una carpeta _coto
1.  Voy a _bsuite_ y me copio las carpetas codigo (*App, *UI y *Web) , Resources y Scripts
    1. En _codigo_
        1. Renombro las carpetas a cotoApp, etc...
        1. En _CotoApp_
            1. Toco CTRL + H
            1. Borro todo menos src, lib, pom.xml, .classpath y .project
            1. En _src_ vacio la carpeta _app_
            1. En _.project_ -> cambio el name a CotoApp
            1. En pom.xml_ -> cambio el artifactID

        1. En _CotoAppUI_
            1. Dejo src, pom.xml, classpath y project
            1. Modifico el artifact en el pom
            1. En el .project lo mismo
            1. Solo dejo la carpeta _app_
            1. En _src/app/ui_ dejo solo una carpeta _form_ vacia

        1. En _CotoWeb_
            1. Dejo general y .project
            1. Modifico el .project
            1. En _general_ borro los js y dejo solo _forms_ vacia
        1. Voy al intelliJ -> Lo agrego al _pomGlobal.xml_
            ```xml
            <module>coto/Codigo/CotoApp</module>
            <module>coto/Codigo/CotoAppUI</module>
            <!-- <module>coto/Codigo/CotoWeb</module> LO COMENTO PORQUE NO TIENE POM-->
            ```
    
    1. En _Resources_ dejo _FAFApps_ y _Serializados_
        1. En _FAFApps_
            1. renombro ERPLIVE a COTO y dejo solo esa carpeta
                - Dejo vacias carpetas ApiJson, faf>Report, forms, reports
                - Dejo solo clasesHLP y clasesVO
                - En _ClasesHLP_ dejo solo de molde vacio
                ```xml 
                <fafClasses>
                    <!-- <fafClass>
                        <atribute name="name" value="BSUITECLIENTFUNCTIONS"/>
                        <atribute name="className" value="BSUITECLIENTFUNCTIONS"/>
                        <atribute name="FullClassName" value="app.bsuite.clientFunctions.BSuiteClientFunctions"/>
                    </fafClass> -->
                </fafClasses>
                ```
                - En ClasesVO dejo solo de molde vacio
                ```xml 
                <fafClasses>
                    <!-- <fafClass>
                        <atribute name="name" value="EMPRESABSUITEVO"/>
                        <atribute name="className" value="EMPRESABSUITEVO"/>
                        <atribute name="FullClassName" value="app.bsuite.configuracion.common.model.EmpresaBSuiteVO"/>
                    </fafClass> -->
                </fafClasses>
                ```
                1. Borro todos los otros archivitos
                1. Dejo y  vacio ApiJson, fafReport, forms, reports.
        1. En _Serializados_ la vacio
    1. En _Scripts_ dejo solo _informes_ vacia

1. Lo agrego en el archivo _fafmodules.alt.wildfly.xml_

1. Lo agrego en el archivo _fafconfigmodules.xml_

1. Quiero linkear coto/Resources/FAFApps/COTO en mi carpeta home/FAFApps
    1. voy a linea de comando, me paro en FAFApps  
        ```ln -sf /home/finnegans/workspace/coto/Resources/FAFApps/COTO COTO```  
        ln = link  
        -sf = soft
-----
-----
1. Si me clono un modulo, como MANUFACTURA, arranco desde el .3
------


<hr>

## DB Manager

Herramienta de Teamplace para manejar base de datos desde desde la App 

### Construir informes

1. Creo un SP

2. Creo una VIEWER y la defino como Dataset View  
    En _Diccionario de viewers -> Nuevo_

    - Solapa General
        - nombre: **Analisis de Operaciones** 
        - tipo de Presentacion: **Dataset View**
        - fuente de datos: **Nombre de la SP**
    - Solapa Parametros
        - Si tiene parametros la SP, completar
            - orden: 1
            - Nombre intero y titulo: *ComoSeLLame*
            - tipo Widget: Widget Numerico Long
            - tipo Java: Integer
            - Valor por defecto: 0
            - visible: true
    - Solapa Layouts  
        - Marco
            - grilla
            - cubo
            - grafico
            - tablero


3. Completo la fuente de datos con el nombre del SP

4. Completo los parametros


## patron MVC

>>> Usan el patron MODELO CABECERA DETALLE

>>> Se accede por getters y setters por si luego se agregan validaciones o logica de negocio en esos seteos

## Entidades

- **abstract EntidadVO** (MODELO. VO = Value Object)
    - **EntidadPrimariaVO** (cabecera)    
        _Ej: ClienteVO_  
        Es la entidad de donde heredan todos los componentes.
        - Propios
            - PK
            - Codigo
            - Activo
            - Nombre
            - Descripcion
        - Adicionales  
            - Me faltan ejemplos
    - **EntidadSecundariaVO** (detalle)  
        _Ej: ClienteCondicionesPagoVO_    
        _Ej: OperacionItemVO_  
        Serian los 'items' de las primarias  
        En una Factura, que es TransaccionVO como primaria, los items serian la Secundaria
    - **TransaccionVO**  
        _Ej: OperacionVO_  
        Son entidades con temporalidad. Puede ser Factura
    - **EntidadAdicionalVO**  
        Cuando un cliente quiere agregar alguna clase desde Teamplace SIN CODIGO
            1. Tipo: EntidadAdicional 
        Ej: como el ARSAT quiera agregar cohetes.
        - **AtributoVO** 
            - Propios
                - PK
                - Codigo
                - Activo
                - Nombre
                - Descripcion
     - **MirrorTable**  
        Es una entidadPrimaria sin atributos  

- **abstract EntidadHLP** (CONTROLADOR. HLP = Helper)  
    _Ej: ClienteHLP_
    - **TransaccionHLP**
        _Ej: OperacionHLP_
    
    
    Mezcla Servicio y Repo


- **FORM** (VISTA. HLP = Helper)  
    .js, .xml

 
### Pasos para crear una entidad PRIMARIA
- EN INTELLIJ 
    1. Voy a _app/NOMBRE_MODULO/configuracion_
    1. Creo lo siguiente:
    1. Creo lo siHLPiente:
        - _telefonica/controller/CelularHLP.java_
        - _telefonica/model/CelularVO.java_
    1. Copiar contenido de _PaisVO_ y _PaisHLP_ y tocar los siguiente:
        - CelularVO
        ```java
        super("CelularID", OBTables.TABLA_CELULARES, sessionID);

        // atributosPropios, son los de la super, y los propios todos juntos
                    atributosPropios.add(
                            new AtributoVO(
                                    100,//orden. Estaria deprecado. Va de 10 en 10
                                    OBTables.TABLA_CELULARES, // Nombre de la tabla
                                    "IMEI", //nombre fisico del campo de la tabla
                                    "IMEI",//nombre logico
                                    new FafString(100),//tipo de datos
                                    "", // valor default
                                    true,//si puede ser null. Parece que deberia ser true
                                    true,//si se pueden hacer busquedas sobre este campo
                                    true,
                                    false,
                                    "IMEI"));// nombre para el motor de scripting
        // Ejemplo de getters y setters
        public String getIMEI() {
            return (String) getValorAtributo("IMEI");
        }

        public void setIMEI(String valor) {
            setValorAtributo("IMEI", valor);
        }            


        ```
        - CelularHLP
            - Dejar los metodos
                - findByPrimaryKey()
                - getByPrimaryKey()
                - findByString()
                - findAll()
                - findAllDefault
                - getSelectorDescription()
                - update()
                - insert()
                - delete()
- En _/home/finnegans/workspace/onboarding/Resources/FAFApps/ONBOARDINGAPP_
    - En _/forms_:
        1. Creo _celular.xml_
        1. Uso como base _pais.xml_ (lo busco en _/home/finnegans/workspace/bsuite/Resources/FAFApps/ERPLIVE/forms_)
        1. Agrego mis propios atributos usando ese modelo.  Aca un ejemplo:
            ```xml
                <widget 
                    type="WidgetDate"
                    id="FechaFabricacion" 
                   serverAttribute="FechaFabricacion"//   = value 
                   serverAttribute="M_FechaFabricacion"//  Con esa M_ hago que pase por el getter y setter correpondiente

                    caption="Fecha de Fabricacion"/>
            ```
    - En _clasesHLP.xml_
        ```xml
            <fafClass>
                <atribute name="name" value="CELULARVO"/>
                <atribute name="className" value="CELULARVO"/>
                <atribute name="FullClassName" value="app.onboarding.configuracion.telefonica.controller.CelularHLP"/>
            </fafClass>
        ```
    - En _clasesVO.xml_
        ```xml
            <fafClass>
                <atribute name="name" value="CELULARVO"/>
                <atribute name="className" value="CELULARVO"/>
                <atribute name="FullClassName" value="app.onboarding.configuracion.telefonica.model.CelularVO"/>
            </fafClass>
        ```
- En AZURE DATA STUDIO
    1. Ejecuto estos scripts
        ```sql
        -- CREAR TABLA
        IF NOT exists(Select *
        From sysobjects
        where name = 'OBCelular' and xtype = 'U')
        BEGIN

            CREATE TABLE OBCelular
            (
                CelularID INT IDENTITY(1,1) NOT NULL,
                Nombre VARCHAR(255) NULL,
                Codigo VARCHAR(100) NOT NULL,
                Activo bit NULL,
                Descripcion VARCHAR(255) NULL,
                -- aca vienen los campos propios
                IMEI VARCHAR(255) NULL,
                FechaFabricacion DATETIME NULL,
                IsFoldable BIT NULL,
                MemoriaRAM INT NULL,
                OrganizacionID INT NULL        
            )

            ALTER TABLE OBCelular
                ADD CONSTRAINT XPKOBCelular
                PRIMARY KEY (CelularID)

            CREATE UNIQUE INDEX XUKOBCelular_Codigo 
            ON [OBCelular] ( Codigo ASC )


            ALTER TABLE OBCelular
            ADD CONSTRAINT OBCelular_OrganizacionID
                    FOREIGN KEY (OrganizacionID)
                                    REFERENCES BSOrganizacion

            CREATE INDEX XFKOBCelular_OrganizacionID ON OBCelular
            (
                OrganizacionID
            )

        END
        GO

        -- CREAR DICCIONARIO DE DATOS
        IF NOT EXISTS(SELECT *
        FROM FAFDiccionario
        WHERE Codigo = 'CELULAR')  
        BEGIN

            INSERT INTO FAFDiccionario
                (
                Nombre, Codigo, Activo, Descripcion, Tipo, DiccionarioIDPadre,
                NombreFisicoEntidad, NombreClase, OrigenDatos,
                SelectHelp, SelectGrid, SelectReport,
                Protegido, PermitirPrivados, AliasGenerationClass)
            SELECT
                'Celular', 'CELULAR', 1, '', 1, NULL,
                'OBCelular', 'CelularVO', OrigenDatos,
                'SELECT OBCelular.CelularID, OBCelular.Nombre FROM OBCelular WHERE ISNULL(Activo, 0) <> 0 ORDER BY OBCelular.Nombre',
                'SELECT OBCelular.CelularID, OBCelular.Nombre FROM OBCelular ORDER BY OBCelular.Nombre',
                'SELECT OBCelular.CelularID, OBCelular.Nombre FROM OBCelular ORDER BY OBCelular.Nombre',
                0, 0, ''
            FROM FAFDiccionario
            WHERE Codigo = 'INTEGRANTE'

        END  
        GO  

        -- ENTIDAD SECUNDARIA
        if not exists (select *
        from dbo.sysobjects
        where id = object_id(N'[dbo].[OBCelularItem]')
            and OBJECTPROPERTY(id, N'IsTable') = 1)
                    BEGIN
            Create Table OBCelularItem
            (
                CelularItemID int identity(1,1),
                CelularID int,
                -- atributos propios
                Jueguito VARCHAR(255) NULL,
                Conexion4G INT NULL
            )

                ALTER TABLE OBCelularItem
                        ADD CONSTRAINT XPKOBCelularItem
                        PRIMARY KEY (CelularItemID)

                ALTER TABLE OBCelularItem
                        ADD CONSTRAINT OBCelularItem_CelularID
                                FOREIGN KEY (CelularID)
                                                REFERENCES OBCelular

                CREATE INDEX XFKOBCelularItem_CelularID ON OBCelularItem (
                        CelularID
                    )

            END
                GO
        
        ```

### Creamos una entidad SECUNDARIA (aplicaciones, si fuera el celu)  
- Suelen terminar con _itemVO_
- Extiende de _EntidadSecundariaVO_
1. Creo _CelularItemVO_ en base a algun *itemVO
1. Pongo esto en el constructor
    ```xml
            super("CelularItemID",
                OBTables.TABLA_CELULAR_ITEM,
                sessionID,
                new ParentVO("CelularID",
                                OBTables.TABLA_CELULAR_ITEM,
                        "CelularID"));

        try {
            atributosPropios.add(new AtributoVO(
                    60,
                    "CelularID",
                    "CelularID",
                    new FafLong(),
                    null,
                    true,
                    true,
                    true));

                // y sus atributos de Jueguit y Conexion4G
    ```
    - Aca la foreign key se define como un atributo
1. No se suele hacer un HLP
1. El hijo ya sabe que tiene un padre. Ahora ahy que decirle al padre que tiene un hijo
    - Agrego esto a _CelularVO_
        ```xml
                    atributosPropios.add(new AtributoVO(
                    "CelularItems",
                                new CelularItemVO(sessionID)
            ));
        ```
1. Voy a _celular.xml_ y agrego:
    ```xml
			<layout type="row">
				<widget type="WidgetLine" id="CelularItems" caption="This is an Entidad Secundaria" serverAttribute="CelularItems" pk="1">
					<columns>
						<col serverAttribute="Jueguito" caption="Jueguito" width="100" />
						<col serverAttribute="Conexion4G" caption="Conexion4G" width="100" />
					</columns>
					<form name="WidgetLineEditForm_CelularItems" widgetWidths="300">
						<layout type="row" widgetWidths="200">
							<widget type="WidgetTextBox" id="Jueguito" caption="aca va un Jueguito" serverAttribute="Jueguito" />
							<widget type="WidgetTextBox" id="Conexion4G" caption="aca van lo GB que compremos de 4G" serverAttribute="Conexion4G" />
						</layout>
					</form>
				</widget>
			</layout>
    ```
1. Agrego este metodo en _CelularHLP_ para que persista los Items


### PK  
    NombreObjetoID = 
    < a -2 --> Son las default
    > a 1 --> las creadas por nosotros

Persistencia:  
- querybuilder  
- dbhelper

## VIEWERS

- Los metodos mas comunes para crearlos son:
    - Metodo
    - SP

### Tipos de Viewers

- DatasetView  (Transacciones, Informes, Planillas google)
- Maestro
    - General
        - Tipo de presentacion: Maestro
        - Modo: Diccionario
        - Fuente de datos: ClienteHLP.findAllDefault
    - DataSetView:
        - Tipo : Entidad
    - Maestro: 
        - Diccionario datos: Cliente
        - Importacion finntalk: Cliente(automatico)
- Tablero
    - Son esos informes mixtos, tablas y graficos
- Indicadores
- Entidad Adicional
- Internal Link
- External Link


### Overview

#### **General**

- Clase vo  
    Es la entidad asociada a esa viewer para abrir el registro

- Clase facade  
    Clase de comunicacion necesaria entre la view y el servidor

- Xml de formulario  
    Es el xml que usa la entidad par amostrarse, toma un default

#### **Parametro**  

Se completa con los datos de los parametros del SP o metodo.  
Si es un SELECTOR, el diccionario que traiga los datos

#### **Reportes**  
Es para archivos JASPER  

#### **DataSetView**  
- Tipo: Otros (para un informe)  
- Tipo: Transaccion  
- Accion por defecto: Layout que elija 

#### **Layouts**  

Marcar los primeros 4 layouts

#### __Sus formatos relacionados__

## Formularios  
- Se componen de _Widgets_ (inputs)

### PARA MAESTRO
1. En las viewers, Voy a _ver view_ tabla asociada
1. Voy a _Administrar_
1. _Formato_ -> _Edicion Manual_  
Esto me muestra el XML del formulario

1. OTRA OPCION
- _pestania FORMATOS_

### WIDGET  
Componente para mostrar y editar datos

### XML
```xml
<form
    javaClass="CLASE JAVA asociada"
    jsHandler = "JS asociado"
    widgetWidths="ANCHO DEFAULT DE WIDGETS"
    captionWidths="ANCHO DEFAULT CAPTIONS">
    
<tabs> -> solapas
<layout> -> contenedor
<widget 
    type="WidgetTextbox" 
    id="" 
    serverAttribute=(NAME) 
    caption="REFE"/> -> Input
```

# APIS

1. Ir al archivo AuthManager.java

2. Reemplazar la URL DEBUG en el BASE

    private static String REAL_API_URL = Parameters.getServerParameter(API_BASE_URL_PARAM, "https://api.teamplace.finneg.com/api");
    private static String DEBUG_API_URL = Parameters.getServerParameter(API_BASE_URL_DEBUG_PARAM, "http://localhost:5000/api");

3. en FAFApps/fafServer.alt.wildfly.xml_
agregar esta linea

``` xml
<!-- Para debbug API -->
		<atribute name="API_BASE_URL_DEBUG" value="https://api-dev.finneg.com/api"/>
```

4. Ir a una base, Seguridad -> Usuarios -> _Administrador o Supervisor_ ->  sacar las Keys APi

5. Obtener TOKEN  
    Pegarle GET a este link y colocar aca el usuario y password del .4 

> http://localhost:8080/BSA/api/oauth/token?grant_type=client_credentials&client_id={{clientId}}&client_secret={{clientSecret}}

6. Peticion
    Usar el token obtenido para pegarle a este endpoint
    La URL la sacamos de
        _Diccionario de Apis_

        Para ANALISISPEDIDOSVENTAAPI es
        http://localhost:8080/BSA/api/reports/ANALISISPEDIDOSVENTAAPI

    La URL + el query param del token quedan algo asi como 
    > http://localhost:8080/BSA/api/reports/ANALISISPEDIDOSVENTAAPI?ACCESS_TOKEN={{tokenApi}}
