const { test , expect } = require('@playwright/test');


test(  'ClientApp login', async ({page})=> 
{
const email = "pv123427@gmail.com" ;
var productName = 'zara coat 3' ;
const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Shiva@123");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle')
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);
const count = await products.count();
for(let i = 0 ; i< count ; ++i){
    if(await products.nth(i).locator("b").textContent()===productName);
    await products.nth(i).locator("text=Add To Cart").click();
    break;
}
})