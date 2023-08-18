class TermsAndConditions{


    //--LOCATORS--//

    oneKeyTermsAndConditionsHeader = "//h1[@class='uitk-heading uitk-heading-4']";

    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//


    
    async verifyOneKeyRewardsHeadingIsDisplayed(){
        const allHandles = await browser.getWindowHandles();

        for(const handle of allHandles){
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if(title.localeCompare('Hotels.com - One Key Terms and Conditions')===0){
                break;
            }
        }

        const exists = await $(this.oneKeyTermsAndConditionsHeader).waitForExist();
        return exists;
    }
}

module.exports = new TermsAndConditions();