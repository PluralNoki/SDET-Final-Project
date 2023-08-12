const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const customerServicePage = require('../Pages/CustomerServicePage.js');
const commentCardPage = require('../Pages/CommendCardPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I search Manhattan, NY$/, async function(){    
    await homepage.searchLocation('Manhattan, NY');
});

Then(/^I enter check-in date as Feb-10-2024$/, async function(){
    await homepage.enterCheckInDate("February",12,2024);
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});

Then(/^$/, async function(){    
});