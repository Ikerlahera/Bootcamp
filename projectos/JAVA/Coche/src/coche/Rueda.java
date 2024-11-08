package coche;

public class Rueda extends ComponenteCoche {
	int grosor;
	
	public Rueda(String marca, String modelo, int grosor) {
		super(marca,modelo);
		this.grosor = grosor;
	}

	@Override
	public void mostrarInfo() {
		System.out.println("Rueda: " + marca + " " + modelo + ", Grosor: " + grosor);		
	}

}
