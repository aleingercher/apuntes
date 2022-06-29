package clasesutilidad;

public class ZCuentaBancaria {
    
    String CBU;
    String alias;
    double saldo;
    
    
    // CONSTRUCTORES

    // GETTERS / SETTERS
    
    // METODOS

    void mostrarDatos(){
        System.out.println(CBU + " " + alias + " " + saldo);
    }
    
    double obtenerSaldo(){        
        return saldo;
    }
    
    boolean saldoDisponible(double monto){
        return saldo >= monto;
    }
    
    void extraer(double monto){
        if (saldoDisponible(monto)) {
            saldo -= monto;
        } else {
            System.out.println("su saldo es insuficiente");
        }
    }
    
}
