
public class CocheBuilder {
	private int id_coche = 0;
	String marca = "";
	String modelo = "";
	int caballos = 0;
	String motor = "";
	
	public CocheBuilder() {
		
	}
	
	public Coche build() {
		return new Coche(id_coche,marca, modelo, caballos,motor);
		
	}
	
	public CocheBuilder setid_choche(int id_coche) {
		this.id_coche = id_coche;
		return this;
	}


	public CocheBuilder setMarca(String marca) {
		this.marca = marca;
		return this;
	}


	public CocheBuilder setModelo(String modelo) {
		this.modelo = modelo;
		return this;
	}


	public CocheBuilder setCaballos(int caballos) {
		this.caballos = caballos;
		return this;
	}



	public CocheBuilder setMotor(String motor) {
		this.motor = motor;
		return this;
	}
	
	
}
