//The homepage of this project: https://www.hotels.com/
class HomePage{

    //--LOCATORS--//


        //Buttons and Selectors
    signInSelector = "//button[contains(text(),'Sign in')]";
    signInButton = "//a[@data-stid='link-header-account-signin']";
    travelerButton = "//button[@data-stid='open-room-picker']";
    datesButton = "//button[@id='date_form_field-btn']";
    calendarBackButton = "//div[contains(@class, 'date-picker-menu-pagination')]/child::button[1]";
    calendarForwardButton = "//div[contains(@class, 'date-picker-menu-pagination')]/child::button[2]";
    getTheApp = "//div[@id='mobile-app-download-button']/child::div/child::a";
    goingToButton = "//button[@aria-label='Going to']";
        //Children
    increaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[2]";
    decreaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[1]";
    currentChildCountElement = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::input";
    //Returns an array of currently displayed children
    childrenDropdown = '//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]/*'
        //Language
    englishButton = "//button[@data-stid='button-type-picker-trigger']";
    languageSelector = "//select[@id='language-selector']";
    frenchSelector =  "//option[@value='fr_CA']";
    englishSelector = "//option[@value='en_CA']";
    saveButton = "//button[text()='Save']";
    enregistrerButton = "//button[text()='Enregistrer']";
        //List Your Property
    listYourPropertyLink = "//a[contains(@aria-label, 'List your property')]";
        //Support
    supportLink = "//a[@id='support-cs']";
        //Dates
    disabledDates = "//button[@class='uitk-date-picker-day is-disabled']";
        //Text
    leftDate = "//div[@class='uitk-date-picker-menu-months-container']/child::div[1]/child::h2";
    desinationOptions = "//button[@class='uitk-button uitk-button-medium uitk-button-fullWidth has-subtext destination_form_field-result-item-button result-item-button']";
        //Input
    destinationInput = "//input[@data-stid='destination_form_field-menu-input']";

    
    
    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//
    

    //#region Setters

    async enterChildren(amountOfChildren){
        //We need to know how many children have already been entered
        const currentChildren = await this.getCurrentChildCount();

        //We need to change the number to match the desired amount of children
            //We have more children than we want - decrease them
        if(currentChildren > amountOfChildren){
            for(let i = currentChildren; i != amountOfChildren; i--){
                await this.clickDecreaseChildrenButton();
            }
        }
            //We have less children than we want - increase them
        else if (amountOfChildren > currentChildren){
            for(let i = currentChildren; i != amountOfChildren; i++){
                await this.clickIncreaseChildrenButton();
            }
        }
    }

    async setCalendarToCurrentMonth(){
        //In short, press the back button till it's disabled
        if(!$(this.calendarBackButton).isClickable()){
            console.error("NOT CLICKABLE");
            return;
        }

        while(await $(this.calendarBackButton).isClickable()){
            console.error("WHY IS IT CLICKABLE");
            await $(this.calendarBackButton).click();
        }
    }

    async enterPhoneNumber(number){
        //unfinished - waiting for response from teacher
        //associated with invalidPhone feature
    }

    async enterCheckInDate(desiredMonth, desiredDay, desiredYear){
        await $(this.datesButton).click();

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
            console.log("Desired year is " + desiredYear + " and current year is " + year);
        }

        //Get to month
        if(desiredMonth>month){
            let currentMonth = "0";
            let htmlText;
            while(currentMonth!=desiredMonth){
                htmlText = await $(this.leftDate).getHTML(false);
                currentMonth = htmlText.split(" ")[0];
                if(currentMonth==desiredMonth){
                    break;
                }
                else{
                    await $(this.calendarForwardButton).click();
                }
            }
        }

        

    }


    async searchLocation(location){
        await $(this.goingToButton).click();
        await $(this.destinationInput).setValue(location);
        await browser.pause(2000);
        for await (const elm of $$("//button[class='uitk-button uitk-button-medium uitk-button-fullWidth has-subtext destination_form_field-result-item-button result-item-button']")){
            console.log(await elm.getAttribute('aria-label'));
            const text = await elm.getAttribute('aria-label');
            if(text.contains(location)){
                await elm.click();
                console.log("BROKEN");
                break;
            }
        }
    }

    //#endregion

    //#region Clickers

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
        return await $(this.signInButton).click();
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

    //#endregion
    
    //#region Getters

    async getAmountOfChildrenAgeDropDowns(){
        const children = await $$(this.childrenDropdown);
        return children.length;
    }

    async getCurrentChildCount(){
        const currentCount = $(this.currentChildCountElement).getAttribute('value');
        console.log(currentCount);
        return currentCount;
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

    //#endregion

    //#region Scrollers

    async scrollToGetTheAppButton(){
        const button = await $(this.getTheApp);
        await button.scrollIntoView(false);
    }

    //#endregion

}

module.exports = new HomePage();