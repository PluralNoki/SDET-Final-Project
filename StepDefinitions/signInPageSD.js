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

When(/^I enter {string} in email address$/, async function(text){
        await signinpage.enterTextIntoEmailProvider(text);
});