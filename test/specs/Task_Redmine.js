const main_page = require('../pageobjects/main_page.js');
const register_page = require('../pageobjects/register_page.js');
const loginPage = require('../pageobjects/login_page.js');
const resetpassword_page = require('../pageobjects/resetpassword_page.js');
describe('Redmine testing', () => {
        
    it('TC02 - Sign up to Redmine with incorrect credentials', async() => {   
      await browser.url('https://www.redmine.org/login')  
      loginPage.inputUsername.setValue('testuser'); 
      await browser.pause(800);  
      loginPage.inputPassword.setValue('testpassword');
      await browser.pause(800);  
      loginPage.clickSubmitButton();       
      await browser.pause(800);   
    }) 

    it('TC03 - Sign in to Redmine with an already existing username', async() => { 
      await browser.url('https://www.redmine.org/account/register')    
      register_page.inputUsername.setValue('txt2021'); 
      await browser.pause(800);        
      register_page.inputPassword.setValue('testpassword');
      await browser.pause(800); 
      register_page.inputConfirmPassword.setValue('testpassword');
      await browser.pause(800); 
      register_page.inputName.setValue('testname');
      await browser.pause(800);
      register_page.inputSurname.setValue('testsurname');
      await browser.pause(800);
      register_page.inputEmail.setValue('testmail@gmail.com');
      await browser.pause(800);
      register_page.inputNick.setValue('tester');
      await browser.pause(800);
      register_page.clickSubmitButton();
      await browser.pause(800);      
  }) 

    it('TC04 - Find the requested information using Redmine search', async() => {   
      await browser.url('https://www.redmine.org/')  
      main_page.searchButton.setValue('testing');
      await browser.pause(800);  
      await browser.keys("\uE007");    
      await browser.pause(800);   
    }) 

    it('TC05 - User password recovery on Redmine', async() => {   
      await browser.url('https://www.redmine.org/login') 
      loginPage.clickResetPasswordButton();
      await browser.pause(800);  
      resetpassword_page.inputEmail.setValue('txt2021@ukr.net');
      await browser.pause(800); 
      resetpassword_page.clickSubmitButton();  
      await browser.pause(800); 
    }) 

    it('TC01 - Sign up to Redmine with correct credentials', async() => {   
      await browser.url('https://www.redmine.org/login')  
      loginPage.inputUsername.setValue('txt2021'); 
      await browser.pause(800);
      loginPage.inputPassword.setValue('testpass');
      await browser.pause(800);
      loginPage.clickSubmitButton();
      await browser.pause(800);  
  }) 
       
   
});


