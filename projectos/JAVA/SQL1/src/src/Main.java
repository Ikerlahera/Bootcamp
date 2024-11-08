package src;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Connection connection;
		final String url = "jdbc:mysql://localhost:3306/db_test";
		final String user = "root";
		final String pass = "admin";

		try {
			connection = DriverManager.getConnection(url, user, pass);
			Scanner sc = new Scanner(System.in);
			Statement statement = connection.createStatement();
			String query = sc.nextLine();		
			 statement.executeUpdate(query);
			
			
						statement.close(); // Cerrando statement
						connection.close(); // Cerrando connection
		} catch (Exception e) {
			System.err.println(e);
		}
	}
}