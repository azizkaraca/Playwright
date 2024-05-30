import { Page,expect } from "@playwright/test";

export default class Login {
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

    username=()=>this.page.locator("#loginusername");
    async fillUsernameBox(username:string){
        await this.username().fill(username);
    }
    password=()=>this.page.locator("#loginpassword");
    async fillPasswordBox(password:string){
        await this.password().fill(password);
    }
    submitButton=()=>this.page.locator("//button[@onclick='logIn()']");
    async clickSubmitButton(){
        await this.submitButton().click();
    }
   
    welcome=()=>this.page.locator("#nameofuser");
    async verifyTheLogin(text:string){
       await expect(this.welcome()).toContainText(text);
    }

}