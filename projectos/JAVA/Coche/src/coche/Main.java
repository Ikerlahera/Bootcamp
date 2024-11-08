package coche;

public class Main {

	public static void main(String[] args) {
		 Motor motor = new Motor("Lamborghini","V8 BiTurbo", 650, 1);
	     Combustible combustible = new Combustible(50); // 50 litros de gasolina
	     Coche coche1 = new Coche("Lamborghini Urus Full Equip", "Negro", 5, motor, combustible);
	     
	     
	     coche1.mostrarInfoCoche();
	     coche1.acelerar();
	     coche1.acelerar();
	     coche1.RecorrerDistancia(10);
	     coche1.frenar();
	     coche1.RecorrerDistancia(10);
	     coche1.mostrarInfoCoche();
	     combustible.repostarCombustible(20);
	     coche1.mostrarInfoCoche();
	}

}
