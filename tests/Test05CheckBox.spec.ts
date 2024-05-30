import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { // 

    await page.goto("https://testautomationpractice.blogspot.com/");

});

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe("Radio Button & Check Boxes", async () => {

    test("Radio Button", async ({ page }) => {

        const genderRadioButtonMale = page.locator("#male");
        const genderRadioButtonFemale = page.locator("#female");

        await genderRadioButtonMale.check();
        await expect(genderRadioButtonMale).toBeChecked();

        await genderRadioButtonFemale.check();
        await expect(genderRadioButtonFemale).toBeChecked();


    });

    test("Check Box", async ({ page }) => {

        // const day1 = page.getByText("Sunday");
        // const day2 = page.getByText("Monday");
        // const day3 = page.getByText("Tuesday");

        // await day1.check();
        // await expect(day1).toBeChecked();
        // await day2.check();
        // await expect(day2).toBeChecked();
        // await day3.check();
        // await expect(day3).toBeChecked();

        const checkArray = [page.getByText("Sunday"), page.getByText("Monday"), page.getByText("Tuesday")] // ustteki gibi yapilani array ve for ile clean yaptik

        for (const each of checkArray) {
            await each.check();
            await expect(each).toBeChecked();
        }


    })


});