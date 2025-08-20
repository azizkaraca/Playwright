import { Page, expect } from "@playwright/test";
import * as data from '../TestData/data.json';


export default class Login { // bu clasin disariya aktarilabilir oldugunu belirtmek icin "export" key word kullaniyoruz , public yapmak icin ise "default" kullaniyoruz.
    page: Page;
    constructor(page: Page) { // disardan page tipinde bir parametre alsin diyorum 
        this.page = page; // disardan gelen page classi buradaki page classa atama yaptim
    }

    fullscreen = () => this.page.setViewportSize({ width: 1500, height: 720 });
    // Adjusted according to the screen size (go to concole on development meode and type "outerWidth" and "outerHeight" to get the screen size)

    async navigateToTheSite(url: string) {
        await this.page.goto(url);
    }

    username = () => this.page.locator("#username");
    async fillUsernameBox(username: string) {
        await this.username().fill(username);
    }

    password = () => this.page.locator("#password");
    async fillPasswordBox(password: string) {
        await this.password().fill(password);
    }

    loginButton = () => this.page.locator("#kc-login");
    async clickLoginButton() {
        await this.loginButton().click();
    }

    across = () => this.page.getByTitle("Across i4Energy");
    async verifyTheLogin(text: string) {
        await expect(this.page).toHaveTitle(text);
    }

        async LogintoApp() {

            await this.fullscreen();
            await this.navigateToTheSite(data.url);
            await this.fillUsernameBox(data.username);
            await this.fillPasswordBox(data.password);
            await this.clickLoginButton();
            await this.verifyTheLogin("Across i4Energy");

        }

}