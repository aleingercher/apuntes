package A_ConsolaDePrueba;

public class BinarySearch {

    public static void main(String[] args) {
        int[] arr = {1,2,18,36,84,112,345,987};
        System.out.println(binarySearch(arr, 36)); // should return 3
        System.out.println(binarySearch(arr, 5)); // should return -1
        System.out.println(binarySearch(arr, 987)); // should return 7

    }
    
    public static int binarySearch(int[] a, int target){
        if (a == null || a.length == 0) return -1;
        return binarySearchImpl(a, target, 0, a.length-1);
    }
    
    private static int binarySearchImpl(int[] a, int target, int minIndex, int maxIndex){
        if (minIndex > maxIndex) return -1; // condicion de base
        
        int midIndex = (maxIndex + minIndex) >>> 1; // es sumar y dividir por 2
        
        if (a[midIndex] == target) return midIndex;
        else if (a[midIndex] > target) return binarySearchImpl(a, target, minIndex, midIndex -1);
         // midIndex -1 es el valor que genera la recursion
        
        else return binarySearchImpl(a, target, midIndex + 1, maxIndex);
        
    }

}
