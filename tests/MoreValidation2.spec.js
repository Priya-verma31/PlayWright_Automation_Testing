const { test, expect } = require('@playwright/test')
/*
test ("popup validations" , async({page})=> 
{ 
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto("https://www.google.com/");
//await page.goBack();
//await page.goForward();
 
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//await page.pause();
//dialog box
page.on('dialog',dialog  => dialog.accept());

await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();
//frames
const framespage = page.frameLocator("#course-iframe");
//await framespage.locator("li a[href*='lifetime-acess']:visible").click();
const textCheck = await framespage.locator(".text h2").textContent();
console.log(textCheck.split(" ")[1]);
}
)
*/

test("screenshot and visual comparison", async ({ page }) => {
    

    await console.log(await page.title());

    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').type("rahulshettyacademy");

    await page.locator("[type='password']").type("learning");

    await page.locator("#signInBtn").click();
    await page.locator("#signInBtn").screenshot({path :'screenshot.png'});

    //await page.screenshot({path : 'screenshot.png'});


    console.log(cardTitles.first().textContent());

    await cardTitles.nth(1).textContent();

    const allTitle = await cardTitles.allInnerTexts();

    await console.log(allTitle);

}
)
test.only("visual", async ({ page }) => {
   await page.goto("https://google.com/") ;
   expect (await page.screenshot()).toMatchSnapshot('landing.png');

})