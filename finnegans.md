# FINNEGANS

Tres capas ( o  WORKINGSET) que comparten todas las verticales

- bsuite (ERP) -> es lo mas habitual
- teamplace (la parte social)
- openframe (rara vez se toca)

Luego tienen modulos personalizados.

Todas las capas tienen diferentes modulos dentr

## BSUITE

- **i18n**    
Es la capa que se encarga de la internacionalizacion

## Compilacion

- Compilamos los de codigo Java
    1. Voy a la consola levanto DOCKER
        - ```sudo docker start mssql```
    1. Levanto JBOSS
        - Voy arriba a la der, veo que este levantado el JBOSS, y toco en debug
    1. Abro la aplicacion http://localhost:8080/BSA/
        - Nombre: "Supervisor"
        - Empresa: la que necesite (ej: COMERCIALIZADORA)
    1. Levanto MSSQL (ver USO DE BASE DE DATOS CON DOCKER)
        1. Descomprimo la base en /mssql
        1. Navego a la carpeta /mssql
        1. Le doy los permisos
            - ```sudo chmod 777 NOMBRE_BASE```
        1. Voy a Azure y la restauro
            1. Restore from BackupFile
            1. Selecciono el .bak
        1. Blanqueo la base de datos 
            - Apenas restauro la base, corro el [script](https://gitlab.finneg.com/erp/bsuite/-/wikis/Script%20restauracion%20de%20bases)
    1. Voy y toco el _fafconfig.xml_
        - Copio y pego el modulo y modifico _name_ y _dsName
    1. voy a _fafmodules.xml_
        1. Tengo que saber con que modulos labura el cliente. Para eso voy a https://qa.teamplace.finneg.com/BSA/ -> AppBuilder -> Modulos Instalados
        1. Los agrego en este orden, de mas especifico, y mas abajo, van los modulos comunes.
    1. Voy a _standalone.xml_
        1. Agrego un nuevo datasource.
    1. Voy al  _fafmodules.alt.wildfly.xml_. Lo toco solo si es necesario
        1. Voy abajo de todo, y lo agrego con el numero siguiente
    1. Abro el IntelliJ
    1. Vamos a la derecha, abrimos Maven
    1. Abrimos cada proyecto que queremos compilar
    1. proyecto -> Lifecycle -> clean and install
    (En intelliJ no anda el pom global)
    1. Levanto el servidor en DEBUG
    1. Ingreso al local -> http://localhost:8080/BSA

## Pasos cuando llega un caso

1. Llega la base de datos
1. La extraigo en _mssql_
1. dar permisos en /mssql
1. Restaurar en Azure

## Conceptos generales

### Clasificacion de Tipos de documentos

#### Tipos de documento -> Categorias -> Documento
#### FAFTransaccionTipo -> FAFTransaccionCategoria -> FAFTransaccionSubtipo

### Camino feliz

1. Hago una transaccion  
_BSTransaccion_  (__PK__ TransaccionID)
Si es una operacion <-> _BSOperacion_ <-> _BSOrganizacion_ (Si es Venta=cliente, Compra=proveedor)  
Cada Operacion, se asocia a un <-> _BSOperacionItem_ <-> _BSPRoducto_

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
SqlSelectStatement stmt -> Segun el tipo de base de datos, cambia la sentencia (Oracle, SQL Server, etc)
                    -> SELECT

stmt.addField   -> Agrega los campos al select (SqlField)
                -> SELECT TransaccionID

SqlField(BASE DE DATOS, CAMPO) -> Devuelve un campo especifico

SqlFromClause from  -> Genera una instruccion FROM (BASE DE DATOS) suelta                

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
        <moduleDeployPath>/home/finnegans/workspace/capacitacion/Codigo/CapacitacionWeb</moduleDeployPath>
        <moduleBasePath>/FAFApps/**NOMBRE ACCESO DIRECTO**</moduleBasePath>
        <target>
            <warTarget deployDirectory="/home/finnegans/wildfly18/standalone/deployments/ERPWeb.war"/>
        </target>
    </FAFModule>
```

## Modulos

