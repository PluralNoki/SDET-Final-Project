const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Given(/^I am on hotels website$/, async function(){
    await browser.url('/');
});