package com.CucumberDbank.stepdefinition;

import com.CucumberDbank.Helper.PageObjectManager;
import com.CucumberDbank.baseclass.Baseclass;
import com.CucumberDbank.pom.Visatransfer;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class VisatransferStepdefinition extends Baseclass {
	PageObjectManager pom=new PageObjectManager(driver);
	
	@Given("^user wants to sign in to the application$")
	public void user_wants_to_sign_in_to_the_application() throws Throwable {
	   
	}

	@When("^user enter the password as \"([^\"]*)\"$")
	public void user_enter_the_password_as(String arg1) throws Throwable {
	    inputValueElement(pom.getVt().getPsswrd2(), "Nithi@0917");
	}

	@When("^user click the sign in option$")
	public void user_click_the_sign_in_option() throws Throwable {
	   clickOnElement(pom.getVt().getSignin2());
	}

	@When("^user click the visa direct option$")
	public void user_click_the_visa_direct_option() throws Throwable {
	   clickOnElement(pom.getVt().getVisadirect());
	}

	@When("^user click the visa transfer option$")
	public void user_click_the_visa_transfer_option() throws Throwable {
	  clickOnElement(pom.getVt().getVisatransfer());
	}

	@When("^user wants to select the account number$")
	public void user_wants_to_select_the_account_number() throws Throwable {
	   Dropdown(pom.getVt().getAccnum(), "Value", "ABCD1234ABCD456");
	}
	
	@When("^user enter the amount to transfer$") 
	public void user_enter_the_amount_to_transfer() throws Throwable {
	    inputValueElement(pom.getVt().getTamount(), "250");
	}

	@Then("^user click the submit to visa option$")
	public void user_click_the_submit_to_visa_option() throws Throwable {
	  clickOnElement(pom.getVt().getSubtovisa());
	  Assert.assertEquals(true, false);
	}


}
