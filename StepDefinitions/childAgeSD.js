const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on travelers button$/, async function(){
    await homepage.clickTravelerButton();
});

Then(/^I set children to 0$/, async function(){
    await homepage.enterChildren(0);
    await browser.pause(2000);
});

Then(/^I set children to 2$/, async function(){
    await homepage.enterChildren(2);
    await browser.pause(2000);
});

Then(/^I set children to 5$/, async function(){
    await homepage.enterChildren(5);
    await browser.pause(2000);
});

Then(/^I set children to 6$/, async function(){
    await homepage.enterChildren(6);
    await browser.pause(2000);
});

Then(/^I verify children-age dropdowns are 2$/, async function(){
    const childrenDropdowns = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdowns==2, 'Children Dropdowns are NOT two (as expected)').to.be.true;
});

Then(/^I verify children-age dropdowns are 5$/, async function(){
    const childrenDropdowns = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdowns==5, 'Children Dropdowns are NOT five (as expected)').to.be.true;
});

Then(/^I verify children-age dropdowns are 6$/, async function(){
    const childrenDropdowns = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdowns==6, 'Children Dropdowns are NOT six (as expected)').to.be.true;
});

Then(/^I verify children-age dropdowns are not displayed$/, async function(){
    const childrenDropdown = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdown==0, 'Children Dropdown are NOT zero').to.be.true;
});

Then(/^I verify plus-button is enabled$/, async function(){    
    const buttonStatus = await homepage.verifyPlusButtonIsEnabled();
    expect(buttonStatus, 'Plus-Button is NOT enabled').to.be.true;
});

Then(/^I verify minus-button is enabled$/, async function(){    
    const buttonStatus = await homepage.verifyMinusButtonIsEnabled();
    expect(buttonStatus, 'Minus-Button is NOT enabled').to.be.true;
});

Then(/^I verify plus-button is disabled$/, async function(){    
    const buttonStatus = await homepage.verifyPlusButtonIsEnabled();
    expect(buttonStatus, 'Plus-Button is NOT disabled').to.be.false;
});

Then(/^I verify minus-button is disabled$/, async function(){    
    const buttonStatus = await homepage.verifyMinusButtonIsEnabled();
    expect(buttonStatus, 'Minus-Button is NOT disabled').to.be.false;
});



/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/
