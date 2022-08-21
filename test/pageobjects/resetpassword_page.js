const page = require('./page.js');
const inputEmail = 'mail';
const btnSubmit = '[type="submit"]';

class ResetPassword_Page{

    async setinputEmail(text){
        await page.setValue(inputEmail, text)
    }    
    
    async clickSubmitButton(){
        await page.click(btnSubmit)
    }
    
}
module.exports = new ResetPassword_Page()
