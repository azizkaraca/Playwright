import {test,expect} from '@playwright/test';
import exp from 'constants';


test.beforeEach(async({page})=> { 

    await page.goto("http://acrossqa.demo.i4.energy/signin"); 
    await expect(page).toHaveTitle("Across Manager");

});

test.afterEach(async({page})=>{ 

    await page.close(); 
    
});

test.describe("Across", () => {
                                    

    test ('User log in with valid credentials', async ({page})=> {

        await page.fill("[type='email']","mas@maseurope.com"); 
        await page.locator("[type='Password']").fill("ma$_@8miN%"); 
        await page.locator("//button[text()='Login']").click();
        await expect(page.locator("#across-map")).toBeInViewport();
 
    });

});

