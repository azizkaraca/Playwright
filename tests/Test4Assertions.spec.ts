import { test, expect } from '@playwright/test';
import exp from 'constants';

test.afterAll(async({page})=>{ 
    await page.close(); 
});

test.describe('Assertions', () => {

    test("Assertions Element Attached", async ({ page }) => {

        await page.goto("https://www.demoblaze.com/");
        await expect(page).toHaveTitle("STORE");
        await expect(page.getByText("Place Order").nth(1)).not.toBeAttached(); // nth(1)=eger 2 den fazla locator varsa endeks bazli seciyoruz
        // await expect(page.getByText("Place Order").nth(1)).toBeAttached() // bu locator bu sayfada olmadigindan hata aliriz.

    });

    test("Assertions Element Checked", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        const checkBox = page.locator("#male");
        const nameBox = page.locator("#name");
        const text = page.locator("//h1");

        await checkBox.check();
        await expect(checkBox).toBeChecked(); // checkbox is checked
        await expect(nameBox).toBeEnabled();
        // await expect(nameBox).toBeDisabled(); // hata verir cunku nameBox Enable
        await expect(nameBox).toBeEmpty();
        await nameBox.fill("Testing");
        await expect(nameBox).not.toBeEmpty(); // toBeEmpty dedigimizde hata alicaz cunku ici dolu. o yuzden .not.toBeEmpty kullandik
        await expect(text).toContainText("Testing"); // belirtilen locatordaki textte bu kisim bulunuyor mu
        await expect(text).toHaveText("Automation Testing Practice"); // belirtilen locatordaki tam-tum text var mi
        await expect(nameBox).toHaveValue("Testing"); // nameBox locator da tanimladigimiz text value olarak var mi

    });

    test("Soft Assertion", async ({ page }) => {

        const locator1 = page.getByText("Place Order").nth(1);

        await page.goto("https://www.demoblaze.com/");
        await expect(page,"AssertionHaveTitle").toHaveTitle("STORE"); // hard-soft assertionlara isim verebiliriz. "AssertionHaveTitle" gibi.
        await expect.soft(locator1,"Soft Assertion").toBeAttached(); // burada hata alicaz ama .soft ile bu hatada durmayacak devam edecek
        await expect(locator1).not.toBeAttached();
        

    });



});
