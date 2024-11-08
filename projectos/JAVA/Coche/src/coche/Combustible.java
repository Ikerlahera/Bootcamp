package coche;

public class Combustible {
	int nivelGasolina;
	
	

	public Combustible(int nivelInicial) {
		this.nivelGasolina = nivelInicial;
	}
	
	public void consumir(int cantidad) {
		if(cantidad <= nivelGasolina) {
			nivelGasolina -= cantidad;
		} else {
			nivelGasolina = 0;
		}
	}

	public void repostarCombustible(int cantidad) {
		nivelGasolina += cantidad;
	}
	
	public boolean verificar() {
		return nivelGasolina < 5;
	}
}
