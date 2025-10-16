import { test, expect } from '@playwright/test';
// test("radio button",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//input[@id="female"]').check()
//     await expect(page.locator('//input[@id="female"]')).toBeChecked()
//     //await expect(page.locator('//input[@id="male"]')).not.toBeChecked()
//     await page.pause()
//     await page.locator('//input[@id="female"]').uncheck()
//     // await page.locator('//input[@id="sunday"]').check()
//     // await expect(page.locator('//input[@id="sunday"]')).toBeChecked()
//      await page.waitForTimeout(2000)
// })

// test("checkbox",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//input[@id="sunday"]').check()
//     await expect(page.locator('//input[@id="sunday"]')).toBeChecked()
//     //await page.waitForTimeout(2000)
//     await page.pause()
//     await page.locator('//input[@id="sunday"]').uncheck()
//     await page.waitForTimeout(2000)
// })

test("checkbox",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    let locat=['//input[@id="sunday"]','//input[@id="monday"]','//input[@id="tuesday"]','//input[@id="wednesday"]','//input[@id="thursday"]','//input[@id="saturday"]']

    for(let print of locat){
        await page.locator(print).check()
        await expect(page.locator(print)).toBeChecked()
    }
    await page.pause()
})