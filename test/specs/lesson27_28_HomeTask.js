const main_page = require('../pageobjects/main_page.js');
const docs_page = require('../pageobjects/docs_page.js');
const api_page = require('../pageobjects/api_page.js');
const blog_page = require('../pageobjects/blog_page.js');
const contribute_page = require('../pageobjects/contribute_page.js');
describe('My application', () => {
    
    it('TC01', async() => {
        await browser.url('https://webdriver.io/')   
        main_page.docsButton.click()
        await browser.pause(1000);
        docs_page.clickBoilerplateButton();
        await browser.pause(1000);
        main_page.apiButton.click();
        api_page.clickContributeButton();
        await browser.pause(1000);
        main_page.blogButton.click();
        await browser.pause(1000);
        let blog = await blog_page.titleLabel.isDisplayed();
        console.log("IS BLOG Title ISDISPLAYED:: " + blog)   
        main_page.contributeButton.click();
        await browser.pause(1000);
        contribute_page.clickcodeofcondButton();
        await browser.pause(1000);
        contribute_page.clicklogoButton();
        main_page.searchButton.click()    
        await browser.pause(1000); 
        main_page.searchInput.addValue("test")
        await browser.pause(1000); 
        main_page.setSearchValue(" is done")
        await browser.pause(3000); 
        
    })
     
       
   
});


