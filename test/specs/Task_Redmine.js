const main_page = require('../pageobjects/main_page.js');
const register_page = require('../pageobjects/register_page.js');
const loginPage = require('../pageobjects/login_page.js');
const resetpassword_page = require('../pageobjects/resetpassword_page.js');

const testUsername = 'testuser';
const testPass = 'testpassword';
const testPass2 = 'testpass';
const testUsername2 = 'txt2021';
const testName = 'testname';
const testSurname = 'testsurname';
const testEmail = 'testmail@gmail.com';
const nick = 'tester';
const searchtext = 'testing';
const testEmail2 = 'txt2021@ukr.net';

describe('Redmine testing', () => {
        
    it('TC02 - Sign up to Redmine with incorrect credentials', async() => {   
      await browser.url('https://www.redmine.org/login')  
      loginPage.setinputUsername(testUsername);
      loginPage.setinputPassword(testPass);
      loginPage.clickSubmitButton();    
    }) 

    xit('TC03 - Sign in to Redmine with an already existing username', async() => { 
      await browser.url('https://www.redmine.org/account/register')    
      register_page.setinputUsername(testUsername2); 
      register_page.setinputPassword(testPass); 
      register_page.setinputConfirmPassword(testPass);
      register_page.setinputName(testName);
      register_page.setinputSurname(testSurname);
      register_page.setinputEmail(testEmail);
      register_page.setinputNick(nick);
      register_page.clickSubmitButton();
  }) 

    xit('TC04 - Find the requested information using Redmine search', async() => {   
      await browser.url('https://www.redmine.org/')  
      main_page.setsearchButton(searchtext);
      await browser.keys("\uE007");    
    }) 

    xit('TC05 - User password recovery on Redmine', async() => {   
      await browser.url('https://www.redmine.org/login') 
      loginPage.clickResetPasswordButton();
      resetpassword_page.setinputEmail(testEmail2);
      resetpassword_page.clickSubmitButton(); 
    }) 

    xit('TC01 - Sign up to Redmine with correct credentials', async() => {   
      await browser.url('https://www.redmine.org/login')  
      loginPage.setinputUsername(testUsername2);
      loginPage.setinputPassword(testPass2)
      loginPage.clickSubmitButton();
  }) 
       
   
});


