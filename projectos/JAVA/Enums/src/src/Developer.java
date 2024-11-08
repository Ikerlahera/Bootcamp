package src;

public class Developer {
	String nombre;
	String Apellidos;
	int edad;
	String dni;
	Profesiones rolTecnologico;
	
	public Developer(String nombre, String apellidos, int edad, String dni, Profesiones rolTecnologico) {
		super();
		this.nombre = nombre;
		Apellidos = apellidos;
		this.edad = edad;
		this.dni = dni;
		this.rolTecnologico = rolTecnologico;
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return Apellidos;
	}
	public void setApellidos(String apellidos) {
		Apellidos = apellidos;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public Profesiones getRolTecnologico() {
		return rolTecnologico;
	}
	public void setRolTecnologico(Profesiones rolTecnologico) {
		this.rolTecnologico = rolTecnologico;
	}
}
