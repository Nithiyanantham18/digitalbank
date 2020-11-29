package com.CucumberDbank.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Register {

	public static WebDriver driver;
	
	@FindBy(xpath="//a[text()=' Sign Up Here']")
	private WebElement signup;
	
	@FindBy(xpath="//select[@id='title']")
	private WebElement title;
	
	@FindBy(xpath="//input[@id='firstName']")
	private WebElement fname;
	
	@FindBy(xpath="//input[@id='lastName']")
	private WebElement lname;
	
	@FindBy(xpath="//*[@id=\"gender\"]")
	private WebElement gender;
	
	@FindBy(xpath="//input[@id='dob']")
	private WebElement dob;
	
	@FindBy(xpath="//input[@id='ssn']")
	private WebElement ssnum;
	
	@FindBy(xpath="//input[@id='emailAddress']")
	private WebElement email;
	
	@FindBy(xpath="//input[@id='password']")
	private WebElement psswrd;
	
	@FindBy(xpath="//input[@id='confirmPassword']")
	private WebElement cpsswrd;
	
	@FindBy(xpath="//button[text()='Next']")
	private WebElement next;
	
	@FindBy(xpath="//input[@id='address']")
	private WebElement address;
	
	@FindBy(xpath="//input[@id='locality']")
	private WebElement locality;
	
	@FindBy(xpath="//input[@id='region']")
	private WebElement region;
	
	@FindBy(xpath="//input[@id='postalCode']")
	private WebElement postalc;
	
	@FindBy(xpath="//input[@id='country']")
	private WebElement country;
	
	@FindBy(xpath="//input[@id='homePhone']")
	private WebElement hphone;
	
	@FindBy(xpath="//input[@id='mobilePhone']")
	private WebElement mphone;
	
	@FindBy(xpath="//input[@id='workPhone']")
	private WebElement wphone;
	
	@FindBy(xpath="//input[@id='agree-terms']")
	private WebElement chck1;
	
	@FindBy(xpath="//button[text()='Register']")
	private WebElement register;

	
	public Register(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	
	public WebElement getSignup() {
		return signup;
	}

	public WebElement getTitle() {
		return title;
	}

	public WebElement getFname() {
		return fname;
	}

	public WebElement getLname() {
		return lname;
	}

	public WebElement getGender() {
		return gender;
	}

	public WebElement getDob() {
		return dob;
	}

	public WebElement getSsnum() {
		return ssnum;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPsswrd() {
		return psswrd;
	}

	public WebElement getCpsswrd() {
		return cpsswrd;
	}

	public WebElement getNext() {
		return next;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getLocality() {
		return locality;
	}

	public WebElement getRegion() {
		return region;
	}

	public WebElement getPostalc() {
		return postalc;
	}

	public WebElement getCountry() {
		return country;
	}

	public WebElement getHphone() {
		return hphone;
	}

	public WebElement getMphone() {
		return mphone;
	}

	public WebElement getWphone() {
		return wphone;
	}

	public WebElement getChck1() {
		return chck1;
	}

	public WebElement getRegister() {
		return register;
	}
	
}
