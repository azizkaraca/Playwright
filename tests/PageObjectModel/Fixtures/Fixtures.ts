import { test as base } from '@playwright/test';
import Login from '../Pages/LoginPage';
import Device from '../Pages/DevicePage';
import Burger from '../Pages/BurgerMenu';

// Declare the types of your fixtures.
type MyFixtures = {

  login: Login;
  device: Device;
  burger: Burger; 
  
};

// Extend base test by providing "home" and "login".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  

  login: async ({ page }, use) => {
    await use(new Login(page));
  },

  device: async ({ page }, use) => {
    await use(new Device(page));
  },
  
  burger: async ({ page }, use) => {
    await use(new Burger(page));
  },
  // daha fazla page olusturulacaksa buraya ustteki sekilde tanimlanacak
  
});

    test.beforeEach(async ({ login }) => { // bir oncekinde olusturdugumuz classlari "home" , "login" buraya giriyoruz
        await login.LogintoApp(); 
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

export { expect } from '@playwright/test';