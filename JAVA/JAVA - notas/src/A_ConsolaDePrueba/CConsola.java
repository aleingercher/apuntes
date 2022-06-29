package A_ConsolaDePrueba;

import java.util.Scanner;

public class CConsola {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in).useDelimiter("\n");
        int[] a = {1, 5, 3, 6};
        for (int w = 0; w < 4; w++) {
            for (int x = 0; x < 4; x++) {
                for (int y = 0; y < 4; y++) {
                    for (int z = 0; z < 4; z++) {
                        if (w != x && x != y && y != z && z != x) {
                            System.out.println(a[w] + "" + a[x] + "" + a[y] + "" + a[z]);
                        }
                    }
                }
            }
        }
    }

}

//int x = 1, n, contador = 0;
//        
//        System.out.println("Ingrese un numero");
//        n = leer.nextInt();
//        
//        while (x<=n) {
//            if (n%x ==0) {
//                contador++;
//            }
//            x++;
//        }
//        
//        if (contador == 2) {
//            System.out.println(n + " es primo");
//        } else {
//            System.out.println(n + " NO es primo");
//        }
