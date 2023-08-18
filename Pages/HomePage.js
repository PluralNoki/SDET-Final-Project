//The homepage of this project: https://www.hotels.com/
class HomePage{

    //--LOCATORS--//

        //Buttons and Selectors
    signInSelector = "//button[contains(text(),'Sign in')]";
    signInButton = "//a[@data-stid='link-header-account-signin']";
    signUpButton = "//a[@data-stid='link-header-account-signup']";
    travelerButton = "//button[@data-stid='open-room-picker']";
    datesButton = "//button[@id='date_form_field-btn']";
    calendarBackButton = "//div[contains(@class, 'date-picker-menu-pagination')]/child::button[1]";
    calendarForwardButton = "//div[contains(@class, 'date-picker-menu-pagination')]/child::button[2]";
    getTheApp = "//div[@id='mobile-app-download-button']/child::div/child::a";
    goingToButton = "//button[@aria-label='Going to']";
    dateDoneButton = "//button[@data-stid='apply-date-picker']";
    searchButton = "//button[@id='search_button']";
    increaseAdultCount = "//input[@id='traveler_selector_adult_step_input-0']/preceding-sibling::button";
    decreaseAdultCount = "//input[@id='traveler_selector_adult_step_input-0']/following-sibling::button";
    increaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[2]";
    decreaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[1]";
    travelersDoneButton = "//button[@id='traveler_selector_done_button']";
        //Returns an array of currently displayed children
    childrenDropdown = '//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]/*'
        //Language
    englishButton = "//button[@data-stid='button-type-picker-trigger']";
    languageSelector = "//select[@id='language-selector']";
    frenchSelector =  "//option[@value='fr_CA']";
    englishSelector = "//option[@value='en_CA']";
    saveButton = "//button[text()='Save']";
    enregistrerButton = "//button[text()='Enregistrer']";
    regionSelector = "//select[@id='site-selector']";
    usaRegion = "//select[@id='site-selector']/child::option[@value='300000001']";
        //List Your Property
    listYourPropertyLink = "//a[contains(@aria-label, 'List your property')]";
        //Support
    supportLink = "//a[@id='support-cs']";
        //Dates
    disabledDates = "//button[@class='uitk-date-picker-day is-disabled']";
    leftMonthDateButtons = "//div[@class='uitk-date-picker-menu-months-container']/child::div[1]/child::table/child::tbody/descendant::button";
    leftMonthDateButtons = "//div[@class='uitk-date-picker-menu-months-container']/child::div[2]/child::table/child::tbody/descendant::button";
    rightMonth = "//div[@class='uitk-date-picker-menu-months-container']/child::div[1]";
        //Text
    leftDate = "//div[@class='uitk-date-picker-menu-months-container']/child::div[1]/child::h2";
    desinationOptions = "//button[@class='uitk-button uitk-button-medium uitk-button-fullWidth has-subtext destination_form_field-result-item-button result-item-button']";
    adultCountElement = "//input[@id='traveler_selector_adult_step_input-0']";
    childCountElement = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::input";
    travelersText= "//input[@class='uitk-field-input is-hidden']";
        //Input
    destinationInput = "//input[@data-stid='destination_form_field-menu-input']";

    
    
    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//
    

    //#region Setters

    async setChildren(desiredChildCount){
        let currentChildCount = await $(this.childCountElement).getAttribute('value');
        while(currentChildCount!=desiredChildCount){
            currentChildCount = await $(this.childCountElement).getAttribute('value');
            if(desiredChildCount>currentChildCount){
                await $(this.increaseChildrenCountButton).click();
            }
            else if(desiredChildCount<currentChildCount){
                await $(this.decreaseChildrenCountButton).click();
            }
            else break;
        }
    }

    async setAdults(adultCount){
        let currentAdultCount = await $(this.adultCountElement).getAttribute('value');
        while(currentAdultCount!=adultCount){
            currentAdultCount = await $(this.adultCountElement).getAttribute('value');
            if(adultCount<currentAdultCount){
                await $(this.increaseAdultCount).click();
            }
            else if(adultCount>currentAdultCount){
                await $(this.decreaseAdultCount).click();
            }
            else break;
        }
    }

    async setChildAge(child, age){
        const ageButton =  await $(`//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]/child::div[${child}]//child::option[@value="${age}"]`);
        await ageButton.click();
    }

    async setCalendarToCurrentMonth(){
        //In short, press the back button till it's disabled
        if(!$(this.calendarBackButton).isClickable()){
            return;
        }

        while(await $(this.calendarBackButton).isClickable()){
            await $(this.calendarBackButton).click();
        }
    }

    async enterPhoneNumber(number){
        //unfinished - waiting for response from teacher
        //associated with invalidPhone feature
    }

    async enterCheckInDate(desiredMonth, desiredDay, desiredYear){
        const leftDisplayedYear = await $(this.leftDate);
        const leftDisplayYearText = await leftDisplayedYear.getText();
        let dateDisplay = leftDisplayYearText.split(" ");
        let month = dateDisplay[0];
        let year = dateDisplay[1];

        //Get to year
        if(desiredYear>year){

            let currentYear = 1900;
            let htmlText;
            while(currentYear!=desiredYear){
                htmlText = await $(this.leftDate).getHTML(false);
                currentYear = await htmlText.split(" ")[1];
                if(currentYear.localeCompare(desiredYear)===true){
                    break;
                }
                else{
                    await $(this.calendarForwardButton).click();
                }
            }
        }
        else{
        }

        //Get to month
        if(desiredMonth>month){
            let currentMonth = "0";
            let htmlText;
            while(currentMonth!=desiredMonth){
                htmlText = await $(this.leftDate).getText(false);
                currentMonth = htmlText.split(" ")[0];
                if(currentMonth==desiredMonth){
                    break;
                }
                else{
                    await $(this.calendarForwardButton).click();
                }
            }
        }

        const leftMonthDates = await $$(this.leftMonthDateButtons);
        let dateFound = false;
        for(let elm of leftMonthDates){
            const day = await elm.getAttribute('data-day');
            if(day==desiredDay){
                await $(elm).click();
                dateFound = true;
                break;
            }
        }
        if(dateFound) return;
        const rightMonthDates = await $$(this.leftMonthDateButtons);
        for(let elm of rightMonthDates){
            const day = await elm.getAttribute('data-day');
            if(day==desiredDay){
                await $(elm).click();
                dateFound = true;
                break;
            }
        }

    }

