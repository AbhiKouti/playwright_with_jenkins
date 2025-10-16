import { test, expect } from '@playwright/test'

test("windows Handling", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    // await page.goto("https://www.flipkart.com/");
    const searchbox = await page.locator("//input[@id='twotablesearchtextbox']");
    // const searchbox=await page.locator("//input[@name='q']");
    await searchbox.fill("phone");
    await page.keyboard.press("Enter");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click("//h2[contains(@aria-label,'Samsung Galaxy M05')]")
        // page.locator("//div[contains(text(),'Arctic White') and @class='KzDlHZ']").click()
    ])
    const title = await newPage.title();
    console.log(title)
    // await newPage.bringToFront()
    // await page.pause()
    const addtocart = await newPage.locator("//div[@id='addToCart_feature_div']/following::input[@id='add-to-cart-button']"); //amazon
    // const addtocart = await page.locator("//button[@class='QqFHMw vslbG+ In9uk2']") //amazon
    //const addtocart =await page.locator("//li[@class='col col-6-12 ']")
    //const addtocart = await page.locator("//button[contains(text(),'CART')]//parent::li")//flipkart
    // await page.click("//button[contains(text(),'cart')]//parent::li") //flipkart
    //await page.getByRole('button',{name:'GO TO CART'}).click()
    await addtocart.click()
    //await addtocart.click({button:'left'});
    // await page.waitForTimeout(3000);
    await newPage.screenshot({ path: "screenshots/amazoncart.png" })
})