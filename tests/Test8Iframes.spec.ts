import{test,expect} from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';

test.afterAll(async ({ page }) => {
    await page.close();
});

test.describe("iframes", async () => {

    test.beforeEach(async ({ page }) => {  
        await page.goto("https://demoqa.com/frames");
    });

    test("frame1",async({page})=>{

        const frame1 = page.frameLocator("#frame1"); // frame locator ile frame e ulastik
        const elementText=await frame1.getByText("This is a sample page").textContent();
        expect(elementText).toBe("This is a sample page");


    })

    test("frame2",async({page})=>{

        const frame2 = page.frame({url:"https://demoqa.com/sample"}); // frame objesi ile frame in url ile frame e ulastik
        const elementText=await frame2?.getByText("This is a sample page").textContent(); // '?' frame1? yapmamizin nedeni null olursada sistem calismaya devam etsin
        expect(elementText).toBe("This is a sample page");

    })

});

test.describe("iframes test automation", async () => {

    test.beforeEach(async ({ page }) => {  
        await page.goto("https://testautomationpractice.blogspot.com/");
    });

    test("frame3",async({page})=>{

        const frame3 = page.frame({url:"https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169"}); 
        const name:string="Aziz";
        const textField=frame3?.locator("id=RESULT_TextField-0"); // page yerine iframe dedik cunku iframe de bu elementi bulacagiz
        await textField?.fill(name);
        expect(await textField?.inputValue()).toBe(name);
      
        const maleRadioBtn = frame3?.getByText("Male").nth(0); // nth() i eger element uniqe degilse kacinci indextekini alacagimizi belirtmek icin kulandik
        await maleRadioBtn?.check();
        expect(await maleRadioBtn?.isChecked()).toBeTruthy; // radio button isaretli mi assertion (isaretlidir diye iddia ediyoruz)

        const dateField = frame3?.locator("id=RESULT_TextField-2");
        let date:string="07/10/2024";
        await dateField?.fill(date);
        expect(await dateField?.inputValue()).toBe(date);

        const dropDown = frame3?.locator("id=RESULT_RadioButton-3");
        // await dropDown?.selectOption("QA Engineer"); // text ile alirsak
        await dropDown?.selectOption({value:"Radio-0"}); // value ile alirsak
        // await dropDown?.selectOption({index:0}); // index ile alirsak
        expect(await dropDown?.inputValue()).toBe("Radio-0");
        



    });

});