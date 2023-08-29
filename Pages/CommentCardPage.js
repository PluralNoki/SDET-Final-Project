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
        const rating  = 4; //array index 4 means 5 stars
        return await $$(this.overallButtons)[rating].click();
    }

    async selectAnyContentRating(){
        const rating  = 4;
        return await $$(this.contentButtons)[rating].click();
    }

    async selectAnyDesignRating(){
        const rating  = 4;
        return await $$(this.designButtons)[rating].click();
    }

    async selectAnyEaseOfUseRating(){
        const rating  = 4;
        return await $$(this.easeOfUseButtons)[rating].click();
    }

    //#endregion

    async focusOnCommentCardPage(){
        const handles = await browser.getWindowHandles();
        const desiredWindow = 'Comment Card';

        for(const handle of handles){
            await browser.switchToWindow(handle);
            const windowTitle = await browser.getTitle();
            if(handle.localeCompare(desiredWindow)===0){
                console.log("IT WORKED???");
                break;
            }
        }

        console.log("BROKEN?!?!?!");
    }


}

module.exports = new CommentCardPage();