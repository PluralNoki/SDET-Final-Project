class CommentCardPage{

    //--LOCATORS--//

        //Buttons
    submitButton = "//input[@id='submitButton']";
        //Text
    overallFeedbackText = "//td[@class='overallLabel']";
    overallFeedbackTextPostEmptySubmit = "//span[@class='reqHilite']";
        //Radio Buttons
    overallButtons = "//table[@id='OTable']/child::tbody/child::tr[1]/child::td/child::input";
    contentButtons = "//table[@id='CTable']/child::tbody/child::tr[1]/child::td/child::input";
    designButtons = "//table[@id='DTable']/child::tbody/child::tr[1]/child::td/child::input";
    easeOfUseButtons = "//table[@id='UTable']/child::tbody/child::tr[1]/child::td/child::input";

    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//


    //#region Clickables

    async clickSubmit(){
        return await $(this.submitButton).click();
    }

    async clickSubmit(){
        return await $(this.submitButton).click();
    }

    async selectAnyOverallRating(){
        const buttons = await $$(this.overallButtons);
        const rating  = 5;
        return await buttons[rating].click();
    }

    async selectAnyContentRating(){
        const buttons = await $$(this.contentButtons);
        const rating  = 5;
        return await buttons[rating].click();
    }

    async selectAnyDesignRating(){
        const buttons = await $$(this.designButtons);
        const rating  = 5;
        return await buttons[rating].click();
    }

    async selectAnyEaseOfUseRating(){
        const buttons = await $$(this.easeOfUseButtons);
        const rating  = 5;
        return await buttons[rating].click();
    }

    //#endregion

    async focusOnCommentCardPage(){
        const handles = browser.getWindowHandles();
        const desiredWindow = 'Comment Card';

        for(const handle of handles){
            await browser.switchToWindow(handle);
            const windowTitle = await browser.getTitle();
            if(handle.localeCompare(desiredWindow)===0){
                break;
            }
        }
    }


}

module.exports = new CommentCardPage();