//The signin page of Hotels.com
class SignInPage{

        //--LOCATORS--//

        //Inputs
    emailAddressProvider = "//input[@id='loginFormEmailInput']";
        //Buttons
    continueButton = "//button[@id='loginFormSubmitButton']";
        //Messages
    errorMessage = "//div[@id='loginFormEmailInput-error']"
        //Links
    oneKeyTermsLink = "//a[contains(text(), 'One Key Rewards Terms & Conditions')]";


    //Functions for interacting with the SignIn page
    async enterTextIntoEmailProvider(textToEnter){
        return await $(this.emailAddressProvider).setValue(textToEnter);
    }

    async clickContinueButton(){
        return await $(this.continueButton).click();
    }

    async confirmErrorMessageExists(){
        const errMsg = await $(this.errorMessage);
        const errMsgStatus = await errMsg.isDisplayed();
        return errMsgStatus;
    }
 
    async clickOneKeyTermsAndConditionsLink(){
        await $(this.oneKeyTermsLink).click();
    }

}

module.exports = new SignInPage();