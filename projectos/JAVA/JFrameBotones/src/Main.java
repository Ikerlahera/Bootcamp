import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;

public class Main {

	public static void main(String[] args) {
			JFrame jframe = new JFrame();
			jframe.setVisible(true);
			jframe.setSize(500,400);
			
//			jframe.setLayout(new BorderLayout());
//			
//			JButton north = new JButton("North");
//			jframe.add(north);
//			north.addActionListener(e -> {
//				System.out.println("North");
//			});
//			
//			JButton west = new JButton("West");
//			jframe.add(west);
//			west.addActionListener(e -> {
//				System.out.println("West");
//			});
//			
//			JButton east = new JButton("East");
//			jframe.add(east);
//			east.addActionListener(e -> {
//				System.out.println("East");
//			});
//			
//			JButton south = new JButton("South");
//			jframe.add(south);
//			south.addActionListener(e -> {
//				System.out.println("South");
//			});
//			
//			JButton center = new JButton("Center");
//			jframe.add(center);
//			center.addActionListener(e -> {
//				System.out.println("Center");
//			});
//			
//			jframe.add(north, BorderLayout.NORTH);
//			jframe.add(west, BorderLayout.WEST);
//			jframe.add(east, BorderLayout.EAST);
//			jframe.add(south, BorderLayout.SOUTH);
//			jframe.add(center, BorderLayout.CENTER);
			
			
			
//			jframe.setLayout(new FlowLayout(FlowLayout.RIGHT));
//			
//			jframe.add(new JButton("Boton 1"));
//			jframe.add(new JButton("Boton 2"));
//			jframe.add(new JButton("Boton 3"));
//			jframe.add(new JButton("Boton 4"));
//			jframe.add(new JButton("Boton 5"));
//			jframe.add(new JButton("Boton 6"));
//			jframe.add(new JButton("Boton 7"));
//			jframe.add(new JButton("Boton 8"));
//			
			
			
			jframe.setLayout(new GridLayout(2,2));
			
			JButton north = new JButton("North");
			jframe.add(north);
			north.addActionListener(e -> {
				System.out.println("North");
			});
			
			JButton west = new JButton("West");
			jframe.add(west);
			west.addActionListener(e -> {
				System.out.println("West");
			});
			
			JButton east = new JButton("East");
			jframe.add(east);
			east.addActionListener(e -> {
				System.out.println("East");
			});
			
			JButton south = new JButton("South");
			jframe.add(south);
			south.addActionListener(e -> {
				System.out.println("South");
			});
			

			
			
	}

}
