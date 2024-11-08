package Scanner;

import java.io.InputStream;
import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		System.out.println("Introduce decimal: ");
		Scanner sc2 = new Scanner(System.in);
		
		try {		
			
		double num2 = sc2.nextDouble();	
		System.out.println("El decimal es: "+num2);	
		
		}catch (Exception e){
		
		sc2.useLocale(Locale.US);
		double num2 = sc2.nextDouble();
		System.out.println("El decimal es: "+num2);		
		
		}		
    }
}
