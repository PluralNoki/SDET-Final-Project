const {Given, Then, When} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const termsAndConditions = require('../Pages/TermAndConditionsPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I verify One Key Rewards Terms and Conditions heading is displayed$/, async function(){    
    await browser.pause(5000);
    const displayed = await termsAndConditions.verifyOneKeyRewardsHeadingIsDisplayed();
    expect(displayed, 'One Key Rewards Terms and Conditions is NOT displayed').to.be.true;
});