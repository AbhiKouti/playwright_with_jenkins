 import {test,expect} from '@playwright/test'

// test("facebook navigation",async({page})=>{         //CSS Method
//     await page.goto("https://www.facebook.com/")
//     await page.locator('[class="inputtext _55r1 _6luy"]').fill("example@gmail.com")
//     await page.locator('#pass').fill('example')
//     await page.locator('[data-testid="royal-login-button"]').click
// })
            //TASK
// import{test,expect} from '@playwright/test'
// test("Flipkart Home Page",async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     // await expect(page).toHaveTitle(/Flipkart/);
//     await page.getByRole('link', { name: 'Mobiles & Tablets' }).click();
//     //await expect(page.getByRole('heading', { name: 'Sale is Live' })).toBeVisible();
// })

// import {test} from '@playwright/test'

// test("facebook navigation",async({page})=>{            //Xpath Method
//     await page.goto("https://www.facebook.com/")
//     await page.locator('//input[@id="email"]').fill("example@gmail.com")
//     await page.locator('//input[@id="pass"]').fill('example')
//     await page.locator('//button[text()="Log in"]').click
// })
                  //TASK 1    Using XPath Method
// import {test} from '@playwright/test'

// test("oeangehrmlive",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('//input[@name="username"]').fill("example@gmail.com");
//     await page.locator('//input[@name="password"]').fill('example');
//     await page.locator('//button[text()=" Login "]').click
// })
//                //TASk 2     Using CSS Method
// import {test} from '@playwright/test'

// test("oeangehrmlive",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('[placeholder="Username"]').fill("example@gmail.com");
//     await page.locator('[placeholder="Password"]').fill('example');
//     await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click
// })

test("oeangehrm",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.getByAltText("company-branding")).toBeVisible()
    await page.getByPlaceholder("username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin@123")
    await page.getByRole('button',{name:" Login "}).click()
})