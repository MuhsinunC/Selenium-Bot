//const webdriver = require('selenium-webdriver');
const wd = require('selenium-webdriver');

var driver = new wd.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com')
    .then(_ =>
        driver.findElement(wd.By.name('q')).sendKeys('hello world', wd.Key.RETURN))
    .then(_ => driver.wait(wd.until.titleIs('hello world - Google Search'), 1000))
    //.then(_ => console.log('page has loaded'))
    //.then(_ => driver.quit())
    .catch((err) => console.error(err));