//const webdriver = require('selenium-webdriver');
const {Browser, By, Key, until, Builder} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com')
    .then(_ =>
        driver.findElement(By.name('q')).sendKeys('hello world', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('hello world - Google Search'), 1000))
    //.then(_ => console.log('page has loaded'))
    //.then(_ => driver.quit())
    .catch((err) => console.error(err));