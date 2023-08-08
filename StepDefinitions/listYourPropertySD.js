const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');
const listYourPropertyPage = require('../Pages/ListYourPropertyPage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on List Your Property$/, async function(){   
    await homepage.clickListYourPropertyLink(); 
});

Then(/^I verify What Would You Like To List is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyWhatWouldYouListToListIsDisplayed();
    expect(isDisplayed, 'What Would You Like To List is NOT displayed').to.be.true;
});

Then(/^I verify Lodging is displayed$/, async function(){    
    const lodingDisplayed = await listYourPropertyPage.verifyLodgingIsDisplayed();
    expect(lodingDisplayed, 'Loding is NOT displayed').to.be.true;
});

Then(/^I verify Private Residence is displayed$/, async function(){    
    const privateResidenceDisplayed = await listYourPropertyPage.verifyPrivateResidenceIsDisplayed();
    expect(privateResidenceDisplayed, 'Private Residence is NOT displayed').to.be.true;
});

Then(/^I click on Private Residence$/, async function(){    
    await listYourPropertyPage.clickPrivateResidenceButton();
});

Then(/^I verify Step 1 of 3 is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyStep1Of3IsDisplayed();
    expect(isDisplayed, 'Step 1 of 3 is NOT displayed').to.be.true;
});

Then(/^I enter 4 as bedroom$/, async function(){    
    await listYourPropertyPage.setBedroomsToAmount(4);
});

Then(/^I enter 2.5 as bathroom$/, async function(){
    await listYourPropertyPage.setBathroomsToAmount(2.5);
    await browser.pause(2600);
});

Then(/^I click next$/, async function(){    
    await listYourPropertyPage.clickNextButton();
});

Then(/^I verify Step 2 of 3 is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyStep2Of3IsDisplayed();
    expect(isDisplayed, 'Step 2 of 3 is NOT displayed').to.be.true;
});

Then(/^I verify Where is your property located is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyWhereIsYourPropertyLocatedIsDisplayed();
    expect(isDisplayed, 'Where is your property located? is NOT displayed').to.be.true;
});

Then(/^I enter 121 in address$/, async function(){
    await listYourPropertyPage.inputAddress(121);
});

Then(/^I select 121 West Aparments from auto-suggestion$/, async function(){    
    await listYourPropertyPage.clickFirstAutoSuggestion();
});

Then(/^I verify map is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyMapIsDisplayed();
    expect(isDisplayed, 'Map is NOT displayed').to.be.true;
});

Then(/^I verify pin in map is displayed$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyPinIsDisplayed();
    expect(isDisplayed, 'Pin is NOT displayed').to.be.true;
});

Then(/^I verify Move the pin to adjust the location of your property is displayed below graph$/, async function(){    
    const isDisplayed = await listYourPropertyPage.verifyMovePinTextIsDisplayed();
    expect(isDisplayed, 'MovePinText is NOT displayed').to.be.true;
});

