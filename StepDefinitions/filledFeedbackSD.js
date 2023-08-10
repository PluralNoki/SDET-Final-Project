const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const customerServicePage = require('../Pages/CustomerServicePage.js');
const commentCardPage = require('../Pages/CommendCardPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I select any overall rating$/, async function(){    
    await commentCardPage.selectAnyOverallRating();
});

Then(/^I select any content rating$/, async function(){
    await commentCardPage.selectAnyContentRating();    
});

Then(/^I select any design rating$/, async function(){
    await commentCardPage.selectAnyDesignRating();    
});

Then(/^I select any ease of use rating$/, async function(){
    await commentCardPage.selectAnyEaseOfUseRating();    
});

Then(/^I verify Thankyou For Your Feedback is displayed$/, async function(){    
});


