Feature: Overall functionality of dbank application

Scenario: user wants to sign up the application
Given user needs to sign up the application
When user click the signup here option 
And user select the title as "Mr"
And user enter the firstname as "Nithiyanantham"
And user enter the lastname as "L"
And user chooses the gender as "M"
And user enter the date of birth as "09/09/1997"
And user enter the social security number as "012345678"
And user enter the email Address as "nithicse033@gmail.com"
And user enter the password  as "Nithi@0917"
And user enter the confirm password  as "Nithi@0917"
And user click the next button
And user enter the address as "6A muthu street"
And user enter the locality as "Chennai"
And user enter the region as "Tamilnadu"
And user enter the postal code as "60000"
And user enter the country as "India"
And user enter the homephone as "(589)859-2348"
And user enter the mobilephone as "(556)549-2898"
And user enter the workphone as "(559)039-3448"
And user click the agree term checkbox
Then user click the register button 

Scenario: user wants to make the visa transfer
Given user wants to sign in to the application
When user enter the password as "Nithi@0917"
And user click the sign in option
And user click the visa direct option
And user click the visa transfer option
And user wants to select the account number
And user enter the amount to transfer
Then user click the submit to visa option




