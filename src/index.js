require('chromedriver');
//const {Browser, By, Key, until, Builder} = require('selenium-webdriver');
const wd = require('selenium-webdriver');
const config = require('./config')

var driver = new wd.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.footlocker.com/account/create')
    /** Insert looping if statement to check if title of page is 'Access to this page has been denied.'. If it is, then click here '//*[@id="recaptcha-anchor"]/div[1]'.
        Pause until a key is pressed to let bot know user has solved captcha (or make a check to see if an element still exsts after a second
        (this xpath '//*[@id="rc-imageselect"]/div[3]/div[2]/div[1]') [so the captcha window can pop up] or something). Let function loop. If title is no longer the
        error page title, then move on, otherwise repeat. The title of the right page is 'Account create | Foot Locker'. */
    .then(_ => driver.findElement(wd.By.name('firstName')).sendKeys(config.firstName))
    .then(_ => driver.findElement(wd.By.name('lastName')).sendKeys(config.lastName))
    .then(_ => driver.findElement(wd.By.name('uid')).sendKeys(config.email)) // Email
    .then(_ => driver.findElement(wd.By.name('password')).sendKeys(config.password))
    .then(_ => driver.findElement(wd.By.name('dateofbirthmonth')).sendKeys(config.dateofbirthmonth))
    .then(_ => driver.findElement(wd.By.name('dateofbirthday')).sendKeys(config.dateofbirthday))
    .then(_ => driver.findElement(wd.By.name('dateofbirthyear')).sendKeys(config.dateofbirthyear))
    .then(_ => driver.findElement(wd.By.xpath('//*[@id="AccountCreate"]/div[6]/div/label')).click()) // Uncheck product offers emails box
    .then(_ => driver.findElement(wd.By.xpath('//*[@id="AccountCreate"]/fieldset[2]/ul/li[1]/div[1]/label')).click()) // Select Become a Locker VIP radio button
    //.then(_ => driver.findElement(wd.By.className('rc-anchor')).click()) // Click I am not a robot
    .then(_ => console.log('Done.'))
    //.then(_ => driver.wait(wd.until.titleIs('hello world - Google Search'), 1000))
    //.then(_ => driver.quit())
    .catch((err) => console.error(err));