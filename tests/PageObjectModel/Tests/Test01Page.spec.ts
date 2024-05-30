import { test } from "@playwright/test";
import Home from "../Pages/HomePage";
import * as data from '../TestData/data.json'; // burada ters \\ kullanmaliyiz
import Login from "../Pages/LoginPage";
import { text } from "stream/consumers";

test.beforeEach(async ({ page, baseURL }) => {
    const home = new Home(page); // home parametre olarak page aldigi icin yeni objenin icine page yazdik
    await home.navigateToTheSite(`${baseURL}`); // baseURL li burada kullanmak icin (`${}`) de koseli parantezin icine yazacagiz 
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test("Navigate to Page", async ({ page }) => {

    const home = new Home(page);
    await home.verifyTheUrl(data.url); // `${baseURL}` yerine data da tanimladigimiz url yi de kullanabiliriz
})

test("Login Test", async ({ page }) => {

    const home = new Home(page);
    const login = new Login(page);

    await home.clickOnTheLoginBUtton();
    await login.fillUsernameBox(data.username);
    await login.fillPasswordBox(data.password);
    await login.clickSubmitButton();
    await login.verifyTheLogin("Welcome");

})