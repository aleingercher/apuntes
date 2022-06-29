package clasesutilidad;

public class ZAuto {
    
    String patente;
    String marca;
    double precio;
    public String color = "rojo";
    
    // la declaro STATIC para que sea de la clase
    // Ahora no tengo que instanciarla para CADA OBJETO
    // Si algun objeto la modifica, se modifica para TODOS
    private static double descuento;
    
    

    // CONSTRUCTORES
    public ZAuto(String patente, String marca, double precio, String color) {
        this.patente = patente;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
        
        // a los atributos STATIC, los construyo con CLASE.atributo
        ZAuto.descuento = 10;
    }

    // GETTERS / SETTERS

    
    @Override
    public String toString() {
        return "Auto{\n" + "patente = " + patente + ",\n marca = " + marca + ",\n precio = " + precio + ",\n color = " + color + "\n}\n";
    }
       
    
    // hago un METODO STATIC
    public double precioPromocional(){
        return this.precio - this.precio * ZAuto.descuento / 100;
    }
    
    // si usara un metodo de INSTANCIA, a un atributo STATIC
    // lo cambio para TODA LA CLASE
    public void anularDescuento(){
        ZAuto.descuento = 0;
    }
    
    // lo mejor es declararlo STATIC ya que modifica un atributo estatico
    public static void anularDescuentoSTATIC(){
        ZAuto.descuento = 0;
    }

 
}
