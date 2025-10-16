import { test, expect } from '@playwright/test';

test("build-in assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
    await expect(page.locator('//p[@class="description"]/span')).toHaveText('For Selenium, Cypress & Playwright')
    await expect(page.locator('//p[@class="description"]/span')).toContainText('Playwright')
    const input=page.locator('//input[@id="name"]')
    await expect(input).toBeEmpty()
    await input.fill('playwright')
    await expect(input).toHaveValue('playwright')
    await expect(input).not.toBeEmpty()
})