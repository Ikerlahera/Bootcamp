package banderas;

import java.util.Iterator;

public class Main {

	public static void main(String[] args) {
		String rojo = "\u001B[41m";
		String amarillo = "\u001B[43m";
		String azul = "\u001B[44m";
		String negro = "\u001B[40m";
		String blanco = "\u001B[47m";
		String reset = "\u001B[0m";
		
		int ancho = 6;
		int alto = 6;
		
		//Francia
		for(int i = 0; i<alto; i++) {
			for(int j = 0; j<ancho;j++) {
			System.out.print(azul);
			System.out.print(" ");
			}
			
			for(int j = 0; j<ancho;j++) {
			System.out.print(blanco);
			System.out.print(" ");
			}
			
			for(int j = 0; j<ancho;j++) {
			System.out.print(rojo);
			System.out.print(" ");
			}
			
			System.out.println(reset);
		}
		System.out.println();
		
		//Ukraine
		int altou = 3;
		int anchou = 18;
		for(int i = 0; i<altou; i++) {
			for(int j = 0; j<anchou;j++) {
			System.out.print(azul);
			System.out.print(" ");
			}System.out.println();
				}
		
		for(int i = 0; i<altou; i++) {
			for(int j = 0; j<anchou;j++) {
			System.out.print(amarillo);
			System.out.print(" ");
			}
			System.out.println();
		}
			System.out.println(reset);
	}
	}

