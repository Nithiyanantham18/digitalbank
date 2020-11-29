package com.CucumberDbank.Helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
public static Properties p;
	
	public ConfigurationReader() throws IOException {
		
	File f=new File("C:\\Users\\HP\\eclipse-workspace\\CucumberDbank\\src\\test\\java\\com\\CucumberDbank\\Properties\\ConfigurationProperties");
	FileInputStream fis=new FileInputStream(f);
	 p= new Properties();
	p.load(fis);
}
	
	
	public static String getBrowsername() {
		
		String browsername = p.getProperty("Browser");
		return browsername;
	}
	
	public static String getUrl() {
		String url = p.getProperty("Url");
          return url;
	}
	
	
}

