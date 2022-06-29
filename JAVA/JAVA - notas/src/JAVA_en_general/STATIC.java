package JAVA_en_general;
import clasesutilidad.ZAuto;
import java.util.Scanner;

class STATIC {
    /* Los metodos STATIC no se declaran sobre objetos. Pertenecen a la clase
     O sea, no puedo hacer ale.subirNota(). Deberia ser Alumno.subirNota();
     el STATIC y el THIS no se llevan bien*/
    
    /* como el metodo MAIN es STATIC, no puedo crear metodos de INSTANCIA 
        dentro que no sean TAMBIEN ESTATICOS */

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        
        ZAuto a1 = new ZAuto("NEM613","Renault", 1000000, "Gris");
        ZAuto a2 = new ZAuto("GCZ952","Ford", 900000, "Negro");
        ZAuto a3 = new ZAuto("ALE123","Ford", 1500000, "Rojo");
        ZAuto a4 = new ZAuto("AZU202","Chevrolet", 1000700, "Rosa");
        
        System.out.println(a2.toString());
        
        System.out.println(a1.precioPromocional());
        System.out.println(a2.precioPromocional());
        System.out.println(a3.precioPromocional());
        System.out.println(a4.precioPromocional());
        
        // aunque use el metodo en una instancia, igual se cambia
        // un atributo STATIC para toda la clase.
        a1.anularDescuento(); // comentar esta linea para anular este metodo mal hecho
        
        System.out.println(a1.precioPromocional());
        System.out.println(a2.precioPromocional());
        System.out.println(a3.precioPromocional());
        System.out.println(a4.precioPromocional());
        
        // es mejor con este metodo STATIC
        ZAuto.anularDescuentoSTATIC();

    }
 
}

// CLASE donde voy a generar un atributo STATIC
class Empleados {
    
    private final String nombre;
        
    private int Id;
    
    // Puedo hacer STATIC un atributo de una clase para que la compartan TODAS las instancias
    // Ningun objeto tendra su propia copia de IdSiguiente. Cada uno heredara el valor actual
    private static int IdSiguiente = 1;

// CONSTRUCTOR
    public Empleados(String nombre) {
        this.nombre = nombre;
        // Id toma el valor de IdSiguiente
        Id = IdSiguiente;
        // Y luego aumenta en 1. Como es STATIC, el proximo objeto que instancie, tendra como
        // valor de IdSiguiente un 2... Y asi van aumentando.
        IdSiguiente++;
    }
    
// le creo un METODO STATIC.
    
    
    public static String dameIdSiguiente(){
        return "El Id siguiente es: " + IdSiguiente;
    }
    
}