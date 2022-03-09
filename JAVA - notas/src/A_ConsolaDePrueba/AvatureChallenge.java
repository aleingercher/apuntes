package A_ConsolaDePrueba;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class AvatureChallenge {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in).useDelimiter("\n");
        
        Solution4.solution(1, 8,3,2);
        
    }

}

class Solution4 {

    public static int solution(int A, int B, int C, int D) {
        int counter = 0, time = 0;
        Integer combination = 0, cantCombinaciones = 0;
        ArrayList<Integer> numbers = new ArrayList();
        numbers.add(A);
        numbers.add(B);
        numbers.add(C);
        numbers.add(D);

        ArrayList<Integer> posibilites = new ArrayList();
        for (int w = 0; w < 4; w++) {
            for (int x = 0; x < 4; x++) {
                for (int y = 0; y < 4; y++) {
                    for (int z = 0; z < 4; z++) {
                        if (w != x && x != y && y != z && z != x) {
                            combination = numbers.get(w)*1000 + numbers.get(x)*100 + numbers.get(y)*10 + numbers.get(z);
                            System.out.println(combination);
                            cantCombinaciones++;
//                            posibilites.add(combination);
                        }
                    }
                }
            }
        }
        
        System.out.println(cantCombinaciones);
        /* System.out.println(posibilites);

        Iterator<String> it = posibilites.iterator();
        while (it.hasNext()) {
            String num = it.next();
            for (int i = 0; i < 24; i++) {
                for (int j = 0; j < 60; j++) {
                    if (i < 10) {
                        hours = "0" + String.valueOf(i);
                    } else {
                        hours = String.valueOf(i);
                    }
                    
                    if (j < 10) {
                        minutes = "0" + String.valueOf(j);
                    } else {
                        minutes = String.valueOf(j);
                    }
                                        
                    time = hours + minutes;
//                    System.out.print(time + " "); 
                    if (time.equals(num)) {
                        counter++;
                    }
                }
            }
        }
 */
        return counter;
    }
}
