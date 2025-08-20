import { test } from "../Fixtures/Fixtures"; // "{ burger, device }" comes from Fixtures.

test("New Device Creation", async ({ burger, device }) => { // classes need to be defined here "{ burger, device }".
    
    // await burger.clickOnTheBurgerMenu(); // use it if the burger menu opens as default.
    await device.hoverOnThePersonIcon();
    await device.clickOnTheLibrary();
    await device.clickOnTheDevices();
    await device.clickOnTheAddDevice();

});