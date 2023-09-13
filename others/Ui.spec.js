const { test } = require('@playwright/test');

test('First playwright test' , async ({browser })=>
{
//chrome - Plugins/ cookies

//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});


test('First playwright test', async ({ page }) => {
    await page.goto("https://www.google.com/");

    await console.log(await page.title());

    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

    await page.locator("#signInBtn").click();

    console.log(cardTitles.first().textContent());

    await cardTitles.nth(1).textContent();

    const allTitle = await cardTitles.allInnerTexts();

    await console.log(allTitle);

});


test.only('UI Controls', async ({ page }) => {
    await page.goto("https://www.google.com/");

    await console.log(await page.title());

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

    const dropdown = await page.locator("select.form-control");

    await dropdown.selectOption("Student");
    //await page.pause();
    await page.locator(".radiotextsty").last().click();
    //  await page.locator("#okayBtn").click();

    console.log(await page.locator(".radiotextsty").last().isChecked());
    //await page.locator(".radiotextsty").last();

}
);