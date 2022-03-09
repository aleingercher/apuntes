package clasesutilidad;

import java.util.Arrays;

public class ClaseArrays {

    public static void main(String[] args) {

//        para declarar un array se puede hacer asi
        int vector1[] = {1, 3, 2, 4, 12, 5, 6, 3};
        int vector2[] = {1, 3, 2, 4, 12, 5, 6, 3};

        // o con el constructor
        int vectorVacio[] = new int[5];

        System.out.println("------------------------------------------------------");
        System.out.println("Equals: ");

        System.out.println("Los vectores son iguales: " + Arrays.equals(vector1, vector2));

        System.out.println("------------------------------------------------------");
        System.out.println("Fill: ");

        Arrays.fill(vectorVacio, 5);

        System.out.println("El arreglo vacio es igual a: " + Arrays.toString(vectorVacio));

        System.out.println("------------------------------------------------------");
        System.out.println("copyOf: ");
        System.out.println("Permite copiar el contenido de un arreglo en otro arreglo");
        System.out.println("El segundo parametro es la cantidad de elementos que quiero copiar\n");

        int arregloCopia[] = Arrays.copyOf(vector2, 5);
        System.out.println("El arreglo copiado es igual a los primeros 5 numeros de vector2: " + Arrays.toString(arregloCopia));

        System.out.println("------------------------------------------------------");
        System.out.println("Para ordenar Arrays");
        System.out.println("Sort: ");
        Arrays.sort(vector1);

        System.out.println("El arreglo ordenado queda: " + Arrays.toString(vector1));

        System.out.println("Si fuera un array de objetos, la clase donde esta el array,"
                + " debe implementar la interfaz Comparable");
        /* class ClasePropia implements Comparable{
        
            // Ahora incluyo el metodo en la clase
        
        @override
        public int compareTo(Object miObjeto){
            
        // Primero casteo el objeto que entra al tipo de clase en al que estoy
            ClasePropia objetoCasteado = (ClasePropia) miObjeto;
            
            if(this.VALORaCOMPARAR < objetoCasteado.VALORaCOMPARAR){
                return -1;
            }
            if(this.VALORaCOMPARAR > objetoCasteado.VALORaCOMPARAR){
                return 1;
            }
        
            return 0;
            
        }
        
        Luego
        
             Arrays.sort(vectorDeTipoClasePropia);
        
        
         */

        System.out.println("------------------------------------------------------");
        System.out.println("BinarySearch: ");

        System.out.println("El numero 5 se encuentra en la posicion: " + Arrays.binarySearch(vector2, 5) + " del vector2");

        System.out.println("------------------------------------------------------");
        System.out.println("length: ");

        System.out.println("El array tiene esta longitud " + vector1.length);        
        


    }

}

}
