class HotelsSearchPage {
    //--LOCATORS--//

        //checkBoxes
    fiveStarCheckbox = "//input[@id='ShoppingSelectableFilterOption-star-50']/parent::div";
        //dropdown
    sortBy = "//select[@id='sort-filter-dropdown-sort']";
        //options
    sortByLowToHighPrice = "//option[@value='PRICE_LOW_TO_HIGH']";
        //misc
    pricesOfPlaces = "//div[@class='uitk-text uitk-type-500 uitk-type-medium uitk-text-emphasis-theme']";
    ratingsOfPlaces = "//div[@data-stid='property-listing-results']//child::div[@class='uitk-rating']/child::span";

    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//

    //#region Clickers

    async clickFiveStarCheckbox(){
        await $(this.fiveStarCheckbox).click();
    }

    async clickSortByDropDown(){
        await $(this.sortBy).click();
    }

    async clickLowToHighPriceSorting(){
        await $(this.sortByLowToHighPrice).click();
    }

    //#endregion
    
    //#region Verifiers

    async verifyPricesListedLowToHigh(){
        await $("//div[@data-stid='property-listing-results']").waitForExist({
            timeout: 5000,
            timeoutMsg: 'Prices Parent did not exist after 5 seconds.'
        });

        const propertyParent = await $$("//div[@data-stid='property-listing-results']/div");
        await browser.waitUntil(async()=>{
            return await propertyParent.length>0;
        });

        let previousPrice = await $(`//div[@data-stid='property-listing-results']/child::div[@class='uitk-spacing uitk-spacing-margin-blockstart-three'][1]//div[@class='uitk-text uitk-type-500 uitk-type-medium uitk-text-emphasis-theme']`).getText();
        for(let i = 1; i < 12; i++){
            const sibling = await $(`//div[@data-stid='property-listing-results']/child::div[@class='uitk-spacing uitk-spacing-margin-blockstart-three'][${i}]//div[@class='uitk-text uitk-type-500 uitk-type-medium uitk-text-emphasis-theme']`);
            let currentPrice = await sibling.getText();

            if(currentPrice<previousPrice) return false;
            previousPrice = currentPrice;
        }

        return true;
    }

    async verifyFiveStarRatingsOfPlaces(){
        const ratings = await $$(this.ratingsOfPlaces);
        for(let rating of ratings){
            const text = await rating.getText();
            if(text.localeCompare('5.0 out of 5')==false){
                return false;
            }
        }
        return true;
    }

    //#endregion
}

module.exports = new HotelsSearchPage();