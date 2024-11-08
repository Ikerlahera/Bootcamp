package main;

public class Main {

	public static void main(String[] args) {
	Tarjeta tarjeta = new Tarjeta();
	
	tarjeta.verSaldo();
	
	tarjeta.pagar(999);
	
	tarjeta.verSaldo();
	
	tarjeta.anularTarjeta();
	
	tarjeta.pagar(50);
	
	tarjeta.verSaldo();

	}

}
