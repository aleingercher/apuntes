package JAVA_en_general;

public enum ENUM {
    // voy a hacer un ENUM de Razas.    
    // SIEMPRE VAN EN MAYUSCULAS
    CANICHE, PITBULL, COLLIE;

    // La idea es hacer una lista DEFINIDA de elementos para limitar las opciones
    /* 
    Al llamarlo desde una clase, puedo decir
    
    ENUM.caniche o ENUM.pitbull  
    
     */
    // SETEAR con un ENUM
    // Hay que darle opciones y usar un switch
    /* System.out.println("Escoja el color del coche con el numero asociado:");
        System.out.println("\t0-Rojo.  1-Verde.  2-Blanco");
        String msg = "Color establecido con exito", valor = coche.next();
        switch (valor) {
            case "0": setColor (ColorDeCoche.Rojo); break;
            case "1": setColor (ColorDeCoche.Verde); break;
            case "2": setColor (ColorDeCoche.Blanco); break;
            default: msg = "Color incorrecto."; break;
        }
        System.out.println(msg); */
    
 /* 
    Puedo iterar sobre los elementos de un enum desde otra clase:
    
    ENUM.values() devuelve un array con las constantes guardadas en un enum.
    
    value.name() devolvera el nombre al recorrerla
    
    for (ENUM value : ENUM.values()) {
            System.out.println(value.name());
    }
    
     */
    
}

    