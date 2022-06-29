package ColeccionesUtilidad;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.TreeMap;
import java.util.TreeSet;

public class Colecciones {
//    para crear una ArrayList como atributo, tengo que usar el constructor:
//          private ArrayList<CLASE> lista = new ArrayList();
//    NO se pueden hacer colecciones de TIPOS PRIMITIVOS
//    Son parte del Java Collections Framework dentro del paquete java.util.
//    El Collections Framework es una arquitectura compuesta de interfaces y clases.
    
    public static void main(String[] args) {  
    
/*  ***********************************************************************************
                             LISTAS o LIST
    ***********************************************************************************
    Tiene tamanio variable.
    Se pueden repetir elementos en la lista. (Poner dos veces Gaston por ejemplo)
    Estan ORDENADOS por posicion
    Se declara el tipo ahi: <TIPO>
    Un solo tipo de elemento en la lista.
    ----------------
       Arraylist
    ----------------    
      Es una lista de simple enlace.*/
    ArrayList<String> nombreList = new ArrayList<>();
    
//    ----------------
//       LinkedList
//    ----------------   
//      Es una lista de doble enlace. Es mejor para quitar o agregar, pero peor en get y set.
    LinkedList<Integer> nombreLinked = new LinkedList();
    
//      AGREGAR ELEMENTOS a LIST de tipo numero o string:
    nombreList.add("gaston");
    nombreList.add("fer");
    nombreList.add("santi");
    
    
//     para AGREGAR OBJETOS a un TREEset o TREEmap
//  siendo colecciones que se ordenan a si mismas, primero debemos informarle como va a ordenarse.
//  Para esto utilizamos un
//    ------------------------------------
//      COMPARATOR. Es una interfaz que tiene la funcion 
//      compareTo para llamar en la clase entidad.
//      Inicialmente cubre las clases conocidas, pero cuando creo una nueva, tengo que crear un Comparator
//      Se utiliza en una de las formas del sort(LISTA_A_ORDENAR, COMPARATOR)
//      NO RETORNA NADA. No puedo guardar el Colecctions.sort sarasa dentro de un array.
/* 
        Hago un metodo estatico con el nombre de lo que comparo. que devuelve un Comparator con el tipo de la clase creada.
        Lo hago estatico para no tener que crear un objeto cada vez que tengo que comparar.
        Adentro creo un metodo compare y le hago un Override al que esta por defecto
        Utilizando el compareTo, comparo los atributos que desee, como la edad por ejemplo.
        Este devuelve 0 si la edad es la misma, 1 si la primera edad es mayor a la segunda y -1 si la primera edad es menor a la segunda. 
*/

//         dentro de Public Class Perro
    //         public static Comparator<Perro> compararEdad = new Comparator<Perro>() {
    //         @Override  
    //             public int compare(Perro p1, Perro p2) {
    //             return p2.getEdad().compareTo(p1.getEdad());
    //                                  // el orden de estos elementos, hace si se ordena ascendente o descendente.
    //                                  // si pongo el p2.compareTo(p1), lo va a hacer descendente
    //             }
    //         };
    
    // Luego lo llamo desde el MAIN como parametro del sort
    nombres.sort(Alumno.compararDni);
    
//     
//    ------------------------------------
    
    
//      MOSTRAR LIST de strings o numeros . Se usa el foreach
    nombreList.forEach((nombre) -> {
        System.out.println(nombre);
    });
    
//    o
    for (String nombre : nombreList) {
        System.out.println(nombre);
    }
    
    
//      para MOSTRAR LISTAS de OBJETOS
//      debemos sobreescribir el toString en la clase entidad:
    //        @Override
    //         public String toString() {
    //         return "Libro{" + "titulo=" + titulo + '}';
    //         }
    
//      se va a llamar solo cuando hagamos el system.out.println
    

//      BORRAR ELEMENTOS de LIST con ITERATOR:
//  Con un foreach hace bardo, asi que mejor usar un iterator.
//  Primero instancio un iterator
        Iterator<String> itList = nombreList.iterator();
        
//  Luego recorro con un while
//  El hasNext pregunta si hay un elemento mas para recorrer
        while (itList.hasNext()) {
            String nombre = (String) itList.next();
            if(nombre.equals("fer")){
                itList.remove();
            }
        }
        
//      ORDENAR LISTA ascendente
//      recordemos que los TreeSet y TreeMap se ordenan por si mismos.
//      y los Hash se ordenan por elementos. No saben usar el sort.
    Collections.sort(nombreList);
    
//              usando el COMPARATOR para ordenar, lo paso como parametro del sort
    perrosLista.sort(Perro.compararEdad);
        
//      TAMAÑO de LIST o SET:
    nombreList.size();
    
//      preguntar si esta VACIA:
    nombreList.isEmpty(); // devuelve un booleano
    
//      GET o devolver elemento de una LIST:
    nombreList.get(1); // Traera el el nombre del elemento.
    

    
    
//    *******************************************************************
//                           CONJUNTOS o SETs
//    *******************************************************************
//    No se pueden repetir elementos.
//    ----------------
//         TreeSet
//    ----------------    
//    Se ordenan de forma ascendente automaticamente por orden alfabetico o numerico.
//    Usa una estructura de arbol. (árbol rojo-negro en el libro de algoritmos).
//    Sus métodos de agregar, eliminar son más lentos que el HashSet ya que cada vez que le entra un
//    elemento debe posicionarlo para que quede ordenado.
    TreeSet<String> nombreTree = new TreeSet<>();

//    ----------------
//       HashSet
//    ----------------
//      Usa una tabla hash
//      Los ordena automaticamente de acuerdo a su implementacion
//      Los métodos de agregar y eliminar tienen una complejidad de tiempo constante
//      por lo que tienen mejor performance que el Treeset.

    HashSet<String> nombreHashSet = new HashSet();      
    
    
//    ----------------
//      LinkedHashSet
//    ----------------
//      está entre HashSet y TreeSet.

    LinkedHashSet<String> frasesLinkedHashSet = new LinkedHashSet();  
    
    
//      AGREGAR ELEMENTOS a SET:
    nombreTree.add("gaston");
    nombreTree.add("fer");
    nombreTree.add("santi");
    
//      MOSTRAR SET . Se usa el foreach
    nombreTree.forEach((nombre) -> {
        System.out.println(nombre);
    });
    
//      ORDENAR SET ascendente
    //Se convierte el HashSet a Lista.
    ArrayList<Integer> numerosLista = new ArrayList(nombreHashSet);
    Collections.sort(numerosLista);
    
    //  usando el COMPARATOR para ordenar,Primero paso el SET a ARRAYLIST, luego lo hago como una list
    ArrayList<Perro> perrosLista = new ArrayList(perrosSet);
    perrosLista.sort(Perro.compararEdad);
    
    
    // un TREESET se crea pasandole el comparator como parametro en el constructor
    TreeSet<Perro> perros = new TreeSet(Perro.compararEdad);
    Perro perro = new Perro();
    perros.add(perro);
    
    
//    ***********************************************************************************
//                                       MAPAS o MAP
//    ***********************************************************************************
//    Las implementaciones de mapas son HashMap, TreeMap, LinkedHashMap y HashTable
//    Funcionan con pares KEY, VALUE. No funciona con posiciones.
//    Las KEY serian como ID unicos de cada VALUE.

//    ----------------
//         HashMap
//    ---------------- 
//    No se usa tanto ya, al funcionar tan bien las bases de datos actuales.
//    Se declara HashMap<TipoKEY, TipoVALUE> 
//    Las llaves se almacenan utilizando un algoritmo de hash para las llaves y evitar que se repitan.
    
    HashMap<Integer, String> nombreMap = new HashMap<>();
    
//    ----------------
//         TreeMap
//    ----------------
//    Es un mapa que ordena de manera ascendente las llaves.

    TreeMap<Integer,String> personas = new TreeMap();

//    ----------------
//      LinkedHashMap
//    ----------------
//    Es un HashMap que conserva el orden de inserción.

    LinkedHashMap<Integer,String> personasLHM = new LinkedHashMap();
    
//      PREGUNTAR SI ESTA VACIO UN MAP:
        personas.isEmpty();
    
//      BUSCAR ELEMENTOS EN MAP:
        // es mas simple. Usamos solo el get con el valor del KEY
        personas.get("Alejandro"); // esto devuelve el value asociado al KEY Alejandro 
    
    
//      AGREGAR ELEMENTOS a MAP:

//      El PUT se usa tambien para REEMPLAZAR un objeto existente porque NO PUEDE HABER KEYS DUPLICADAS
        nombreMap.put(0,"gaston");
        nombreMap.put(1,"fer");
        nombreMap.put(2,"santi");
        nombreMap.put(0,"alejandro"); // de esta forma PISO el Key 0 y cambio "gaston" por "alejandro"
        
//      VACIAR MAP:
        personas.clear();
    
//      REMOVER o BORRAR elemento del MAP:
//      Con los mapas vamos a tener que usar el remove propio de los Mapas pero no podemos
//      recorrerlos, este remove, solo sirve para eliminar elementos del mapa según su llave.
        HashMap<Integer, String> estudiantes = new HashMap();
        int llaveABorrar = 123;
        estudiantes.remove(llaveABorrar);
        
//      ORDENAR MAP
        // Se convierte el HashMap a TreeMap
        TreeMap<Integer, String> alumnosTree = new TreeMap(nombreMap);
        
        //  usando el COMPARATOR para ordenar,Primero paso el MAP a ARRAYLIST, luego lo hago como una list
        HashMap<Integer, Alumno> alumnos = new HashMap();
        ArrayList<Alumno> nombres = new ArrayList(map.values()); // Se usa una función de los mapas para traer todos valores.
        nombres.sort(Alumno.compararDni);
        
        
//      MOSTRAR MAP 
//  (1) Primero mostramos los valores
//      HASHMAP.values();
        System.out.println("Mostrando HashMap");
        for (String valor : nombreMap.values()) {
            System.out.println(valor);
        }        
        // en caso de ser objetos, cada value es un objeto! Tengo que acceder con los getters correspondeintes
        for (String mascota : nombreMap.values()) {
            System.out.println(mascota.getNombre());
        }   
//  (2) Luego las keys
//      HASHMAP.keySet();
        for (Integer key : nombreMap.keySet()) {
            System.out.println(key);
        }
        
//      Otra opcion para mostrar ambas es el
//    ------------------------------------
//      ITERATOR. Es una interfaz

//      todas las colecciones vienen con un metodo iterator()
//      Es como El i de un for Por eso es i de iterator.
//      Tiene 3 metodos: .hasNext() - .next() - .remove()
//      Se declara asi:
//          Iterator<TIPO> it = COLECCION.iterator();
//      Donde TIPO es el tipo de la COLECCION en la cual llamo al metodo iterator();
//    ------------------------------------
    
//      EL ewhile va a buscar posicion a posicion.
//      .hasNext() pregunta si hay un elemento siguiente
//      El .next() salta al proximo objeto y avanza el while. Cuando salto, miro el elemento que ya salte!
        Iterator it = nombreMap.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, Double> objeto = (Map.Entry)it.next();
            System.out.print("producto = " + objeto.getKey());
            System.out.println("--> $" + objeto.getValue());
        }
        
//        tambien funciona de esta manera
        Iterator<Map.Entry<String, Double>> it = nombreMap.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, Double> objeto = it.next();
            System.out.println("Llave: " + objeto.getKey());
            System.out.println("Value: " + objeto.getValue());
        }
        
//    ----------------
//      Map.Entry
//    ----------------
//      https://tinchicus.com/2019/07/10/java-interfaz-map-entry/
//      Tambien puedo recorrer el map con un for
//      Usamos el objeto Map.Entry para acceder a las llaves y los valores.
        for (Map.Entry<Integer, String> entry : nombreMap.entrySet()) {
            System.out.println("documento=" + entry.getKey() + ", nombre=" +
            entry.getValue());
        
        }
        
}
    
    

    
}
