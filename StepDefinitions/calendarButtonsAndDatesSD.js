const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on Dates$/, async function(){    
    await homepage.clickOnDates();
});

Then(/^I go to current month if not displayed$/, async function(){    
    await homepage.setCalendarToCurrentMonth();
});

Then(/^I verify past dates are disabled$/, async function(){    
    const verified = await homepage.verifyPastDatesAreDisabled();
    expect(verified, 'There is a problem with disabled dates and current date.').to.be.true;
});

Then(/^I verify back button on current month is disabled$/, async function(){ 
       const disabled = await homepage.verifyBackButtonOfCurrentMonthIsDisabled();
       expect(disabled, 'Back button of current month is NOT disabled.').to.be.true;
});
