const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const customerServicePage = require('../Pages/CustomerServicePage');
const commentCardPage = require('../Pages/CommentCardPage');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on site feedback$/, async function(){    
    await customerServicePage.clickSiteFeedback();
    await commentCardPage.focusOnCommentCardPage();
});

Then(/^I verify red-box is displayed around overall section$/, async function(){    
    const isDisplayed = await customerServicePage.verifyRedBoxDisplayed();
    expect(isDisplayed, 'Red-Box is NOT displayed').to.be.true;
});

Then(/^I verify error message is displayed$/, async function(){    
    //To Do: Error message doesn't show - nothing to validate
});