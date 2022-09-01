package JAVA_en_general;
import clasesutilidad.ZAuto;
import java.util.Scanner;

public class JAVA_en_general {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);

        /* 
        HISTORIA

        James Gosling en 1996
         */
        
// VARIOS

    // Java le asigna un valor inicial a todo
    // los atributos que apunta a un objeto: NULL.
    // Si es numerico: 0;
    // si es boolean: false;

    /* 
     ESTRUCTURA DESDE EL JDK
     JDK  --> JRE(Coleccion de herramientas. Contiene al JVM) --> JVM(Lee el Java ByteCode. O sea, los archivos.class ya compilados)
          --> Compilador java
          --> API de java
        Dos opciones:
            Open JDK
            JDK Oracle (pago). Se usa para produccion

    
    !importante! Desde la version 11 de JAVA ya no existe el JRE
     */
    
    
    //--------------------------------------------------------------
    
    // cuando creo una variable de tipo CLASE (ZAuto, por ejemplo)
    // y le asigno una instancia ya creada
    // AMBAS referencian al mismo objeto!!
    
    ZAuto autito = new ZAuto("NEM613","Renault", 1000000, "Gris");
    
    ZAuto nuevoAuto = autito;
    // AHORA TENGO DOS FORMAS DE REFERIRME A AUTITO!!!!
        
        // el color era rojo
        System.out.println(autito.color);
        
        nuevoAuto.color = "negro";
        
        // ahora desde nuevoAuto cambie el color original!
        System.out.println(autito.color);

    }
    
    //--------------------------------------------------------------

}
