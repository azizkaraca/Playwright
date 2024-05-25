import { test, expect } from "@playwright/test";

test.afterAll(async ({ page }) => {
    await page.close()
})

test("Download", async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download");

    const downloadPromise = page.waitForEvent('download'); // bu islemi sisteme download islemi yapilacagini belirtmek icin yaptik

    await page.locator("id=downloadButton").click();
    const download = await downloadPromise; // yukaridaki "downloadPromise" tanimlama "waitForEvent" promise donduruyor. 
    //bu yuzden "downloadPromise" islemini tek seferde await yapip bir degere atama yaptik ki daha sonrasi icin devamli await kullanmayalim
    
    // console.log(await download.path()); // indirilen dosyanin gecici olarak nereye kaydedildigini gosterir // calismadi simdili yoruma aliyorum
    const filePath = "C:\\Users\\AzizKaraca\\Downloads\\image.jpeg"; // "image.jpeg" vs diyerek indirilen dosyanin adini, tipini degistirebiliriz.
    await download.saveAs(filePath); // indirilen dosyayi nereye kaydedeceginin yolunu verdik. 

    const fileSystems = require('fs') // dosya yazma, okuma vs islemlerimizi yapmamiza olanak saglayan bir metoddur.
    expect(fileSystems.existsSync(filePath)).toBe(true); // belirtilen path de bu dosya var diyerek true bekleyerek dogrulamasini yapiyorum 


})