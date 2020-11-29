package com.CucumberDbank.baseclass;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Jdbc {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {

    	String url="jdbc:mysql://localhost:3306/world";
    	
    	String username="root";
    	
    	String password="admin";
    	
    	String query="select * from world.city";
    	
    	
    	Class.forName("com.mysql.jdbc.Driver");
    	
    	
    	Connection con = DriverManager.getConnection(url, username, password);
    	
    	
    	Statement st = con.createStatement();
    	
    	
    	ResultSet rs = st.executeQuery(query);
    	
    	
    	while(rs.next()) {
    	   
    		String s = rs.getString(2);
    		System.out.println(s);
    	}
    	
	}

}
