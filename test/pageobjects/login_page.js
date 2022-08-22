const page = require('D:/trainee/Redmine_Project/test/pageobjects/page.js');
const inputUsername = '[id="username"]';
const inputPassword = '[id="password"]';
const btnSubmit = '[type="submit"]';
const btnResetPassword = '[href="/account/lost_password"]';

class LoginPage {

    async setinputUsername(testUsername){
        await page.setValue(inputUsername, testUsername)
    }
    async setinputPassword(testPass){
        await page.setValue(inputPassword, testPass)        
    }

    async clickSubmitButton(){
        await page.click(btnSubmit)
    }

    async clickResetPasswordButton(){
        await page.click(btnResetPassword)
    }
} 

module.exports = new LoginPage();
