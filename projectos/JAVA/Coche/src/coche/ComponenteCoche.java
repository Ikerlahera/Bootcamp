package coche;

abstract class ComponenteCoche {
	String marca;
	String modelo;
	
	public ComponenteCoche(String marca, String modelo) {
		super();
		this.marca = marca;
		this.modelo = modelo;
	}
	
	public abstract void mostrarInfo();

}
