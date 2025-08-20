import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Single File Upload", async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download")
    const uploadInput = page.locator("id=uploadFile")

    // await uploadInput.setInputFiles("tests\UploadFiles\wolf.jpg") // yuklenmek istenilen dosyanin path kopyalandiginda bu sekilde gelir
    await uploadInput.setInputFiles("tests\\UploadFiles\\wolf.jpg") // windowsta araya bir ters slash daha ekliyoruz . yani "\\" oluyor
    // await uploadInput.setInputFiles("tests/ploadFiles/wolf.jpg") // mac'te ise path kopyalaninda zaten duz slash oluyor. 

    const uploadFileField = page.locator("id=uploadedFilePath") // islem sonunda ';' koymasakta oluyor
    expect(await uploadFileField.textContent()).toContain("wolf")

})

test("Multiple File Upload", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    const uploadFiledButton = page.locator("#filesToUpload")
    await uploadFiledButton.setInputFiles(["tests\\UploadFiles\\wolf.jpg", "tests\\UploadFiles\\night.jpg"]) // coklu dosya yukleme islemi, burada array (dizi) icin koseli parantezle pathleri giriyoruz.
    await page.waitForTimeout(900)

    let fileList = ["wolf.jpg", "night.jpg"]
    const fileArray = page.locator("//ul[@id='fileList']//li") // bu locaterda bulunan tum elementleri alir
    for (let fileNames of fileList) {
        expect(await fileArray.allTextContents()).toContain(fileNames)
    }

})