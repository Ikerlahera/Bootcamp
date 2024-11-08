package com.example;

import java.awt.Color;
import java.awt.Toolkit;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.JFrame;

public class MiJFrame extends JFrame{
	
	private static final long serialVersionUID = 1L;

	MiJFrame(int width, int height, boolean visible, boolean resizable){
		setSize(width,height);
		//setBounds(400,50,250,250);
		setVisible(visible);
		setResizable(resizable);
		getContentPane().setBackground(Color.black);
		//setExtendedState(NORMAL);
		setLocationRelativeTo(null);
		setTitle("Fundacion Espai");
		setIconImage(Toolkit.getDefaultToolkit().getImage("./images/favicon.png"));

//		try{ 
//		    setIconImage(ImageIO.read(new File("favicon.png")));
//		  } 
//		  catch (IOException e){
//		    e.printStackTrace();
//		  }
//		
	}
	}
