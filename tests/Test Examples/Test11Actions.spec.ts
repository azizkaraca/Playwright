import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe("Actions", () => {

    test("Hover Action", async ({ page }) => {

        await page.goto("https://www.amazon.com/");
        const hello = page.locator("#nav-link-accountList")
        await hello.hover();
        await page.waitForTimeout(2000);
        const account = page.locator("//span[text()='Account']")
        await account.hover();

    })

    test("Right Click Action", async ({ page }) => {

        await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
        const rightClickElement = page.getByText("right click me");
        await rightClickElement.click(); // normal click yapar 
        await rightClickElement.click({ button: "right" }); // right click metodu
        await page.waitForTimeout(2000);
        const rightClickMenu = page.locator("//ul[@class='context-menu-list context-menu-root']");
        await expect(rightClickMenu).toBeVisible();

    })

    test("Double CLick Action", async ({ page, context }) => { // asagida baska bir tab acip siteye gidecegimiz icin contect ekledim

        await page.goto("https://demoqa.com/buttons");
        const doubleClick = page.locator("#doubleClickBtn");
        await doubleClick.dblclick(); // double click metodu
        const youHaveDone = page.getByText("You have done a double click");
        await expect(youHaveDone).toHaveText("You have done a double click");
        await expect(youHaveDone).toContainText("done"); // baska bir dogrulama

        const newTab = await context.newPage(); // context ile bir onceki test sayfasini kapatmadan yeni bir sekme aciyoruz
        await newTab.goto("https://testautomationpractice.blogspot.com/");
        const copyTextButton = newTab.getByText("Copy Text");
        await copyTextButton.dblclick();
        const doubleClickVerify = newTab.locator("id=field2");
        expect(await doubleClickVerify.inputValue()).toBe("Hello World!");
        expect(doubleClickVerify).toHaveValue("Hello World!") // baska bir dogrulama

    })

    test("Drag & Drop", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        const sourceElement = page.locator("id=draggable");
        const targetElement = page.locator("id=droppable");
        await sourceElement.dragTo(targetElement);
        expect(await targetElement.textContent()).toContain("Dropped"); 

    })

    test("Keyboard Action", async ({ page }) => {

        await page.goto("https://www.ebay.com/")
        const searchBox = page.getByPlaceholder("Search for anything")
        await searchBox.fill("phone holder for bike")

        await page.keyboard.down('Shift') // basili tutmak icin down kullanilir, up yapana kadar basili tutar

        for (let i = 0; i < 'bike'.length; i++) {
            await page.keyboard.press("ArrowLeft") // tek seferlik basmak icin press kullanilir
            await page.waitForTimeout(900)
        }

        await page.keyboard.up('Shift')
        await page.keyboard.press('Backspace')
        await page.waitForTimeout(900)

        await page.keyboard.press("c")
        await page.keyboard.press("a")
        await page.keyboard.press("r")
        await page.waitForTimeout(900)

        await page.keyboard.press('Control+A') // tumunu secmek icin (tek seferlik iki tusa birden basma islemi icin bu sekilde yapilir
        await page.waitForTimeout(900)
        await page.keyboard.press('Control+X') // kesmek icin
        await page.waitForTimeout(900)
        await page.keyboard.press('Control+V') // yapistirmak icin
        await page.waitForTimeout(900)

        await page.keyboard.press('Enter')
        await page.waitForTimeout(900)

    })

})