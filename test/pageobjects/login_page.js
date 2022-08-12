

const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('[id="username"]');
    }

    get inputPassword () {
        return $('[id="password"]');
    }

    get btnSubmit () {
        return $('[type="submit"]');
    }

    get btnResetPassword () {
        return $('[href="/account/lost_password"]');
    }

    clickSubmitButton(){
        this.btnSubmit.click()
    }

    clickResetPasswordButton(){
        this.btnResetPassword.click()
    }

    

}

module.exports = new LoginPage();
