const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../tests/PageObjects/LoginPage');
const { DashboardPage } = require('../tests/PageObjects/Dashboardpage');
const { POManager } = require('../tests/PageObjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require("../tests/Utils/PlaceOrderTestData.json")));
const {customtest} = require('../tests/Utils/test-base');

test('ClientApp login', async ({ page }) => {

    //js file - Login js , DasboardPage 
    const username = "pv123427@gmail.com";
    const password = "Shiva@123"
    var productName = 'zara coat 3';
    const products = page.locator(".card-body");
    const loginPage = POManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(dataSet.username, dataSet.password);
    const dashboardPage = POManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    //const dashboardPage = new DashboardPage(page);

    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

    const cartPage = POManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

    const ordersReviewPage = POManager.getOrderReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    //const ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTrutthy();














    //--------------------------------------------------
    /*await page.goto("https://rahulshettyacademy.com/client/");
    //await page.locator("#userEmail").fill(email);
    //await page.locator("#userPassword").fill("Shiva@123");
    /await page.locator("[value='Login']").click();
    
    await page.waitForLoadState('networkidle')
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName)
            await
                await products.nth(i).locator("text=Add To Cart").click();
        break;
    }
*/
}
)