package src;

public class Main {

	public static void main(String[] args) {
		Developer dev1 = new Developer("Iker","Lahera",23,"52065349L",Profesiones.BackEndDeveloper);
		Developer dev2 = new Developer("Jane", "Doe", 28, "87654321B", Profesiones.FrontEndDeveloper); 
		Developer dev3 = new Developer("Alex", "Smith", 35,"56781234C", Profesiones.FullStackDeveloper);
		
		Main m = new Main();
		m.checkbackfull(dev1);
		m.checkbackfull(dev2);
		m.checkbackfull(dev3);
		
	}
	
	public void checkbackfull(Developer developer) {
		if (developer.getRolTecnologico() == Profesiones.BackEndDeveloper || developer.getRolTecnologico() == Profesiones.FullStackDeveloper) {
			System.out.println("Viva el back");
		} else if (developer.getRolTecnologico() == Profesiones.FrontEndDeveloper) {
			System.out.println("Viva typescript");
		}
	}

}
