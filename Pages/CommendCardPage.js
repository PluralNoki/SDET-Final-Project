class CommentCardPage{

    //--LOCATORS--//

        //Buttons
    submitButton = "//input[@id='submitButton']";
        //Text
    overallFeedbackText = "//td[@class='overallLabel']";
    overallFeedbackTextPostEmptySubmit = "//span[@class='reqHilite']";


    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//

    async clickSubmit(){
        return await $(this.submitButton).click();
    }

    async clickSubmit(){
        return await $(this.submitButton).click();
    }

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