package Herencia;

// las clases HIJAS usan el extends para IMPORTAR propiedades de la clase padre
public class Hamster extends Mascota {

    private Boolean castrado;
    private Boolean cola;

// cuando sobreescribo un metodo en la clase HIJA, tengo que usar el @override
// El ruido que hace cada animal es unico. por eso hay que sobreescribirlo
    @Override
    public void ruido() {
// puedo invocar al metodo original, y extenderlo:   
        super.ruido();
// Luego le agrego la funcionalidad unica del hamster
        System.out.println("cui cui");
    }

// uso el ALT INSERT para crear el constructor
    public Hamster(Boolean castrado, Boolean cola, String nombre, String color, Integer edad) {

// el SUPER sirve para traer constructores, atributos o metodos de la clase PADRE
        super(nombre, color, edad);
        this.castrado = castrado;
        this.cola = cola;
    }

    public Hamster() {
    }
    
    

}