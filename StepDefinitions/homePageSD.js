const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const homepage = require('../Pages/HomePage.js');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Given(/^I am in USA location$/, async function (){
    await homepage.clickEnglishButton();
    await homepage.clickRegionSelector();
    await homepage.clickUSARegion();
    await browser.pause(1500);
    await homepage.clickSaveButton();
    await browser.pause(1500);
});

Given(/^I am in usa region$/, async function(){
    await homepage.clickLanguageSelector();
    await homepage.clickUSARegion();
    await homepage.clickSaveButton();
});

Then(/^I click on the sign up button$/, async function(){    
    await homepage.clickSignUpButton();
});

Then(/^I click on the sign in link$/, async function(){
    await homepage.clickSignInSelector();
});

Then(/^I click on the sign in button$/, async function(){
    await homepage.clickSignInButton();
});

Then(/^I click on List Your Property$/, async function(){   
    await homepage.clickListYourPropertyLink(); 
});

Then(/^I click on English language$/, async function(){
    await homepage.clickEnglishButton();    
});

Then(/^I select French in language dropdown$/, async function(){    
    await homepage.clickLanguageSelector();
    await homepage.clickFrenchInLanguageDropdown();
});

Then(/^I click language selector$/, async function(){
    await homepage.clickLanguageSelector();
});

Then(/^I click spanish language$/, async function(){
    await homepage.clickSpanishInLanguageDropdown();
});

Then(/^I click save button$/, async function(){    
    await homepage.clickSaveButton();
});

Then(/^I verify French is displayed$/, async function(){    
    const frenchIsDisplayed = await homepage.verifyLanguageIsDisplayed("en_FR");
    expect(frenchIsDisplayed, 'French is NOT displayed').to.be.true;
});

Then(/^I verify spanish is displayed$/, async function(){
    const isDispayed = await homepage.verifyLanguageIsDisplayed("es_US");
    expect(isDispayed, 'Spanish is NOT displayed').to.be.true;
});

Then(/^I click on French language$/, async function(){    
    await homepage.clickEnglishButton();
});

Then(/^I click guardar button$/, async function(){
    await homepage.clickGuardarButton();
});

Then(/^I select English in language dropdown$/, async function(){    
    await homepage.clickEnglishInLanguageDropdown();
});

Then(/^I click on Enregistrer button$/, async function(){    
    await homepage.clickEnregistrerButton();
});

Then(/^I verify English is displayed$/, async function(){    
    const englishIsDisplayed = await homepage.verifyLanguageIsDisplayed("en_CA");
    const usaEnglishIsDisplayed = await homepage.verifyLanguageIsDisplayed("en_US");
    expect(englishIsDisplayed || usaEnglishIsDisplayed, 'English is NOT displayed').to.be.true;
});

Then(/^I scroll to Get the app button$/, async function(){  
    await homepage.scrollToGetTheAppButton();  
});

Then(/^I click on Get The App button$/, async function(){
    await homepage.clickGetTheAppButton();
})

Then(/^I search Manhattan, NY$/, async function(){    
    await homepage.searchLocation('Manhattan');
});

Then(/^I enter check-(in|out) date as ([^\"]*)$/, async function(dir, date){
    console.log('And dir is:' + dir);
    if(dir.localeCompare('in')===0){
        console.log('im in the mainframe');
        await homepage.clickDatesButton();
    }
    let splitDate = date.split(/[-]/);

    await homepage.enterCheckInDate(splitDate[0], splitDate[1], splitDate[2]);
});

Then(/^I click search button$/, async function(){    
    await homepage.clickSearchButton();
});

Then(/^I click the date done button$/, async function(){    
    await homepage.clickDateDoneButton();
});

Then(/^I click on support$/, async function(){    
    await homepage.clickSupportLink();
});

Then(/^I click on travelers button$/, async function(){
    await homepage.clickTravelerButton();
});

Then(/^I set (.+) to (.+)$/, async function(string, int){    
    switch(string){
        case 'adults':
            await homepage.setAdults(int);
            break;
        case 'children':
            await homepage.setChildren(int);
            break;
        default:
            break;
    } 
});

Then(/^I click travelers done button$/, async function(){
    return await homepage.clickTravelersDoneButton();
});

Then(/^I click date done button$/, async function(){
    await homepage.clickDateDoneButton();
});

Then(/^I make age of child (.+) to (.+)$/, async function(child, age){
    if(age=='under 1') age = 0;
    await homepage.setChildAge(child,age);
});

Then(/^I verify children-age dropdowns are ([0-9])$/, async function(age){
    const childrenDropdowns = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdowns==age, 'Children Dropdowns are NOT two (as expected)').to.be.true;
});

Then(/^I verify children-age dropdowns aren't displayed$/, async function(){
    const childrenDropdown = await homepage.getAmountOfChildrenAgeDropDowns();
    expect(childrenDropdown==0, 'Children Dropdown are NOT zero').to.be.true;
});

Then(/^I verify plus-button is enabled$/, async function(){    
    const buttonStatus = await homepage.verifyPlusButtonIsEnabled();
    expect(buttonStatus, 'Plus-Button is NOT enabled').to.be.true;
});

Then(/^I verify minus-button is enabled$/, async function(){    
    const buttonStatus = await homepage.verifyMinusButtonIsEnabled();
    expect(buttonStatus, 'Minus-Button is NOT enabled').to.be.true;
});

Then(/^I verify plus-button is disabled$/, async function(){    
    const buttonStatus = await homepage.verifyPlusButtonIsEnabled();
    expect(buttonStatus, 'Plus-Button is NOT disabled').to.be.false;
});

Then(/^I verify minus-button is disabled$/, async function(){    
    const buttonStatus = await homepage.verifyMinusButtonIsEnabled();
    expect(buttonStatus, 'Minus-Button is NOT disabled').to.be.false;
});

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

Then(/^I verify total travelers adds up to (.+)$/, async function(total){
    const isVerified = await homepage.verifyTravelersNumbersAddUp(total); 
    expect(isVerified, "Total travelers doesn't add up to previous steps.").to.be.true;
});

Then(/^I enter (.+) in destination$/, async function(destination){
    await homepage.searchLocation(destination);
});

