package com.CucumberDbank.Helper;

import org.openqa.selenium.WebDriver;

import com.CucumberDbank.pom.Register;
import com.CucumberDbank.pom.Visatransfer;

public class PageObjectManager {
	public static WebDriver driver;

	private Register r;
	private Visatransfer vt;
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
	}
	
	public Register getR() {
		r=new Register(driver);
		return r;
	}
	public Visatransfer getVt() {
		vt=new Visatransfer(driver);
		return vt;
	}
	
	
	
}
