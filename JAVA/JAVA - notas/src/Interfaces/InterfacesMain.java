package Interfaces;

public interface InterfacesMain {
   /* 
*****************
   INTERFACES 
*****************    
    
    Es una clase que contiene:
        . Atributos constantes (final)
        . Metodos abstractos. (se declaran como abstractos, pero sin el abstract)
    
    Se llama utilizando la palabra clave:
        . implements
        
    >
    * En la API de java, figuran en cursiva.
    * Fuerza a la clase que la implementa a usar sus metodos, ya que sus metodos son abstractos.    
    * Se almacenan en ficheros .class
    * No se pueden instanciar (con el new)
    * Todos sus metodos son public y abstract.
    * No tienen variables, si constantes.
    
    La principal diferencia entre interface y abstract
    es que una interface proporciona un mecanismo de encapsulación de los métodos sin forzar
    a la utilización de una herencia.
    
    */
    
    final double pi = 3.14;
    
    // este es el metodo abstracto!
    void metodoParaModificar();


}
