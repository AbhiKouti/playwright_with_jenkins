import {test , expect} from '@playwright/test'
test.skip('Simple alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        console.log(dialog.type())
        console.log(dialog.message())
        expect(dialog.message("I am an alert box!"))
        await dialog.accept()
    })
    await page.click('//button[@id="alertBtn"]')
    await page.waitForTimeout(3000)
})

test('Confirmation alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        console.log(dialog.type())
        console.log(dialog.message())
        expect(dialog.message("Press a button!"))
        //await dialog.accept()
        await dialog.dismiss()
    })
    await page.click('//button[@id="confirmBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
})

test.only('prompt alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        console.log(dialog.type())
        console.log(dialog.message())
        //await dialog.accept("playwright")
        await dialog.dismiss()
    })
    await page.click('//button[@id="promptBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")
    await page.waitForTimeout(3000)
})