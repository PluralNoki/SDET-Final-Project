const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const hotelsSearchPage = require('../Pages/HotelsSearchPage');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click 5 from star-rating$/, async function(){    
    await hotelsSearchPage.clickFiveStarCheckbox();
});

Then(/^I select price from sort-by dropdown$/, async function(){    
    await hotelsSearchPage.clickSortByDropDown();
    await hotelsSearchPage.clickLowToHighPriceSorting();
});

Then(/^I verify all hotels in search results are 5 star$/, async function(){    
    const fiveStarRatings = await hotelsSearchPage.verifyFiveStarRatingsOfPlaces();
    expect(fiveStarRatings).to.be.true;
});

Then(/^I verify all hotels are listed in increasing price order$/, async function(){    
    const inOrder = await hotelsSearchPage.verifyPricesListedLowToHigh();
    expect(inOrder, 'Hotel Prices are NOT in order of lowest to highest').to.be.true;
});

Then(/^I verify Tell Us How We Can Improve Our Site is displayed$/, async function(){    
    const isDisplayed = await hotelsSearchPage.verifyImproveOurFeedbackIsDisplayed();
    expect(isDisplayed, "Tell Us How We Can Improve Our Site is NOT displayed").to.be.true;
});

Then(/^I verify Share Feedback button is displayed and enabled$/, async function(){    
    const isDisplayedAndEnabled = await hotelsSearchPage.verifyShareFeedbackButtonIsDisplayedAndEnabled();
    expect(isDisplayedAndEnabled, "Share Feedback Button is NOT displayed").to.be.true;
});