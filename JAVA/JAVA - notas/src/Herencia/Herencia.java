package Herencia;

/* 
**************************************
   HERENCIA (o GENERALIZACION en UML)
**************************************

    Es cuando una clase ES otra. ---> un gato ES un animal
        Representacion: linea solida, flecha hueca
                A    ______ES________|>    B
        
    Hay una clase padre (o SUPERCLASE) y clases hijas (SUBCLASES).
        
    Puede ser:
        UNICA       padre --> hijo
        MULTINIVEL  abuelo --> padre --> hijo
        JERARQUICA  padre --> MUCHOS hijos
        MULTIPLE    padre + interfaces --> hijo

    Pueden heredar atributos y metodos de su clase padre.
    Cuando quiero modificar un metodo, sea porque es abstracto o porque necesito hacerlo,
    debo usar el @override para sobreescribirlo.
    Las relaciones de generalización no tienen nombre ni ningun tipo de multiplicidad.
    La direccion de ESPECIALIZACION va en direccion opuesta a generalizacion .

    Puedo hacer listas de Mascotas que contengan Perros y Gatos por ejemplo. Ambos son mascotas.
    
    Palabras claves!!!!!!:
        extends : Sirve para decir que una clase es la extension de su clase padre.
        super : Sirve para traer atributos o metodos del padre dentro de las clases hijas.
                . Para llamar en el constructor:
                    super();
                . Para heredar metodos:
                    super.nombreMetodo();

        protected : Las clases padre deben declarar sus atributos como protected para que sus
                    hijas puedan acceder a sus atributos sin set y get.

        abstract :
                              *********** 
            Puedo crear clases ABSTRACTAS
                              ************ 
            . No pueden ser instanciadas
            . Se declaran:
                public abstract class Mascota(){}

!!!!!!!. Un metodo abstracto solo puede estar en una clase abstracta

            . Los metodos ABSTRACTOS no llevan cuerpo ni llaves. Solo los declaro para que los hijos lo definan
                . La Mascota tendra un metodo abstracto ruido:
                    public abstract void ruido();
                  Esta OBLIGA a los hijos (perro, gato) a definirlo

 */

// para saber si un elemento es una instancia de una clase:

 boolean esPerro = perro1 instanceof Perro;

public class Herencia {

    // CONSTRUCTORES
    // GETTERS / SETTERS
}


