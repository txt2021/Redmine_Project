const page = require('D:/trainee/Redmine_Project/test/pageobjects/page.js');
const inputUsername = '#user_login';
const inputPassword = '#user_password';
const inputConfirmPassword = '#user_password_confirmation';
const inputName = '#user_firstname';
const inputSurname = '#user_lastname';
const inputEmail = '#user_mail';
const inputNick = '#user_custom_field_values_3';
const btnSubmit ='[type="submit"]';


class Register_Page {
   
    async setinputUsername(text){
        await page.setValue(inputUsername, text)
    }

    async setinputPassword(text){
        await page.setValue(inputPassword, text)
    }

    async setinputConfirmPassword(text){
        await page.setValue(inputConfirmPassword, text)
    }

    async setinputName(text){
        await page.setValue(inputName, text)
    }

    async setinputSurname(text){
        await page.setValue(inputSurname, text)
    }

    async setinputEmail(text){
        await page.setValue(inputEmail, text)
    }

    async setinputNick(text){
        await page.setValue(inputNick, text)
    }

    async clickSubmitButton(){
        await page.click(btnSubmit)
    }
}
module.exports = new Register_Page()