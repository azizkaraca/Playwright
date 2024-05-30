import{test,expect} from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe("Windows Handling", async () => {

    test.beforeEach(async ({ page }) => {  
        await page.goto("https://demoqa.com/browser-windows");
    });

    test.skip("New Tab Uncorrect Way",async({page})=>{ // hatali oldugu icin .skip ile testi skip ediyorum
        const newTab=page.getByText("New Tab");
        await newTab.click();
        
        const text = page.getByText("This is a sample page");
        await expect(text).toBeVisible(); 
        
        // bu sekilde yapilan bir islem hatali olur cunku page nesnesi ile yani acilan tab de islem yapilamaz.
        // islemi yeni acilacak pencerede yapmamiz gerekecek onun icin yeni acilan sayfayi page e atama yapmamiz lazim

    })

    test("New Tab Correct Way",async({page,context})=>{ // context ekledik ki yeni bir sayfa olusturabilmek icin
        const newTab=page.getByText("New Tab");
        await newTab.click();
        
        const newPage= await context.waitForEvent('page'); // context ile click isleminden sonra yeni bir page atamasi yapip o page in olusmasini bekliyoruz await ile
        await newPage.waitForLoadState(); // isi garantiye almak icin acilacak sayfa yuklenene kadar bekliyoruz

        const text = newPage.getByText("This is a sample page"); // 'page' yerine tanimladigimiz 'newPage' i getiriyoruz.
        await expect(text).toBeVisible();

        await page.bringToFront(); // asagidaki islem yapilirken UI da goremeyiz ama page.bringToFront() dersek UI da da islemi goruruz
        await page.waitForTimeout(2000); // sayfanin acildigini gormek icin bekleme attik
        await page.getByText("Elements").click(); // newPage den sonra page ile bir onceki sayfaya gecebilir islem yapabilirim.


    })


});
