package main;

import java.util.ArrayList;
import java.util.Random;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class Main {

	public static void main(String[] args) {
	
//1	JOptionPane.showMessageDialog(null, "El total es:\n120€ (IVA 10 % no incl.)\n132€ (con IVA incl.)" , "Ticket", JOptionPane.INFORMATION_MESSAGE);
		
//2	String nombre = JOptionPane.showInputDialog("nombre");	
//	while(nombre == null) {
//	JOptionPane.showMessageDialog(null, "Debes introducir el nombre", "Advertencia", JOptionPane.WARNING_MESSAGE);
//	nombre = JOptionPane.showInputDialog("nombre");		
//	}
//	while (nombre.isEmpty()) {
//		JOptionPane.showMessageDialog(null, "El nombre esta en blanco", "Advertencia", JOptionPane.ERROR_MESSAGE);
//		nombre = JOptionPane.showInputDialog("nombre");			
//	}
//	
//	JOptionPane.showMessageDialog(null, nombre);
//	System.out.println(nombre);
	
	
//3	ImageIcon iconolobo = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\lobo.jpg");
//	ImageIcon iconogato = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\gato.jpg");
//	ImageIcon iconoperro = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\perro.jpg");
//	
//
//	String[] animales = {"Lobo", "Gato", "Perro"}; 
//	String animal = (String) JOptionPane.showInputDialog(null, "cual es tu animal favorito", "animal quiz", JOptionPane.QUESTION_MESSAGE,null,animales,"lobo");
//	if(animal != null) {
//		//System.out.println(animal);
//		switch (animal) {
//		case "Lobo":
//			JOptionPane.showMessageDialog(null, "lobo", animal, JOptionPane.INFORMATION_MESSAGE, iconolobo);
//		break;
//		case "Gato":
//			JOptionPane.showMessageDialog(null, "gato", animal, JOptionPane.INFORMATION_MESSAGE, iconogato);
//		break;
//		case "Perro":
//			JOptionPane.showMessageDialog(null, "perro", animal, JOptionPane.INFORMATION_MESSAGE, iconoperro);
//			break;
//		}
//			
//	}
	
//	int valor = JOptionPane.showConfirmDialog(null, "prueba");
//
//	switch (valor) {
//	case 0:
//		System.out.println("Yes");
//		JOptionPane.showMessageDialog(null, "Yes");
//		break;
//	case 1:
//		System.out.println("No");
//		JOptionPane.showMessageDialog(null, "No");
//		break;
//	case 2:
//		System.out.println("Cancel");
//		JOptionPane.showMessageDialog(null, "Cancel");
//		break;
//	}
//	
//	
//	String[] array = {"1","2","3","4"}; 
//	JOptionPane.showOptionDialog(null, "Escoge", "titulo", 0, 2, null, array, "e");

	 ArrayList<String> preguntas = new ArrayList<>();
	 preguntas.add("¿Te gusta la pizza con piña?");
	 preguntas.add("¿Prefieres gatos o perros?");
	 preguntas.add("¿Cuál es tu lenguaje de programación favorito?");
	 
	 Object[] options0 = {"Sí, me encanta!", "No, puags!", "Mejor una 4 quesos", "Siguiente", "Salir"};
	 ImageIcon icon0 = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\pizza.png");
	 Object[] options1 = {"Gatos", "Perros", "Ambos", "Siguiente", "Salir"};
	 ImageIcon icon1 = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\gato2.png");
	 Object[] options2 = {"Java", "Python", "C++", "Siguiente", "Salir"};
	 ImageIcon icon2 = new ImageIcon("C:\\Users\\Tarda\\Desktop\\Bootcamp\\projectos\\JAVA\\JavaGUI\\src\\images\\java.png");	
	
	 Random rand = new Random();
	 
	 
	 for(int i=0; i<preguntas.size();i++) {
		 int random = rand.nextInt(preguntas.size());
		 String pregunta = preguntas.get(random);
		 if(random == 0) {
			 JOptionPane.showOptionDialog(null, pregunta, "Preguntas sobre comida", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, icon0, options0, options0);
		 }
		 if(random == 1) {
			 JOptionPane.showOptionDialog(null, pregunta, "Preguntas sobre animales", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, icon1, options1, options1);
		 }
		 if(random == 2) {
			 JOptionPane.showOptionDialog(null, pregunta, "Preguntas sobre lenguajes", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, icon2, options2, options2);
		 }
		 
	 }
	 
	}

}
