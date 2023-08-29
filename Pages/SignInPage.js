//The signin page of Hotels.com
class SignInPage{

        //--LOCATORS--//

        //Inputs
    emailAddressProvider = "//input[@id='loginFormEmailInput']";
        //Buttons
    continueButton = "//button[@id='loginFormSubmitButton']";
        //Messages
    errorMessage = "//div[@id='loginFormEmailInput-error']" //cdn
    enterAValidEmail = "//div[contains(text(),'Enter a valid email.')]";
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
        const errMsgStatus = await $(this.errorMessage).isDisplayed();
        return errMsgStatus;
    }
 
    async clickOneKeyTermsAndConditionsLink(){
        await $(this.oneKeyTermsLink).click();
    }

    async verifyErrorMessage(){
        return await $(this.errorMessage).waitForDisplayed();
    }

    async verifyContinueButtonIsEnabled(){
        return await $(this.continueButton).waitForEnabled();
    }

    

}

module.exports = new SignInPage();