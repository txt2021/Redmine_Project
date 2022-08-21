
module.exports = class Page {

    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async click(locator){
        await $(locator).click();
    }

    async setValue(locator,text){
        await $(locator).setValue(text);
    }
}

module.exports = new Page();
