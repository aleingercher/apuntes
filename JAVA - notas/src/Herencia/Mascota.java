package Herencia;

// clase PADRE
public class Mascota{
// uso PROTECTED porque tengo que usar sus propiededes en otras clases
    protected String nombre;
    protected String color;
    protected Integer edad;
    
// cuando genero un metodo en la clase Padre, tambien lo heredan los hijos
    public void ruido(){
        System.out.println("Ruido de animal");
    }

    public Mascota() {
    }

    public Mascota(String nombre, String color, Integer edad) {
        this.nombre = nombre;
        this.color = color;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

}
