package clasesutilidad;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class ClaseDate {

    public static void main(String[] args) {
        
        // el constructor recibe MILISEGUNDOS que pasarondesde 1/1/1970

        System.out.println("Genera la fecha actual");
        Date fechaActual = new Date();

        System.out.println(fechaActual);

        System.out.println("------------------------------------------------------");
        System.out.println("Genera la fecha segun los valores en el constructor");
        Date fecha = new Date(1990 - 1900, 10, 1); // Se le resta 1900 para que la fecha quede bien

        System.out.println(fecha);

        System.out.println("------------------------------------------------------");
        System.out.println("After: ");
        System.out.println("¿ La fecha está despues de la fecha actual ? " + fecha.after(fechaActual));

        System.out.println("------------------------------------------------------");
        System.out.println("Before: ");
        System.out.println("¿ La fecha está antes de la fecha actual ? " + fecha.before(fechaActual));

        System.out.println("------------------------------------------------------");
        System.out.println("CompareTo: ");
        System.out.println("La fecha 1990-10-1 comparado con la fecha actual"
                + " para saber si son iguales dio un resultado de " + fecha.compareTo(fechaActual));

        System.out.println("------------------------------------------------------");
        System.out.println("Equals: ");
        System.out.println("La fecha 1990-10-1 comparado con la fecha actual"
                + "/ Resultado: " + fecha.equals(fechaActual));

        System.out.println("------------------------------------------------------");
        System.out.println("Getters: ");
        System.out.println("El dia de la fecha actual es: " + fechaActual.getDate()
                + "\nel mes de la fecha actual es: " + (fechaActual.getMonth() + 1)
                + "\nel año de la fecha actual es: " + (fechaActual.getYear() + 1900) );

        
        System.out.println("La fecha en milisegundos es: " + fechaActual.getTime());
        
        System.out.println("------------------------------------------------------");
        System.out.println("Setters: ");
        
        Date fechaNueva = new Date();
        
        fechaNueva.setDate(10); // Seteamos el dia
        fechaNueva.setMonth(5); // Seteamos el mes
        fechaNueva.setYear(2021); // Seteamos el anio
        
        System.out.println("Con .setTime seteo una nueva fecha(en milisegundos)");
        fechaNueva.setTime(fecha.getTime());
        
        System.out.println("------------------------------------------------------");
        System.out.println("SimpleDateFormat para leer fecha: ");
        
        
        System.out.println("Sirve para ingresar fechas en formato String");
        
        // 1) Le doy el formato con que quiero que lea la fecha
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
        
        // 2) Le paso un string con ese formato que le paso como parametro al constructor
        String fechaEnString = leer.next();
        
        // 3) Seteo un atributo Date de esta manera:
        Date fechita = formato.parse(fechaEnString);
        
        
        
        System.out.println("------------------------------------------------------");
        System.out.println("ToString: ");
        
        String fechaCadena = fechaActual.toString();
        
        System.out.println("La fecha como cadena quedó: " + fechaCadena);
        
        
//        ------------------------------------------------------------------

        //        Llenar el atributo Date con set
//        Scanner scan = new Scanner(System.in);
//        
//        Perro p1 = new Perro(); // Creamos el objeto
//        
//        System.out.println("Ingrese el dia");
//        int dia = scan.nextInt();
//        
//        System.out.println("Ingrese el mes");
//        int mes = scan.nextInt();
//        
//        System.out.println("Ingrese el año");
//        int anio = scan.nextInt();
//        
//        Date fechaNacimiento = new Date(anio, mes, dia); // Creamos el objeto tipo Date
//        
//        p1.setFechaDeNacimiento(fechaNacimiento); // Guardamos la fecha con el set
//        
//        p1.getFechaDeNacimiento(); // Mostramos la fecha con el get 
//        
//        2 Llenar el atributo Date con metodos 
        Scanner scan = new Scanner(System.in);
        
        ZPerro p1 = new ZPerro();

        System.out.println("Ingrese el dia");
        int dia = scan.nextInt();

        System.out.println("Ingrese el mes");
        int mes = scan.nextInt();

        System.out.println("Ingrese el año");
        int anio = scan.nextInt();

         // Creamos el objeto tipo Date
        Date fechaNacimiento = new Date();

        fechaNacimiento.setDate(dia); // Seteamos el dia
        fechaNacimiento.setMonth(mes); // Seteamos el mes
        fechaNacimiento.setYear(anio); // Seteamos el anio

        p1.llenarFecha(fechaNacimiento);

        //  p1.mostrarFecha();
        System.out.println(p1);

    }

}
