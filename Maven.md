# MAVEN

## Comandos

Este comando la union de un Super POM y nuestro POM normal
```
mvn help:effective-pom -Doutput=effective-pom.xml
```
<br>
Ver uta del repositories y otros settings
```
mvn help:effective-settings
```

## Parametros
se pasan asi
```
mvn -D(nombre del parametro)=(valor)
```



## Excluir una dependencia transitiva

``` xml
// en la dependencia correspondiente
<exclusions>
    <exclusion>
        <groupId>org.jboss.logging</groupId>
        <artifactId>jboss-logging</artifactId>
    </exclusion>
</exclusions>
```

## Hacer que una dependencia se compile solo cuando hago test, por ejemplo

``` xml
// en la dependencia correspondiente

 // default
<scope>compile</scope>
// solo disponible para test
<scope>test</scope>
// no disponible para compile
<scope>runtime</scope>
<scope>provided</scope>
```

## Versiones
- Si va vacio, instala la ultima disponible
``` xml
// rango de versiones

// incluido 4.5
<version>[4.1, 4.5]</version>

// Excluido 4.5
<version>[4.1, 4.5)</version>
```