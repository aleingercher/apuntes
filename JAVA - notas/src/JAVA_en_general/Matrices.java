package JAVA_en_general;
import java.util.Scanner;

public class Matrices {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in).useDelimiter("\n");
        
        int [][] matriz = new int [8][6];
        
        // recorrer matrices
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 6; j++) {
                System.out.println("Recorro la posicion " + i + ","+ j);
            }            
        }

    }

}


