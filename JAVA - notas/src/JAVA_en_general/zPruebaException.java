package JAVA_en_general;

public class zPruebaException extends Exception {

    public zPruebaException() {
    }

    public zPruebaException(String msg) {
        
        super(msg = "siempre va a tirar este mensaje de error");
    }
}
