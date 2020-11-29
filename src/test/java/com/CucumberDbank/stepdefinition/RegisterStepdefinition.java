package com.CucumberDbank.stepdefinition;

import com.CucumberDbank.Helper.PageObjectManager;
import com.CucumberDbank.baseclass.Baseclass;
import cucumber.api.java.en.*;

public class RegisterStepdefinition extends Baseclass {
         PageObjectManager pom=new PageObjectManager(driver);	
         
	@Given("^user needs to sign up the application$")
	public void user_needs_to_sign_up_the_application() throws Throwable {
	   getUrl("http://dbankdemo.com/login");
	}

	@When("^user click the signup here option$")
	public void user_click_the_signup_here_option() throws Throwable {
	    clickOnElement(pom.getR().getSignup());
	}

	@When("^user select the title as \"([^\"]*)\"$")
	public void user_select_the_title_as(String arg1) throws Throwable {
	    Dropdown(pom.getR().getTitle(), "Value", "Mr.");
	}

	@When("^user enter the firstname as \"([^\"]*)\"$")
	public void user_enter_the_firstname_as(String arg1) throws Throwable {
	   inputValueElement(pom.getR().getFname(), "Nithiyanantham");
	}

	@When("^user enter the lastname as \"([^\"]*)\"$")
	public void user_enter_the_lastname_as(String arg1) throws Throwable {
	    inputValueElement(pom.getR().getLname(), "L");
	}

	@When("^user chooses the gender as \"([^\"]*)\"$")
	public void user_chooses_the_gender_as(String arg1) throws Throwable {
	   clickOnElement(pom.getR().getGender());
	}

	@When("^user enter the date of birth as \"([^\"]*)\"$")
	public void user_enter_the_date_of_birth_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getDob(), "09/09/1997");
	}

	@When("^user enter the social security number as \"([^\"]*)\"$")
	public void user_enter_the_social_security_number_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getSsnum(), "015289456");
	}

	@When("^user enter the email Address as \"([^\"]*)\"$")
	public void user_enter_the_email_Address_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getEmail(), "nithics@gmail.com");
	}

	@When("^user enter the password  as \"([^\"]*)\"$")
	public void user_enter_the_password_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getPsswrd(), "Nithi@0917");
	}

	@When("^user enter the confirm password  as \"([^\"]*)\"$")
	public void user_enter_the_confirm_password_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getCpsswrd(), "Nithi@0917");
	}

	@When("^user click the next button$")
	public void user_click_the_next_button() throws Throwable {
	   clickOnElement(pom.getR().getNext());
	}

	@When("^user enter the address as \"([^\"]*)\"$")
	public void user_enter_the_address_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getAddress(), "6A muthu street");

	}

	@When("^user enter the locality as \"([^\"]*)\"$")
	public void user_enter_the_locality_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getLocality(), "Chennai");

	}

	@When("^user enter the region as \"([^\"]*)\"$")
	public void user_enter_the_region_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getRegion(), "Tamilnadu");

	}

	@When("^user enter the postal code as \"([^\"]*)\"$")
	public void user_enter_the_postal_code_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getPostalc(), "60000");

	}

	@When("^user enter the country as \"([^\"]*)\"$")
	public void user_enter_the_country_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getCountry(), "India");

	}

	@When("^user enter the homephone as \"([^\"]*)\"$")
	public void user_enter_the_homephone_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getHphone(), "(589)839-2348");

	}

	@When("^user enter the mobilephone as \"([^\"]*)\"$")
	public void user_enter_the_mobilephone_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getMphone(), "(556)579-2898");

	}

	@When("^user enter the workphone as \"([^\"]*)\"$")
	public void user_enter_the_workphone_as(String arg1) throws Throwable {
		inputValueElement(pom.getR().getWphone(), "(559)069-3448");

	}

	@When("^user click the agree term checkbox$")
	public void user_click_the_agree_term_checkbox() throws Throwable {
	clickOnElement(pom.getR().getChck1());
	}

	@Then("^user click the register button$")
	public void user_click_the_register_button() throws Throwable {
	   clickOnElement(pom.getR().getRegister());
	}


	
	
}
