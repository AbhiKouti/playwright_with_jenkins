import {test , expect} from '@playwright/test'

test("single selcet dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const cnt=await page.locator('//select[@id="country"]/option').count()
    console.log(cnt)
    const txt=await page.locator('//select[@id="country"]').textContent()
    console.log(txt)
    //await page.locator('//select[@id="country"]').selectOption("india")
    //await page.locator('//select[@id="country"]').selectOption({value:"canada"})
    await page.locator('//select[@id="country"]').selectOption({index:3})
    await page.pause()
})

test.skip("checkbox",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//select[@id="colors"]').selectOption(['Red','Blue','Yellow','Red'])

    await page.pause()
})