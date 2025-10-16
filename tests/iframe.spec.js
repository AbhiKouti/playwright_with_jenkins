import {test,expect} from '@playwright/test'

test("iframe",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //const frame=await page.frames()
    //console.log("frame count :",await frame.length)

    //for(let URL of frame){
       // console.log("frame url :",await URL.url())
   // }
    //frame {url or name} method can be user only when url and name  
    //framelocator {locator} can be userdwhen no url and name present in locator
    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame.locator('//input[@name="mytext1"]').fill("playwright")

    //await page.frame({url:"https://rahulshettyacademy.com/"})
    //await page.frame({nmae:"iframe-name})
    //await page.frameLocator('//iframe[@id="courses-iframe"]')
})

test.only("nested iframe",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame3.locator('//input[@name="mytext3"]').fill("playwright")

    const child=await frame3.childFrames()
    await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()
})