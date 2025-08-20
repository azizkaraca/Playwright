import { test } from "@playwright/test";
import Login from "../Pages/LoginPage";
import Device from "../Pages/DevicePage";
import Burger from "../Pages/BurgerMenu";

test.beforeEach(async ({ page }) => {
    const login = new Login(page); 
    await login.LogintoApp();  
})


test.afterEach(async ({ page }) => {
    await page.close();
})


test("New Device Creation", async ({ page }) => {
    const device = new Device(page); 
    const burger = new Burger(page); 

    await burger.clickOnTheBurgerMenu();
    await device.clickOnTheLibrary();
    await device.clickOnTheDevices();
    await device.clickOnTheAddDevice();
});