const { Builder, By, Key, until } = require('selenium-webdriver');
const { before, beforeEach, after, afterEach } = require('mocha');
var Page = require ('./test/lib/page_object');

var data = require ('./test/lib/data1')


console.log(data.timestamp);

console.log(data.timestamp);

describe('#indexOf()', function () {


    beforeEach(async function () {
        page = new Page();
    });

    afterEach(async function () {
        await page.driver.quit();
    });
    this.timeout(60000);
    it('test 1', async function () {
        await page.driver.get('http://www.google.com/');
        await page.driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await page.driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      
    });

    it('test 2', async function () {

        await page.driver.get('http://www.google.com/ncr');
        await page.driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await page.driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    }); 
    it('test 3', async function () {

        await page.driver.get('http://www.google.com/ncr');
        await page.driver.findElement(By.name('q')).sendKeys('shanks', Key.RETURN);
        await page.driver.wait(until.titleIs('shanks - Google Search'), 1000);
     
    });
    it('test 4', async function () {

        await page.driver.get('http://www.google.com/ncr');
        await page.driver.findElement(By.name('q')).sendKeys('air', Key.RETURN);
        await page.driver.wait(until.titleIs('air - Google Search'), 1000);

    });
});
