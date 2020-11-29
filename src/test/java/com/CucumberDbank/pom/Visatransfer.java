package com.CucumberDbank.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Visatransfer {

	public static WebDriver driver;
	
	@FindBy(xpath="//input[@id='password']")
	private WebElement psswrd2;
	
	@FindBy(xpath="//button[@id='submit']")
	private WebElement signin2;
	
	@FindBy(xpath="(//a[@class='dropdown-toggle'])[6]")
	private WebElement visadirect;
	
	@FindBy(xpath="//a[text()='VISA Transfer']")
	private WebElement visatransfer;
	
	@FindBy(xpath="//select[@id='extAccount']")
	private WebElement accnum;
	
	@FindBy(xpath="//input[@id='extAmount']")
	private WebElement tamount;
	
	@FindBy(xpath="//button[@class='btn btn-primary btn-sm']")
	private WebElement subtovisa;
	
	
	public Visatransfer(WebDriver ldriver) {
    this.driver=ldriver;
    PageFactory.initElements(driver, this);
	}

	public WebElement getPsswrd2() {
		return psswrd2;
	}

	public WebElement getSignin2() {
		return signin2;
	}

	public WebElement getVisadirect() {
		return visadirect;
	}

	public WebElement getVisatransfer() {
		return visatransfer;
	}

	public WebElement getAccnum() {
		return accnum;
	}

	public WebElement getTamount() {
		return tamount;
	}

	public WebElement getSubtovisa() {
		return subtovisa;
	}
	
}
