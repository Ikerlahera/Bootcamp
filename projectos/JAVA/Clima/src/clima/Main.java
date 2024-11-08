package clima;

public class Main {

	public static void main(String[] args) {
		double temperatura = 20;
		
		if (temperatura < 10) {
			System.out.println("Climas frios");
			 if (temperatura < 5){
				System.out.println("Polar");
			}
			 else {
				 System.out.println("Alta montaña");
			 }
		}
		else if (temperatura>=20) {
			System.out.println("Climas calidos");
			if (temperatura>=20 && temperatura <23.5) {
				System.out.println("Equatorial");
			}
			else if (temperatura>=23.5 && temperatura<26.5) {
				System.out.println("Tropical");
			}
			else if (temperatura>= 26.5) {
				System.out.println("Desertico");
			}
		}
	/*String clima = (temperatura < 10) ? 
		    "Climas frios " + ((temperatura < 5) ? "Polar" : "Alta montaña") :
		    (temperatura >= 20) ? 
		        "Climas calidos " + ((temperatura >= 20 && temperatura < 23.5) ? "Equatorial" :
		                            (temperatura >= 23.5 && temperatura < 26.5) ? "Tropical" :
		                            "Desertico") : 
		        ""; */
	
	double numero2 = -2;	
	System.out.println(((numero2 > 0) ? "Es positivo" :
        (numero2 < 0) ? "Es negativo" :
        "Es cero"));
		
		
		
	}
	

	

}