    async searchLocation(location){
        await $(this.goingToButton).click();
        await $(this.destinationInput).setValue(location);
        
        await browser.waitUntil( async () =>{
            const opts = await $$(this.desinationOptions);
            return opts.length>0;
        }, {
            timeout: 3500,
            timeoutMsg: 'Options did not appear'
        });

        for await (const elm of $$(this.desinationOptions)){
            const text = await elm.getAttribute('aria-label');
            if(text.includes(location)){
                await elm.click();
                break;
            }
        }
    }

    //#endregion

    //#region Clickers

    async clickUSARegion(){
        return await $(this.usaRegion).click();
    }

    async clickRegionSelector(){
        return await $(this.regionSelector).click();
    }

    async clickIncreaseChildrenButton(){
        return await $(this.increaseChildrenCountButton).click();
    }

    async clickDecreaseChildrenButton(){
        return await $(this.decreaseChildrenCountButton).click();
    }

    async clickSignInSelector(){
        return await $(this.signInSelector).click();
    }

    async clickSignInButton(){
        await $(this.signInButton).waitForClickable();
        return await $(this.signInButton).click();
    }

    async clickSignUpButton(){
        return await $(this.signUpButton).click();
    }

    async clickTravelerButton(){
        return await $(this.travelerButton).click();
    }

    async clickEnglishButton(){
        return await $(this.englishButton).click();
    }

    async clickLanguageSelector(){
        return await $(this.languageSelector).click();
    }

    async clickFrenchInLanguageDropdown(){
        return await $(this.frenchSelector).click();
    }

    async clickEnglishInLanguageDropdown(){
        return await $(this.englishSelector).click();
    }

    async clickSaveButton(){
        return await $(this.saveButton).click();
    }

    async clickEnregistrerButton(){
        return await $(this.enregistrerButton).click();
    }

    async clickTravelersDoneButton(){
        return await $(this.travelersDoneButton).click();
    }

    async clickListYourPropertyLink(){
        await $(this.listYourPropertyLink).click();

        const allHandles = await browser.getWindowHandles();

        for(const handle of allHandles){
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if(title.localeCompare('Property Info - Join Expedia')===0){
                break;
            }
        }
    }

    async clickSupportLink(){
        await $(this.supportLink).click();
    }

    async clickOnDates(){
        await $(this.datesButton).click();
    }

    async clickDateDoneButton(){
        await $(this.dateDoneButton).click();
    }

    async clickSearchButton(){
        await $(this.searchButton).click();
    }

    async clickDatesButton(){
        await $(this.datesButton).click();
    }

    async clickGetTheAppButton(){
        await $(this.getTheApp).click();
    }

    //#endregion
    
    //#region Getters

    async getAmountOfChildrenAgeDropDowns(){
        const children = await $$(this.childrenDropdown);
        return children.length;
    }

    async getLanguageDisplayed(){
        const lang = await $("//html").getAttribute("data-language"); 
        return lang;
    }

    //#endregion

    //#region Verifiers

    async verifyPlusButtonIsEnabled(){
        const button = await $(this.increaseChildrenCountButton);
        return button.isEnabled();
    }

    async verifyMinusButtonIsEnabled(){
        const button = await $(this.decreaseChildrenCountButton);
        return button.isEnabled();
    }

    async verifyFrenchIsDisplayed(){
        const language = await this.getLanguageDisplayed();
        if(language=='fr_CA'){
            return true;
        }
        else return false;
    }

    async verifyEnglishIsDisplayed(){
        const language = await this.getLanguageDisplayed();
        if(language=="en_CA"){
            return true;
        }
        else return false;
    }

    async verifyPastDatesAreDisabled(){
        //Current date
        let date = new Date().getDate();

        //All disabled dates
        const disabledDatesElements = await $$(this.disabledDates);

        //Getting the date of each element
        let disabledDatesArray = [];

        for(let i = 0; i < disabledDatesElements.length; i++){
            let item = disabledDatesElements[i];
            disabledDatesArray.push(await item.getAttribute('data-day'));
        }

        //Yesterday, should be the highest number in the disabled dates list
        date--;

        //Verify above statement
        const highestDate = Math.max(...disabledDatesArray);

        if(date==highestDate){
            return true;
        }
        else return false;
    }

    async verifyBackButtonOfCurrentMonthIsDisabled(){
        const enabled = !await $(this.calendarBackButton).isEnabled();
        return enabled;
    }

    async verifyDatesFieldIsExpanded(){

    }

    async verifyTravelersNumbersAddUp(totalShouldBe){
        let total = 0;
        const text = await $(this.travelersText).getAttribute('value');
        const textArray = text.split(" ");
        const textTotalTravelers = textArray[0];
        if(totalShouldBe==textTotalTravelers) return true;
        return false;
    }

    //#endregion

    //#region Scrollers

    async scrollToGetTheAppButton(){
        const button = await $(this.getTheApp);
        await button.scrollIntoView(false);
    }

    //#endregion

}

module.exports = new HomePage();