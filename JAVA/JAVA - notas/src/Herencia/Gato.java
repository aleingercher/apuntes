package Herencia;

public class Gato extends Mascota{
    private Boolean castrado;
    private Boolean cola;
    private String raza;

    public Gato(Boolean castrado, Boolean cola, String raza, String nombre, String color, Integer edad) {
        super(nombre, color, edad);
        this.castrado = castrado;
        this.cola = cola;
        this.raza = raza;
    }

// el toString lo genera sin los atributos traidos de la SUPERCLASE
    @Override
    public String toString() {
        return "Gato{" + "castrado=" + castrado + ", cola=" + cola + ", raza=" + raza + '}';
    } 
}
