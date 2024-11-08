package arbol;

import java.util.Iterator;

public class Main {

	public static void main(String[] args) {
		int altura = 10;
		int anchoTronco = 4, alturaTronco = 2;
        for(int i=1;i<altura;i++) {
        	System.out.print(" ".repeat(altura - i));
        	System.out.println("\033[0;32m*".repeat(2 * i - 1));
        }
        
        for(int i = 0; i < alturaTronco; i++) {
        	System.out.print(" ".repeat(altura - anchoTronco / 2-1));
        	System.out.println("\033[0;30m*".repeat(anchoTronco));
        }
    }
}