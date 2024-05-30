import {Page,expect} from '@playwright/test';

export default class Home{// bu clasin disariya aktarilabilir oldugunu belirtmek icin "export" key word kullaniyoruz , public yapmak icin ise "default" kullaniyoruz.
    page:Page;
    constructor(page:Page){ // disardan page tipinde bir parametre alsin diyorum 
        this.page=page; // disardan gelen page classi buradaki page classa atama yaptim
    }

async navigateToTheSite(url:string){
    await this.page.goto(url); // kullanilan metodda promise donduruyor ise her metoda await eklenir. cagirilan gerde de ekelenecek.
}

async verifyTheUrl(url:string){
    expect(url).toBe(this.page.url()); // verilen url donen url'e esitmi
}

loginButton=()=>this.page.locator("#login2"); // fonksiyon olarak locate atama yaptik. burada let yada const kullanmiyoruz
async clickOnTheLoginBUtton(){
    await this.loginButton().click();
}


} 
