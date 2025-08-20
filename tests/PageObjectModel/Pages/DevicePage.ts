import { Page, expect } from '@playwright/test';

export default class Device {// bu clasin disariya aktarilabilir oldugunu belirtmek icin "export" key word kullaniyoruz , public yapmak icin ise "default" kullaniyoruz.
    page: Page;
    constructor(page: Page) { // disardan page tipinde bir parametre alsin diyorum 
        this.page = page; // disardan gelen page classi buradaki page classa atama yaptim
    }

    personIcon = () => this.page.locator("(//*[@data-testid='PersonIcon'])[1]");
    async hoverOnThePersonIcon() {
        await this.personIcon().hover();
    }

    library = () => this.page.locator("//span[text()='Library']");
    async clickOnTheLibrary() {
        await this.library().click();
    }

    devices = () => this.page.locator("(//span[text()='Devices'])[1]");
    async clickOnTheDevices() {
        await this.devices().click();
    }

    addDevice = () => this.page.locator("//span[contains(text(),'add')]");
    async clickOnTheAddDevice() {
        await this.addDevice().click();
    }


} 
