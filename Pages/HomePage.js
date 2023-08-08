//The homepage of this project: https://www.hotels.com/
class HomePage{

    //--LOCATORS--//


        //Sign In
    signInSelector = "//button[contains(text(),'Sign in')]";
    signInButton = "//a[@data-stid='link-header-account-signin']";
    travelerButton = "//button[@data-stid='open-room-picker']";
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

    //#endregion


}

module.exports = new HomePage();