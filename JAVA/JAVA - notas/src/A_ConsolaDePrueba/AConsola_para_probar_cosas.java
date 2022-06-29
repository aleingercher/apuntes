package A_ConsolaDePrueba;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.TreeSet;
import java.util.List;


public class AConsola_para_probar_cosas {

    public static void main(final String... args) {
//       ArrayList<String> medias = new ArrayList(Arrays.asList(new String[]{"R", "R", "A", "A", "S", "S", "G", "H"}));
//       
//        System.out.println(mediasAmigas(medias));

           int [] miArray = new int[] {3,1,4};
           System.out.println(miArray.length);
           
           String [] str = {"java", "for", "devs"};
           
           System.out.println(str[0].length());
           
           int d = 10;
           System.out.println(d);
    }
    

    public static int prisioneroDulce(int inicio, int cantidadCaramelos, int cantidadLadrones) {
//            
        return (((cantidadCaramelos % cantidadLadrones) + inicio-1)%cantidadLadrones);
    }  

    public static List<String> mediasAmigas(List<String> pasajeros) {
        
        TreeSet<String> ordenado = new TreeSet();
        //Aca escribir la logica necesaria
        for (int i = 0; i < pasajeros.size(); i++) {
            for (int j = i+1; j < pasajeros.size(); j++) {
                if (pasajeros.get(i).equals(pasajeros.get(j))) {
                    ordenado.add(pasajeros.get(i));
                }
            }
        }
      
        List<String> answer = new ArrayList( ordenado );
        return answer;
    }    
    
    
}
