package POO_teoria;

import JAVA_en_general.ENUM;
import java.util.ArrayList;
import java.util.List;

public class ApuntesPOO {

    public static void main(final String... args) {
        
/*  
    ********** POLIMORFISMO ******************  
        Se refiere a cuando definimos un metodo ruido() en la clase Mascota, y la sobreescribimos
        en la clase Perro y Gato. En ambas podemos llamar Perro.ruido() y Gato.ruido() y devolveran algo 
        diferente luego de sobreescribirlas.
        
        
   ********** RELACIONES entre clases ******************
        
        Se representa en codigo con ATRIBUTOS objetos de la clase relacionada
        Al final de la linea que los une, se aclara la cantidad de relacion:
            uno a uno       1...1
            uno a muchos    1...*
            muchos a uno    *...1
            muchos a muchos *...*
        
        
  *  DEPENDENCIA (la mas debil de las relaciones)
        Representacion: Linea punteada, punta flecha
            Ventana ...........> EventoCerrarVentana
        
        
  *  ASOCIACION SIMPLE
        Es cuando una clase USA la otra. --> un programador USA una computadora
        Cuando asociamos objetos en vez de clases, se llama ENLACE
        Una asociacion es una conexión semántica entre clases.
        Se relacionan mediante atributos.
        Representacion de relacion de uso: Linea solida, punta flecha
                    ______________>     
    
        Pueden ser:
            bidireccional   padre <______> hijo
            unidireccional  curso _______> alumno
        
        Una CLASE ASOCIACION es una asociación —con métodos y atributos— que es también una clase normal.
        La clase asociación se representa con una línea punteada que la conecta a la asociación que representa.
                         Futbolista    ___________  Liga futbol
                                            .
                                            .
                                            .
                                        EquipoFutbol (Clase asociacion)
  * AGREGACION
        Cuando una clase TIENE a otra ---> un cliente TIENE un CBU.
        Cuando se elimina una parte, la parte restante sigue teniendo sentido.
            Representacion: Rombo vacio, linea solida, punta flecha
                    computadora    <>_______TIENE_a________>    teclado

        Cuando es de uno a muchos, se representa con una LISTA en la clase.
        Indican propiedad o pertenencia.
        Representan muchos objetos que forman parte de otro objeto  --> MUCHOS usuarios son de UNA zona
        NO se instancia a B dentro de A
    
  * COMPOSICION
        Cuando una clase ES PARTE de otra
        Si borro el cliente, el CBU no tiene sentido
            Representacion: Rombo LLENO, linea solida, punta flecha
                    patas  <______ES_PARTE DE_____ROMBOLLENO   mesa

        Es mas fuerte que la agregacion, porque sus elementos dependen entre si.
    
  * 
        
        
   */


        
       /* EJEMPLO DE RELACION ENTRE UN PERRO Y MUCHAS PULGAS */

        // creo una instancia de perro
        Perro firulais = new Perro();
        
        // ahora un array vacio de pulgas
        ArrayList<Pulga> listaDePulgas = new ArrayList();
        
        // agrego pulgas usando el constructor de Pulga
        listaDePulgas.add(new Pulga("Messi"));
        listaDePulgas.add(new Pulga("Riquelme"));
        
        // agrego de otra forma. A java no le interesa este nombre. Se va a agregar solo el atributo
        Pulga pulguita = new Pulga("Fer");
        listaDePulgas.add(pulguita);
        
        // despues de llenarla, la guardo en la lista dentro de Perro
        firulais.setListaDePulgas(listaDePulgas);
        
        
    }
}

class Perro {

    private String nombre;
    private String raza;
    private ENUM razaENUM;

    private ArrayList<Pulga> listaDePulgas; // al tener muchas pulgas, hago una lista de elementos de tipo Pulga

    public Perro() {
    }

    public Perro(String nombre, String raza, ArrayList<Pulga> listaDePulgas) {
        this.nombre = nombre;
        this.raza = raza;
        this.razaENUM = razaENUM.PITBULL; // aca le pongo un valor default
        this.listaDePulgas = listaDePulgas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public List<Pulga> getListaDePulgas() {
        return listaDePulgas;
    }

    public void setListaDePulgas(ArrayList<Pulga> listaDePulgas) {
        this.listaDePulgas = listaDePulgas;
    }

}

class Pulga {

    private String nombre;

    public Pulga() {
    }

    public Pulga(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
}
