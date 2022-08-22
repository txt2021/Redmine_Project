const page = require('D:/trainee/Redmine_Project/test/pageobjects/page.js');
const inputEmail = '[name="mail"]';
const btnSubmit = '[type="submit"]';

class ResetPassword_Page {

    async setinputEmail(text){
        await page.setValue(inputEmail, text)
    }    
    
    async clickSubmitButton(){
        await page.click(btnSubmit)
    }
    
}
module.exports = new ResetPassword_Page()
