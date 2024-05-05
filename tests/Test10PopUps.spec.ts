import{test,expect} from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';

test.afterAll(async ({ page }) => {
    await page.close();
});

test.describe("PopUp", async () => {

    test.beforeEach(async ({ page }) => {  
        await page.goto("https://demoqa.com/browser-windows");
    });

    test("PopUp",async({page})=>{
        const newWindow=page.getByText("New Window").nth(0);
        await newWindow.click();
        
        const popUp= await page.waitForEvent('popup'); 
        await popUp.waitForLoadState();

        const popUpMessage = popUp.getByText("This is a sample page");
        await expect(popUpMessage).toBeVisible(); 
        await popUp.close(); // acilan pop up sayfasini kapatmak icin
    


    })


});
