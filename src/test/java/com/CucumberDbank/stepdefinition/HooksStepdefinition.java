package com.CucumberDbank.stepdefinition;

import java.io.IOException;

import org.junit.After;
import org.junit.Before;

import com.CucumberDbank.baseclass.Baseclass;

import cucumber.api.Scenario;

public class HooksStepdefinition extends Baseclass {

	@Before
	public void beforehooks(Scenario scenario ) {
       System.out.println(scenario.getName());
       System.out.println("Started");
	}

	
	@After
	public void afterhooks(Scenario scenario) throws IOException {
   System.out.println("Status:"+scenario.getStatus());
   
   if(scenario.isFailed()) {
	   String id = scenario.getId();
		System.out.println("scenario id is:"+id);
		screenSht(id);
   }
   System.out.println("   id: "+scenario.getId());
	}
	
	
	
}
