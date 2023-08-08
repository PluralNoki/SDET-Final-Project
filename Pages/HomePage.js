//The homepage of this project: https://www.hotels.com/
class HomePage{

    //Locators
    signInSelector = "//button[contains(text(),'Sign in')]";
    signInButton = "//a[@data-stid='link-header-account-signin']";
    travelerButton = "//button[@data-stid='open-room-picker']";
    increaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[2]";
    decreaseChildrenCountButton = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::button[1]";
    currentChildCountElement = "//label[@for='traveler_selector_children_step_input-0']/following-sibling::div/child::input";
    //Returns an array of currently displayed children
    childrenDropdown = '//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]/*'

    //Interactive Functions for HomePage
    async clickSignInSelector(){
        return await $(this.signInSelector).click();
    }

    async clickSignInButton(){
        return await $(this.signInButton).click();
    }

    async clickTravelerButton(){
        return await $(this.travelerButton).click();
    }

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

    async clickIncreaseChildrenButton(){
        return await $(this.increaseChildrenCountButton).click();
    }

    async clickDecreaseChildrenButton(){
        return await $(this.decreaseChildrenCountButton).click();
    }

    async getAmountOfChildrenAgeDropDowns(){
        const children = await $$(this.childrenDropdown);
        return children.length;
    }

    async getCurrentChildCount(){
        const currentCount = $(this.currentChildCountElement).getAttribute('value');
        console.log(currentCount);
        return currentCount;
    }

    async verifyPlusButtonIsEnabled(){
        const button = await $(this.increaseChildrenCountButton);
        return button.isEnabled();
    }

    async verifyMinusButtonIsEnabled(){
        const button = await $(this.decreaseChildrenCountButton);
        return button.isEnabled();
    }



}

module.exports = new HomePage();