import { Page, expect } from '@playwright/test';

export default class Burger {// bu clasin disariya aktarilabilir oldugunu belirtmek icin "export" key word kullaniyoruz , public yapmak icin ise "default" kullaniyoruz.
    page: Page;
    constructor(page: Page) { // disardan page tipinde bir parametre alsin diyorum 
        this.page = page; // disardan gelen page classi buradaki page classa atama yaptim
    }

burgerMenu = () => this.page.locator("[data-testid='MenuIcon']");
    async clickOnTheBurgerMenu() {

        await this.page.hover("[data-testid='MenuIcon']");
        await this.page.mouse.down();
        await this.page.waitForTimeout(1000);
        await this.page.mouse.up();

    }



}