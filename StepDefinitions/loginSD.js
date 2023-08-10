const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const signinpage = require('../Pages/SignInPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Given(/^I am on hotels website$/, async function(){
    await browser.url('/');
});

Then(/^I click on the sign in link$/, async function(){
    await homepage.clickSignInSelector();
});

Then(/^I click on the sign in button$/, async function(){
    await homepage.clickSignInButton();
});

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