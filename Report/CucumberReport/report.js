$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Dbank.feature");
formatter.feature({
  "line": 1,
  "name": "Overall functionality of dbank application",
  "description": "",
  "id": "overall-functionality-of-dbank-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user wants to sign up the application",
  "description": "",
  "id": "overall-functionality-of-dbank-application;user-wants-to-sign-up-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user needs to sign up the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click the signup here option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select the title as \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter the firstname as \"Nithiyanantham\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter the lastname as \"L\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user chooses the gender as \"M\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter the date of birth as \"09/09/1997\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter the social security number as \"012345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter the email Address as \"nithicse033@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter the password  as \"Nithi@0917\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter the confirm password  as \"Nithi@0917\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click the next button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter the address as \"6A muthu street\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter the locality as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enter the region as \"Tamilnadu\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enter the postal code as \"60000\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enter the country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter the homephone as \"(589)859-2348\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enter the mobilephone as \"(556)549-2898\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enter the workphone as \"(559)039-3448\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click the agree term checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user click the register button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepdefinition.user_needs_to_sign_up_the_application()"
});
formatter.result({
  "duration": 50313955300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefinition.user_click_the_signup_here_option()"
});
formatter.result({
  "duration": 99179374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 26
    }
  ],
  "location": "RegisterStepdefinition.user_select_the_title_as(String)"
});
formatter.result({
  "duration": 5957648600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 85.0.4183.83 (94abc2237ae0c..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:1133}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d4ffa74bc0649aaefd3ac8a0cdf01c29\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.CucumberDbank.baseclass.Baseclass.Dropdown(Baseclass.java:89)\r\n\tat com.CucumberDbank.stepdefinition.RegisterStepdefinition.user_select_the_title_as(RegisterStepdefinition.java:22)\r\n\tat ✽.And user select the title as \"Mr\"(Dbank.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithiyanantham",
      "offset": 29
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_firstname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 28
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_lastname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 28
    }
  ],
  "location": "RegisterStepdefinition.user_chooses_the_gender_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "09/09/1997",
      "offset": 33
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_date_of_birth_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "012345678",
      "offset": 42
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_social_security_number_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nithicse033@gmail.com",
      "offset": 33
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_email_Address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@0917",
      "offset": 29
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@0917",
      "offset": 37
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_confirm_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepdefinition.user_click_the_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6A muthu street",
      "offset": 27
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 28
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_locality_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamilnadu",
      "offset": 26
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_region_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 31
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_postal_code_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 27
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_country_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(589)859-2348",
      "offset": 29
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_homephone_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(556)549-2898",
      "offset": 31
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_mobilephone_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(559)039-3448",
      "offset": 29
    }
  ],
  "location": "RegisterStepdefinition.user_enter_the_workphone_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepdefinition.user_click_the_agree_term_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepdefinition.user_click_the_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "user wants to make the visa transfer",
  "description": "",
  "id": "overall-functionality-of-dbank-application;user-wants-to-make-the-visa-transfer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user wants to sign in to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enter the password as \"Nithi@0917\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click the sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user click the visa direct option",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click the visa transfer option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user wants to select the account number",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the amount to transfer",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user click the submit to visa option",
  "keyword": "Then "
});
formatter.match({
  "location": "VisatransferStepdefinition.user_wants_to_sign_in_to_the_application()"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@0917",
      "offset": 28
    }
  ],
  "location": "VisatransferStepdefinition.user_enter_the_password_as(String)"
});
formatter.result({
  "duration": 6108120000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 85.0.4183.83 (94abc2237ae0c..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:1133}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d4ffa74bc0649aaefd3ac8a0cdf01c29\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027password\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.CucumberDbank.baseclass.Baseclass.inputValueElement(Baseclass.java:109)\r\n\tat com.CucumberDbank.stepdefinition.VisatransferStepdefinition.user_enter_the_password_as(VisatransferStepdefinition.java:20)\r\n\tat ✽.When user enter the password as \"Nithi@0917\"(Dbank.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_click_the_sign_in_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_click_the_visa_direct_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_click_the_visa_transfer_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_wants_to_select_the_account_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_enter_the_amount_to_transfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisatransferStepdefinition.user_click_the_submit_to_visa_option()"
});
formatter.result({
  "status": "skipped"
});
});