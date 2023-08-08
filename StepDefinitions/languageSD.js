const {Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I click on English language$/, async function(){
    await homepage.clickEnglishButton();    
});

Then(/^I select French in language dropdown$/, async function(){    
    await homepage.clickLanguageSelector();
    await homepage.clickFrenchInLanguageDropdown();
});

Then(/^I click save button$/, async function(){    
    await homepage.clickSaveButton();
});

Then(/^I verify French is displayed$/, async function(){    
    const frenchIsDisplayed = await homepage.verifyFrenchIsDisplayed();
    expect(frenchIsDisplayed, 'French is NOT displayed').to.be.true;
});

Then(/^I click on French language$/, async function(){    
    await homepage.clickEnglishButton();
});

Then(/^I select English in langauge dropdown$/, async function(){    
    await homepage.clickEnglishInLanguageDropdown();
});

Then(/^I click on Enregistrer button$/, async function(){    
    await homepage.clickEnregistrerButton();
});

Then(/^I verify English is displayed$/, async function(){    
    const englishIsDisplayed = await homepage.verifyEnglishIsDisplayed();
    expect(englishIsDisplayed, 'English is NOT displayed').to.be.true;
});