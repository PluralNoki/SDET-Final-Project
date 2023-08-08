class ListYourPropertyPage{
    
    //--LOCATORS--//

        //Text
    whatWouldYouLikeToList = "//p[contains(text(),'What would you like to list?')]";
    lodging = "//p[contains(text(),'Lodging')]";
    privateResidence = "//p[contains(text(),'Private residence')]";
    step1Of3 = "//div[contains(text(),'Step 1 of 3')]";
    step2Of3 = "//div[contains(text(),'Step 2 of 3')]";
    bedroomCount = "//input[@name='bedroom-count']";
    bathroomCount = "//input[@name='bathroom-count']";
    whereIsYourPropertyLocated = "//h1[contains(text(),'Where is your property located?')]";
    movePinText = "//span[contains(text(),'Move the pin to adjust the location of your proper')]";
        //Buttons
    privateResidenceButton = "//div[@id='classification_privateResidence']";
    increaseBedroomButton = "//button[@aria-label='Increase bedrooms']";
    decreaseBedroomButton = "//button[@aria-label='Decrease bedrooms']";
    increaseBathroomButton = "//button[@aria-label='Increase bathrooms']";
    decreaseBathroomButton = "//button[@aria-label='Decrease bathrooms']";
    nextButton = "//button[@id='propertyInfoNextBtn']";
    firstAutoSuggestAddress = "//ul[@role='menu']/child::li[1]";
        //Inputs
    addressInput = "//input[@id='locationTypeAhead']";
        //Map
    mapElement = "//section[@class='map-section location']";
    pinElement = "//img[@src = 'https://maps.gstatic.com/mapfiles/transparent.png']";

    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//


    //#region Verifiers

    async verifyWhatWouldYouListToListIsDisplayed(){
        return await $(this.whatWouldYouLikeToList).isDisplayed();
    }

    async verifyLodgingIsDisplayed(){
        return await $(this.lodging).isDisplayed();
    }

    async verifyPrivateResidenceIsDisplayed(){
        return await $(this.privateResidence).isDisplayed();
    }

    async verifyStep1Of3IsDisplayed(){
        return await $(this.step1Of3).isDisplayed();
    }

    async verifyStep2Of3IsDisplayed(){
        return await $(this.step2Of3).isDisplayed();
    }

    async verifyWhereIsYourPropertyLocatedIsDisplayed(){
        return await $(this.whereIsYourPropertyLocated).isDisplayed();
    }

    async verifyMapIsDisplayed(){
        const mapDisplay = await $(this.mapElement).waitForDisplayed({timeout: 4000, 
            timeoutMsg: 'Map is not displayed'});
        return await $(this.mapElement).isDisplayed();
    }

    async verifyPinIsDisplayed(){
        return await $(this.pinElement).isDisplayed();
    }

    async verifyMovePinTextIsDisplayed(){
        const pinTextDisplay = await $(this.movePinText).waitForDisplayed({timeout: 4000, 
            timeoutMsg: 'MovePinText is NOT displayed'});
        return await $(this.movePinText).isDisplayed();
    }

    //#endregion

    //#region Clickers

    async clickPrivateResidenceButton(){
        await $(this.privateResidenceButton).click();
    }

    async clickIncreaseBedroomsButton(){
        await $(this.increaseBedroomButton).click();
    }

    async clickDecreaseBedroomsButton(){
        await $(this.decreaseBedroomButton).click(); 
    }

    async clickIncreaseBathroomButton(){
        await $(this.increaseBathroomButton).click();
    }

    async clickDecreaseBathroomButton(){
        await $(this.decreaseBathroomButton).click();
    }

    async clickNextButton(){
        await $(this.nextButton).click();
    }

    async clickFirstAutoSuggestion(){
        await $(this.firstAutoSuggestAddress).click();
    }

    //#endregion

    //#region Setters

    async setBedroomsToAmount(amount){
        const currentBedroomCount = await this.getBedroomCount();

        //We're decreasing
        if(currentBedroomCount>amount){
            for(let i = currentBedroomCount; i != amount; i--){
                await this.clickDecreaseBedroomsButton();
            }
        }
        //We're increasing
        else if(currentBedroomCount<amount){
            for(let i = currentBedroomCount; i != amount; i++){
                await this.clickIncreaseBedroomsButton();
            }
        }
    }

    async setBathroomsToAmount(amount){
        const currentBathroomCount = await this.getBathroomCount();

        //We're decreasing
        if(currentBathroomCount>amount){
            const steps = (currentBathroomCount-amount)*2;
            for(let i = 0; i < steps; i++){
                await this.clickDecreaseBathroomButton();
            }
        }
        //We're increasing
        else if(currentBathroomCount<amount){
            const steps = (amount-currentBathroomCount)*2;
            for(let i = 0; i < steps; i++){
                await this.clickIncreaseBathroomButton();
            }
        }
    }

    async inputAddress(address){
        //Turns out you need to click the address box to enable
        //autosuggestions. Then you can set the value and populate
        //the autosuggestions.

        await $(this.addressInput).click();
        await $(this.addressInput).setValue(address);
    }

    //#endregion
    
    //#region Getters

    async getBedroomCount(){
        return await $(this.bedroomCount).getAttribute('value');
    }

    async getBathroomCount(){
        return await $(this.bathroomCount).getAttribute('value');
    }

    //#endregion


}

module.exports = new ListYourPropertyPage();
