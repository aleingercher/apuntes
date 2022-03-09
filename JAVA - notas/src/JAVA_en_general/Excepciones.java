package JAVA_en_general;

public class Excepciones {

    /*  CLASE THROWABLE es una CLASE. Todas las ramas son subclases
    
        . ERROR: Ocurren en la JVM(OutOfMemoryError, InternalError, UnknownError)
    
        . EXCEPTION _______>  IOException (NO podemos manejarlas. Error de compilacion)
                   |                      |__> EOFException
                   |                      |__> FileNotFoundException
                   |                      |__> MalformedURLException
                   |                      |__> UnknownHostException
                   |                      
                   |
                   |_______>  RuntimeException___> Arithmetic Exception
                                              |__> ClassCastException
                                              |__> IllegalArgumentException --> NumberFormatException
                                              |__> IllegalStateException
                                              |__> IndexOutOfBoundsException (Array tb)
                                              |__> NoSuchElementException
                                              |__> NullPointerException

       MANEJO DE EXCEPCIONES
    ---------------------------
    5 palabras:
        try: bloque donde se busca si hay salta un error
    
        catch: atrapa esa excepcion y le da un curso. Puede haber mas de uno por try.
    
        throw:  . Lanza excepciones manualmente
                . throw new TipoExcepcion(“Mensaje de error”);
    
        throws: . Para poner que un metodo lanza una excepcion.
                . Se declara en donde se declara la clase.
                . El requisito de atrapar excepciones en Java exige que el programador 
                    atrape todas las excepciones verificadas o bien las coloque en la cláusula throws de un método. 
                . O sea, un metodo que divida pueda dividir por 0, le agrego 
                                                                            throws ArithmericException
                  Luego cuando lo llamo desde el main, uso el try catch, pero ya le avise que podia existir ese error.
    
        finally: Es opcional. Es un bloque que se ejecuta siempre luego de un try.
    
            try {
                BloqueDeIntrucciones
            } catch (TipoExcepción e) {
                e.printStackTrace();
            } catch (OtroTipoExcepción nombreVariable) {
                BloqueCatch
            } 
    
    
    
    * La idea es que un error no nos frene el programa!
    * Una excepción en java es un objeto que modela un evento excepcional, el cual no debería haber ocurrido.
    * En Java, todas las excepciones están representadas por clases.
    
        METODOS
    ---------------------------
    
    * e.printStackTrace();
        . Se llama dentro del bloque catch.
        . Sirve para imprimir todo el stack o camino del error que atrape
    
    * e.getMessage();
        .Se usa para imprimir el mensaje que lanzo con el throw ()ver ejemplo abajo
    
    * e.toString();
        . Imprime la info de donde esta ubicada la excepcion y su mensaje asociado
        . Por default, si pongo la "e" suelta, llama al toString
    
     */
    // Cuando uso una excepcion CREADA POR MI, aca le digo que el metodo puede tirar esta excepcion
    public static void main(String[] args) throws zPruebaException {

        int num = 0;
        try {
            if (num == 0) {
                throw new zPruebaException("no habia que ingresar 0!!!!!");
                // Luego la declaro con un throw y aclaro que mensaje quiero que tire!!!!!
            }
        } catch (zPruebaException e) {
            System.out.println(e.toString());
            System.out.println(e.getMessage());
            System.out.println(e.fillInStackTrace());
            System.out.println("ERROR: " + e);
        }
        
    
        try {
// esta linea genera un objeto con el error de dividir por 0.
//            int num = 10/0;
            int numero = Integer.parseInt("a");

// Paso un parametro con un tipo de excepcion que tengo que "capturar".
// Al no ser una excepcion de ese tipo, pasa al siguiente catch
    }
        catch(NumberFormatException a){
//            System.out.println("Error por si es de formato de numero");
            
// Y aca si lo agarra!
        } catch (ArithmeticException e) {
            System.out.println("Excepcion de dividir por 0 agarrada");

// Si no estoy seguro, uso a la superclase de todas las excepciones, para evitar que se rompa.            
        } catch (Exception b){
                System.out.println("Yo soy el ultimo recurso");
                
        } finally{
            System.out.println("Este bloque SIEMPRE se va a ejecutar");
        }

// Al agarrar el catch a la exception, el programa no se rompe        
        System.out.println ("Yo estoy luego del bloque try/catch");

    } 

}
