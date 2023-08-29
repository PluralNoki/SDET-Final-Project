//For all your customer service needs - and beyond!
class CustomerServicePage{

    //--LOCATORS--//
        //Buttons
    siteFeedbackButton = "//a[contains(text(),'Site Feedback')]";
    
    
    
    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//


    //#region Clickers

    async clickSiteFeedback(){
        return await $(this.siteFeedbackButton).click();
    }

    //#endregion

    //#region Verifiers

    async verifyRedBoxDisplayed(){
        return await $(this.overallFeedbackTextPostEmptySubmit).isDisplayed();
    }

    //#endregion
}

module.exports = new CustomerServicePage();