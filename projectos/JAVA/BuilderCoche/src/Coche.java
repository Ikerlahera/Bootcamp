
public class Coche {
	int id_coche = 0;
	String marca = "";
	String modelo = "";
	int caballos = 0;
	String motor = "";
	
	public Coche(int id_coche,String marca, String modelo, int caballos, String motor) {
		super();
		this.id_coche = id_coche;
		this.marca = marca;
		this.modelo = modelo;
		this.caballos = caballos;
		this.motor = motor;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public int getCaballos() {
		return caballos;
	}

	public void setCaballos(int caballos) {
		this.caballos = caballos;
	}

	public String getMotor() {
		return motor;
	}

	public void setMotor(String motor) {
		this.motor = motor;
	}

	@Override
	public String toString() {
		return "Coche [id_coche=" + id_coche + ", marca=" + marca + ", modelo=" + modelo + ", caballos=" + caballos
				+ ", motor=" + motor + "]";
	}
	
	
}


