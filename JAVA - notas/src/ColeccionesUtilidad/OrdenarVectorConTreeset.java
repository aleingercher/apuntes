package ColeccionesUtilidad;

import java.util.Arrays;
import java.util.TreeSet;

public class OrdenarVectorConTreeset {

    // Creamos un arreglo con strings con algunos nombres
    public static String nombres[] = {"leonel", "aldo", "alberto", "rodrigo", "carlos", "aldo"};

    // Creamos un arreglo con números enteros
    public static Integer numeros[] = {5, 20, 12, 50, 48, 50};

    public static void main(final String... args) {

        //Creamos un TreeSet de tipo String para ordenar nuestro arreglo de Strings
        final TreeSet<String> nombresOrdenados = new TreeSet();

        //Creamos un TreeSet de tipo Integer para ordenar nuestro arreglo de enteros
        final TreeSet<Integer> numerosOrdenados = new TreeSet();

        //Arrays.asList(nombres) convierte nuestro arreglo "nombres" en una lista gracias a la clase Arrays
        /**
         * cuando añadimos la lista (la conversion de nuestro arreglo a lista) al TreeSet este utilizando la clase comparable ordenara los elementos de la lista y quitara todos aquellos valores que se repiten
  *
         */
        nombresOrdenados.addAll(Arrays.asList(nombres));
        numerosOrdenados.addAll(Arrays.asList(numeros));

        System.out.println("lista de nombres:");

        //Recorremos el TreeSet e imprimimos los valores ya ordenados
        for (final String nombre : nombresOrdenados) {
            System.out.print(nombre + " ");
        }

        System.out.println("\nlista de numeros:");

        for (final Integer numero : numerosOrdenados) {
            System.out.print(numero + " ");
        }

    }
}
