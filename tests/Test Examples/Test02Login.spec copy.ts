import {test,expect} from '@playwright/test';
import exp from 'constants';

test.beforeEach(async({page})=> { // bu body icerisine her testten once calismasini istedigimiz metodlari tanimliyoruz.

    await page.goto("https://across-qa-v3.demo.i4.energy"); // her testten once calisacak, web sayfasini tanimlayabiliriz.

});

test.afterEach(async({page})=>{ // bunu yaptim cunku acilan browseren tum testler bittikten sonra kapanmasini istiyorum

    await page.close(); // bunu kontrol edecegim baska bir kapatma metodu var mi.
    
});

test.describe("Ders1", () => {   // testlerimizi gruplandirmak icin "test.describe" ile bu body icerisine testlerimizi gruplandirabiliriz. 
                                       // async ({page}) parametresini burada vermiyoruz.

    test('Verify the Test', async ({page})=> { // Test1 file da yaptigimiz test dogrulamasini buraya yazdik. test.describe body icine

        await expect(page).toHaveTitle("STOREAcross i4Energy");  
       
       })

    test ('User log in with valid credentials', async ({page})=> {

        await page.fill("#loginusername","aziz@karaca.com"); // fill("...") metodu icinde direct locater ve text girilir.
        await page.locator("[id='loginpassword']").fill("qwer1234"); // CSS locater bulunur sonra .fill("...") icine text girilir.
        await page.locator("//button[text()='Log in']").click();
        await expect(page.locator("//a[contains(text(),'Welcome')]")).toContainText("Welcome"); // belirtilen locatorin icinde text var mi
    });

});

