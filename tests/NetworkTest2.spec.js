const { test, expect, request } = require('@playwright/test')
const { ApiUtils } = require('./Utils/ApiUtils');
const loginPayLoad = { userEmail: "pv123427@gmail.com", userPassword: "Shiva@123" };
const orderpayload = { orders: [{ country: "India", productOrderId: "64c25fa27244490f958df9e3" }] };
const fakePayLoadOrders = { data: [], message: "No orders" };

let response
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderpayload);
})

//create order is success
test('place the order', async ({ page }) => {
    // page.addInitScript(value => {
    //     window.localStorage.setItem('token', value);
    // }, response.token


    // );
    // await page.goto("https://rahulshettyacademy.com/client/");
    // await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/64be773b7244490f958a462a");
    // await page.locator("button[routerlink*='myorders']").click();
    // await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=64c26f357244490f958e1602");
    // route => route.continue({ url: 'https://rahulshettyacademy.com/client/dashboard/order-details/64c3b4027244490f958ef428' });
    // await page.locator("button:has-text('View')").first().click();
    // await page.pause();


});