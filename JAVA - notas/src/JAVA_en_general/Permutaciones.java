package JAVA_en_general;
import java.util.Scanner;

public class Permutaciones {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in).useDelimiter("\n");
        
        permute("abc");

    }
    
    public static void permute(String full){
        if (full == null || full.length() == 0) {
            System.out.println("You must provide a string of length > 0. ");
            return;
        }
        permute("", full); 
    }
    
    private static void permute(String prefix, String remaining){
        if (remaining.length()==0) {
            System.out.println(prefix);
            return;
        }
        
        // la idea es iterar por los restantes y agregarselos al prefix
        for (int i = 0; i < remaining.length(); i++) {
            permute(prefix + remaining.charAt(i), remaining.substring(0,i)+ remaining.substring(i+1,remaining.length()));
            // En el lugar del parametro prefix, selecciono el prefix stackeado + el CHAR en la pos i 
            // Para el otro parametro, selecciono Todos, menos ese CHAR.
            // Ejemplo para i = 1;
            /* 
                prefix + remaining.charAt(1) = 'b';
                remaining.substring(0,1) = 'a'
                remaining.substring(1+1,remaining.length()) = 'c';

                => permute('b', 'ac')
            */
         }
    }

}
