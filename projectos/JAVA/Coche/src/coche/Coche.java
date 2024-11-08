package coche;

public class Coche {
	String modelo;
	String color;
	int puertas;
	int kilometraje = 0;
	int velocidad;
	Motor motor;
	Rueda[] ruedas;
	Combustible combustible;
	
	public Coche(String modelo, String color, int puertas, Motor motor,
			Combustible combustible) {
		this.modelo = modelo;
		this.color = color;
		this.puertas = puertas;
		this.motor = motor;
		this.combustible = combustible;
		
		 this.ruedas = new Rueda[] {
		            new Rueda("Bridgestone", "Potenza S001", 21),
		            new Rueda("Goodyear", "Eagle F1 Asymmetric", 21),
		            new Rueda("Continental", "SportContact 6", 21),
		            new Rueda("Pirelli", "P Zero Nero", 21)
		        };
	}

	
	
	public int acelerar() {
		return velocidad+33;
	}
	
	public int frenar() {
		return velocidad-33;
	}
	
	public void RecorrerDistancia (int distancia) {
		kilometraje+=distancia;
		int consumo = motor.consumoCombustible(velocidad,distancia);
		combustible.consumir(consumo);
	}
	
	public void mostrarInfoCoche() {
        System.out.println("Modelo: " + modelo + ", Color: " + color + ", Puertas: " + puertas + ", Kilometraje: " + kilometraje + " km");
        motor.mostrarInfo();
        for (Rueda rueda : ruedas) {
            rueda.mostrarInfo();
        }
        System.out.println("Nivel de gasolina: " + combustible.nivelGasolina + " litros");
    }
}
