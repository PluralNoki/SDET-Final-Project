const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const hotelsSearchPage = require('../Pages/HotelsSearchPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I search Manhattan, NY$/, async function(){    
    await homepage.searchLocation('Manhattan');
});

Then(/^I enter check-in date as Feb-10-2024$/, async function(){
    await homepage.clickDatesButton();
    await homepage.enterCheckInDate("February",12,2024);
});

Then(/^I enter check-out date as Feb-16-2024$/, async function(){    
    await homepage.enterCheckInDate("February", 16, 2024);
});

Then(/^I click search button$/, async function(){    
    await homepage.clickDateDoneButton();
    await homepage.clickSearchButton();
});

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