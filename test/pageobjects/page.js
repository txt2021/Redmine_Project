class Page {
   
    async click(locator){
        await $(locator).click();
    }

    async setValue(locator,text){
        await $(locator).setValue(text);
    }
}
module.exports = new Page();