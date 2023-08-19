class GetTheAppPage{

    //--LOCATORS--//
        //Text
    scanTheQRCodeAndDownloadOurApp = "//h2[contains(text(), 'Scan the QR code and download our app')]";
        //Images
    qrCode = "//img[@alt='QR code']";


    //--INTERACTIVE FUNCTIONS FOR HOMEPAGE--//

    //#region Verifiers

    async verifyScanTheQRCodeAndDownloadOurAppIsDisplayed(){
        return $(this.scanTheQRCodeAndDownloadOurApp).isDisplayed();
    }

    async verifyQRCodeIsDisplayed(){
        return $(this.qrCode).waitForExist();
    }

    //#endregion

}

module.exports = new GetTheAppPage();