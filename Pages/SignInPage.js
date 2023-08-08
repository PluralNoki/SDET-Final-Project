//The signin page of Hotels.com
class SignInPage{

    //Locators
    emailAddressProvider = "//input[@id='loginFormEmailInput']";
    continueButton = "//button[@id='loginFormSubmitButton']";
    errorMessage = "//div[@id='loginFormEmailInput-error']"

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
}

module.exports = new SignInPage();