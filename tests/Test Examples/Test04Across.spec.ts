import {test,expect, chromium} from '@playwright/test';
import exp from 'constants';


test.beforeEach(async({page})=> { 

    await page.goto("https://acrossqa.demo.i4.energy/"); // navigate to url is not success since there is redirected url to keycloak
    await expect(page).toHaveTitle("Sign in to across");


});

test.afterEach(async({page})=>{ 

    await page.close(); 
    
});
 

test.describe("Across", () => {                        

    test ('User log in with valid credentials', async ({page})=> {

        await page.fill("id=username","mas@maseurope.com"); 
        await page.locator("id=password").fill("ma$_@8miN%"); 
        await page.locator("id=kc-login").click();
        
        await page.locator( "id=proceed-button").click();
        await expect(page).toHaveTitle("Across Manager")
        //await expect(page.locator("#across-map")).toBeInViewport();
 
    });

});

