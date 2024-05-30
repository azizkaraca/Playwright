import { test as base } from '@playwright/test';
import Home from '../Pages/HomePage';
import Login from '../Pages/LoginPage';

// Declare the types of your fixtures.
type MyFixtures = {
  home: Home;
  login: Login;
};

// Extend base test by providing "home" and "login".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  
  home : async ({ page }, use) => {
    // Set up the fixture.
    //const home  = new Home(page); // asagida parantezin icine direkt girdim
    // Use the fixture value in the test.
    await use(new Home(page)); // buraya yukaridaki constu parantez icine girdim

  },

  login: async ({ page }, use) => {
    await use(new Login(page));
  },

  // daha fazla page olusturulacaksa buraya ustteki sekilde tanimlanacak

});
export { expect } from '@playwright/test';