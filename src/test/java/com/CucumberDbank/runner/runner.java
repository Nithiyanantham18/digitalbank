package com.CucumberDbank.runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.CucumberDbank.Helper.FileReaderManager;
import com.CucumberDbank.baseclass.Baseclass;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@ExtendedCucumberOptions(retryCount=4)

@CucumberOptions(features="src\\test\\java\\com\\CucumberDbank\\feature",
                   glue="com\\CucumberDbank\\stepdefinition",
                   plugin= {"pretty","html:Report\\CucumberReport","json:Report\\Cucumber.json",
                		   "com.cucumber.listener.ExtentCucumberFormatter:Reports/Extend_Report.html",
                             "rerun:Report2/FailedScenario.txt"},
                   monochrome = true)






public class runner {
	
public static WebDriver driver;

@BeforeClass
public static void setup() throws IOException {
	  String browsername = FileReaderManager.getInstance().getCrInstance().getBrowsername();
	driver=Baseclass.Browser(browsername);
}
}
