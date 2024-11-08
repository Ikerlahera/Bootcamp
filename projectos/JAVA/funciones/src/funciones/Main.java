package funciones;

public class Main {

	public static void main(String[] args) {
		Main main = new Main();
		System.out.println(main.javanull("java"));
		System.out.println(main.login("admin", 1234));
		

	}
	
	public String javanull(String java) {
		if (java == "java") {
			return "es java";
		}
		else {
			return "null";
		}
	}
	
	public String login(String user, int password) {
		if(user == "admin" && password == 1234) {
			return "Login true";
		}
		else {
			return "Login false";
		}
	}

}
