import { test, expect } from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';


test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe("Dialogs", async () => {
    test.beforeEach(async ({ page }) => {  
        await page.goto("https://testautomationpractice.blogspot.com/");
    });

    test("Alerts", async ({ page }) => {

        page.on('dialog', async dialog => { // alert islemlerini yapabilmemiz icin bu tanimlamayi yapmamiz gerekiyor
            expect(dialog.type()).toBe("alert"); // acilan dialog penceresinin alert tipinde oldugunu dogruluyoruz
            expect(dialog.message()).toBe("I am an alert box!"); // Alert kutusunun mesajını dogruluyoruz
            console.log('Dialog mesajı:', dialog.message()); // Alert kutusunun mesajını konsola yazdır
            await dialog.accept(); // Alert kutusunu kabul et
        });

        await page.click("//button[text()='Alert']"); // bunu sitedeki alert penceresi ciksin diye yapiyoruz.

    });

    test("Confirm Box", async ({ page }) => {

        page.on('dialog', async dialog => { // alert islermlerini yapabilmemiz icin bu tanimlamayi yapmamiz gerekiyor
            expect(dialog.type()).toBe("confirm"); // acilan dialog penceresinin alert tipinde oldugunu dogruluyoruz
            expect(dialog.message()).toBe("Press a button!"); // Alertin mesajini dogruluyoruz
            console.log('Dialog mesajı:', dialog.message()); // Alert kutusunun mesajını konsola yazdır
            await dialog.accept(); // Alert kutusunu kabul et
            // await dialog.dismiss(); // Alert kutusunu iptal et
        });

        await page.getByText("Confirm Box").click();
        await expect(page.locator("#demo")).toContainText("You pressed OK!");

    });



});
