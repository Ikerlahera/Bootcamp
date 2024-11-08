package estructurasrepetitivas;

public class Main {

	public static void main(String[] args) {
		int[] numeros = {1,2,3,4,5,6,7,8,9,10};
//1		for (int i = 0; i<11; i++) {
//			if (i%2 == 0) {
//				System.out.println(i);
//			}
//		}
		
//2		for(int i = 0;i<numeros.length;i++) {
//			if(numeros[i]%3==0) {
//				System.out.println(numeros[i]);
//			}
//		}
		

		   // Crear el abecedario al revés
        char[] abecedario = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toCharArray();
        char[] removidos = new char[abecedario.length];
        int removidosIndex = 0;

        // Imprimir el abecedario en orden inverso y almacenar las letras eliminadas
        for (int i = abecedario.length; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print(abecedario[j]);
            }
            removidos[removidosIndex++] = abecedario[i - 1];
            System.out.println();
        }

        // Imprimir el array de removidos en orden creciente
        for (int i = 1; i <= removidos.length; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(removidos[j]);
            }
            System.out.println();
        }
	}
}