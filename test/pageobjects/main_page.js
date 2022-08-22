const page = require('D:/trainee/Redmine_Project/test/pageobjects/page.js');
const searchButton = '#q';

class Main_Page {
    async setsearchButton(text){
        await page.setValue(searchButton, text)
        
    }
    
}
module.exports = new Main_Page()
