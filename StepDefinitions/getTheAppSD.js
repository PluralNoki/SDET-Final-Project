const {Given, Then} = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const getTheAppPage = require('../Pages/GetTheAppPage');

/* --A Sample THEN statement for copying
Then(/^$/, async function(){    
});
*/

Then(/^I verify Scan The QR Code And Download Our App is displayed$/, async function(){    
    const isDisplayed = await getTheAppPage.verifyScanTheQRCodeAndDownloadOurAppIsDisplayed();
    expect(isDisplayed, 'Scan the QR Code and Download our App is NOT displayed').to.be.true;
});

Then(/^I verify QR Code is displayed$/, async function(){    
    const isDisplayed = await getTheAppPage.verifyQRCodeIsDisplayed();
    expect(isDisplayed, 'QR Code is NOT displayed').to.be.true;
});
