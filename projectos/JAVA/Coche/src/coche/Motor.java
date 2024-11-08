package coche;

public class Motor extends ComponenteCoche {
	int caballos;
	int consumoPorKilometro;
	
	
	public Motor(String marca, String modelo, int caballos, int consumoPorKilometro) {
		super(marca,modelo);
		this.caballos = caballos;
		this.consumoPorKilometro = consumoPorKilometro;
	}


	public int consumoCombustible (int velocidad, int distancia) {
		int consumo = consumoPorKilometro * (1 + velocidad / 100)*distancia;
		return consumo;
	}


	@Override
	public void mostrarInfo() {
		// TODO Auto-generated method stub
		
	}
}
