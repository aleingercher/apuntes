package JAVA_en_general;
import clasesutilidad.ZAuto;
import java.util.Scanner;

public class JAVA_en_general {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        
// VARIOS

    // Java le asigna un valor inicial a todo
    // los atributos que apunta a un objeto: NULL.
    // Si es numerico: 0;
    // si es boolean: false;
    
    
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
