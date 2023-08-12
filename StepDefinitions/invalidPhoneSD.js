const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const customerServicePage = require('../Pages/CustomerServicePage.js');
const commentCardPage = require('../Pages/CommendCardPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I scroll to Get the app button$/, async function(){  
    await homepage.scrollToGetTheAppButton();  
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});