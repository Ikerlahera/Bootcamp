
public class Main {

	public static void main(String[] args) {
		Coche coche1 = new CocheBuilder()
			.setid_choche(1).setMarca("marca1")
			.setModelo("modelo1")
			.setCaballos(1)
			.setMotor("motor1")
			.build();
		System.out.println(coche1.toString());
		
		Coche coche2 = new CocheBuilder()
				.setid_choche(2).setMarca("marca2")
				.setCaballos(2)
				.build();
		
		System.out.println(coche2.toString());

	}

}
