package main;

public class Tarjeta {
	double saldo = 1000;
	boolean activa = true;
	
	public Tarjeta() {
		super();
		this.saldo = saldo;
		this.activa = activa;
	}
	
	public void anularTarjeta() {
		activa = false;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public boolean isActiva() {
		return activa;
	}

	public void setActiva(boolean activa) {
		this.activa = activa;
	}
	
	public void verSaldo() {
		System.out.println("Quedan "+saldo+" Euros");
	}
	
	public boolean pagar (double dinero) {
		
		if(!activa) {
			System.out.println("La tarjeta esta anulada");
			return false;
		}
		
		if (dinero > saldo) {
			System.out.println("Saldo insuficiente");
			return false;
		}
		
		saldo -= dinero;
		System.out.println("Pago realizado. Saldo restante: "+ saldo + " Euros");
		return true;
	}
	
}
