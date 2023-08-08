const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const customerServicePage = require('../Pages/CustomerServicePage.js');
const commentCardPage = require('../Pages/CommendCardPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on support$/, async function(){    
    await homepage.clickSupportLink();
});

Then(/^I click on site feedback$/, async function(){    
    await customerServicePage.clickSiteFeedback();
    await commentCardPage.focusOnCommentCardPage();
});

Then(/^I click on submit$/, async function(){    
    await commentCardPage.clickSubmit();
});

Then(/^I verify error message is displayed$/, async function(){    

});

Then(/^I verify red-box is displayed around overall section$/, async function(){    
    const isDisplayed = await customerServicePage.verifyRedBoxDisplayed();
    expect(isDisplayed, 'Red-Box is NOT displayed').to.be.true;
});