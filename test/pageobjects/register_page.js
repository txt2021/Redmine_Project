class Register_Page{
    get inputUsername () {
        return $('#user_login');
    }

    get inputPassword () {
        return $('#user_password');
    }

    get inputConfirmPassword () {
        return $('#user_password_confirmation');
    }

    get inputName () {
        return $('#user_firstname');
    }

    get inputSurname () {
        return $('#user_lastname');
    }

    get inputEmail () {
        return $('#user_mail');
    }

    get inputNick () {
        return $('#user_custom_field_values_3');
    }

    get btnSubmit () {
        return $('[type="submit"]');
    }

    clickSubmitButton(){
        this.btnSubmit.click()
    }
}
module.exports = new Register_Page()