package A_ConsolaDePrueba;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class BConsola {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in).useDelimiter("\n");
        
        ArrayList<String> medias = new ArrayList(Arrays.asList(new String[]{"R", "E", "T", "A", "P", "S", "G", "H"}));
        
        System.out.println(medias.contains("h"));
    }

}
