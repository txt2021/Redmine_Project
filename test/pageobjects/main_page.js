const page = require('./page.js');
const searchButton = '#q';

class Main_Page{
    async setsearchButton(text){
        await page.setValue(searchButton, text)
        
    }
    
}
module.exports = new Main_Page()
