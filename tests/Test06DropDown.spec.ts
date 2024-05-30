import { test, expect } from '@playwright/test';
import exp from 'constants';



test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe("Drop Down Tests", async () => {
    test.beforeEach(async ({ page }) => { // .describe icine beforeEach tanimlanirsa o describe icin gecerli olur. 
        await page.goto("https://testautomationpractice.blogspot.com/");
    });

    test("Drop Down Intro", async ({ page }) => {

        const dropdown = page.locator('#country');

        await dropdown.selectOption("Canada"); // textine gore alirsak
        await page.waitForTimeout(2000);
        await dropdown.selectOption({ value: "germany" }); // value ye gore alirsak
        await page.waitForTimeout(2000);
        await dropdown.selectOption({ index: 5 }); // index e gore alirsak
        await page.waitForTimeout(2000); // secme islemlerini gorebilmek icin wait koyduk

        const options = page.locator("#country option"); // burada locator altinda olan elemanlari liste seklinde tutuyor
        await expect(options).toHaveCount(10); // bu locatorda bulunan elemanlarin sayisi 10 mu dogrulamasi
        expect(await options.allTextContents()).toContain("China"); // options locator icinde China varmi

        const optionsArray = page.$$("#country option"); // array olarakta bu sekilde $$ koyarsak locator altindaki elemanlari array olarak tutar
        expect(await optionsArray).toHaveLength(10); // yine burada da arrayin uzunlugunu bularak elaman sayisini dogrulayabiliriz

        let status: boolean;
        status = false;
        for (const each of await optionsArray) {
            let opt = await each.textContent();
            if (opt == "China") {
                status = true;
                break;
            }
        }
        expect(status).toBeTruthy();
    });

    test("Multi Select DropDown", async ({ page }) => {

        const multiSelect = page.locator("#colors");
        await multiSelect.selectOption(["Red", "Blue", "Green"]); // Text'ine gore aldik
        await expect(multiSelect).toHaveValues(["red", "blue", "green"]) //dogrulama value ile oldugundan locatorda value degerlerini alicaz
    })


});

test.describe("DropDowns Without Select Tag", async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.arabam.com/ikinci-el?days=2");    
        
    })

    test("Multi Select Without Select Tag", async ({ page }) => {

        const dropdown = page.locator("//span[text()='İl']");
        await dropdown.click();

        const city1=page.getByText("İstanbul Avrupa")
        const city2=page.getByText("İstanbul Anadolu")
        await city1.check(); // .click() de kullanilabilir.
        await city2.check();

        
    })


})