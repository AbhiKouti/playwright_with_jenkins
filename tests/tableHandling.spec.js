import {test , expect} from '@playwright/test'

test ("webtable-handling",async({page})=>{
    await page.goto("https://qavbox.github.io/demo/webtable/");
    const cell = await page.locator("//table[@id='table02']/tbody/tr[10]/td[5]") ;//to print inside of a perticular cell in the table
    const cellTxt =await cell.textContent();
    console.log(cellTxt)
    const cellFive =await page.locator("//table[@id='table02']/tbody/tr[5]/td[5]");
    const cellFiveTxt = await cellFive.textContent();
    console.log(cellFiveTxt)
    const row = await page.locator("//table[@id='table02']/tbody/tr[5]/td");//To Print Row(allcontent) which is specified
    const rowFive=await row.allTextContents();
    console.log(rowFive)
    const col = await page.locator("//table[@id='table02']/tbody/tr/td[4]");//To Print Specified Colloum
    const colFourthTxt = await col.allTextContents();
    console.log(colFourthTxt)
    const all= await page.locator("//table[@id='table02']/tbody/tr/td");//To Print All Body Table
    const allTableText = await all.allTextContents();
    console.log(allTableText);
    await page.locator("(//table[@id='table01']/tbody//input[@type='checkbox'])[1]").check()
    await page.waitForTimeout(3000)
})