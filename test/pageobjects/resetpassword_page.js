class ResetPassword_Page{

    get inputEmail(){
        return $('mail')
    }

    get btnSubmit(){
        return $('[type="submit"]');
    }

    clickSubmitButton(){
        this.btnSubmit.click()
    }
    
}
module.exports = new ResetPassword_Page()
