const {Given, Then, When} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const signinpage = require('../Pages/SignInPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I enter an invalid email address$/, async function(){
    await signinpage.enterTextIntoEmailProvider('hullabaloo');
});

Then(/^I click on the continue button$/, async function(){
    await signinpage.clickContinueButton();
    await browser.pause(3000);
});

Then(/^I verify error message is displayed$/, async function(){
    const errorMessageIsEnabled = await signinpage.confirmErrorMessageExists();
    expect(errorMessageIsEnabled, 'Error Message is NOT showing').to.be.true;
});

When(/^I enter (.+) in email address$/, async function(text){
        await signinpage.enterTextIntoEmailProvider(text);
});

Then(/^I click One Key Rewards Terms and Conditions link$/, async function(){
    await signinpage.clickOneKeyTermsAndConditionsLink();
});

Then(/^I enter (.+) in (First|Last) name $/, async function(enter, name){
    //not working
});

Then(/^I click signin continue button$/, async function(){
    await signinpage.clickContinueButton();    
});

Then(/^I verify Enter A Valid Email is displayed$/, async function(){   
     const isDisplayed = await signinpage.verifyErrorMessage();
     expect(isDisplayed, "Error Message NOT displayed").to.be.true;
});

Then(/^I verify continue button is enabled$/, async function(){    
    const isEnabled = await signinpage.verifyContinueButtonIsEnabled();
     expect(isEnabled, "Continue Button is NOT enabled").to.be.true;
});

