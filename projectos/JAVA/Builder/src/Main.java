
public class Main {
	public static void main(String[] args) {
		Employee employee = new EmployeeBuilder()
				.setId_user(1).setName("James")
				.setSurname("Gosling")
				.build();
		System.out.println(employee.toString());
		
		Employee employee2 = new EmployeeBuilder()
				.setId_user(2).setName("Java")
				.setSurname("desde0.com")
				.build();
		System.out.println(employee2.toString());
	}
}