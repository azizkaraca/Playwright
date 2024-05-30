import { test } from "../Fixtures/Fixtures"; // bir onceki importu bu sekilde Fixture'dan olusturuyoruz
import Home from "../Pages/HomePage";
import * as data from '../TestData/data.json';
import Login from "../Pages/LoginPage";
import { text } from "stream/consumers";

test.beforeEach(async ({ page, baseURL, home }) => { // bir oncekinde olusturdugumuz classlari "home" , "login" buraya giriyoruz
    await home.navigateToTheSite(`${baseURL}`);
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test("Navigate to Page", async ({ page, home }) => {// bir oncekinde olusturdugumuz classlari "home" , "login" buraya giriyoruz
    await home.verifyTheUrl(data.url);
})

test("Login Test", async ({ page, home, login }) => {// bir oncekinde olusturdugumuz classlari "home" , "login" buraya giriyoruz
    await home.clickOnTheLoginBUtton();
    await login.fillUsernameBox(data.username);
    await login.fillPasswordBox(data.password);
    await login.clickSubmitButton();
    await login.verifyTheLogin("Welcome");
})