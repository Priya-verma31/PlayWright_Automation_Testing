const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('./Utils/ApiUtils');
//Login Api
const LoginPayload = { userEmail: "pv123427@gmail.com", userPassword: "Shiva@123" };
const orderpayload = { orders: [{ country: "India", productOrderedId: "6262e9d9e26b7e1a10e89c04" }] };


//let token
//let orderId;
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils (apiContext , LoginPayload);
    response = await apiUtils.createOrder(orderpayload);

    /*
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: LoginPayload
        })// 200 ,201 
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);
*/

    // create order
    /*
     const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
         {
             data: orderpayload,
             headers: {
                 'Authorization': token,
                 'Content-Type': 'application/json'
             },
         });
     const orderResponseJson = await orderResponse.json();
     console.log(orderResponseJson);
     orderId = orderResponseJson.orders[0];
 
 */

});



//create order is success

test.only('place order', async ({ page }) => {

    const apiUtils = new ApiUtils(apiContext, LoginPayload);
    const orderId = createOrder(orderpayload);
    // page.addInitScript(value => {
    //     window.localStorage.setItem('token', value);
    // }, response.token);


    //await page.goto("https://www.google.com/");

    //await console.log(await page.title());
    const productName = 'zara coat 3';
    const product = page.locator(".card-body");
    //const email = "pv123427@gmail.com";



    await page.goto("https://rahulshettyacademy.com/client/");
    /*
        await page.locator('#userEmail').type("pv123427@gmail.com");
    
        await page.locator("#userPassword").type("Shiva@123");
    
        await page.locator("[value='Login']").click();
    
        await page.waitForLoadState('networkidle');       */
    const title = await page.locator(".card-body b").allTextContents();
    console.log(title);

    const count = await product.count();

    for (let i = 0; i < count; i++) {
        if (
            await product.nth(i).locator("b").textContent() === productName
        )
            //add to cart 
            await product.nth(i).locator("text = Add To Cart").click();
        break;
    }
    //await page.pause();

    /* await page.locator("[routerlink*='cart']").click();
     await page.locator("div li").first().waitFor();
     const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
     expect(bool).toBeTruthy();
 
     await page.locator("text=Checkout").click();
     await page.locator("[placeholder*='Country']").type("ind", { delay: 100 });
     const dropdown = page.locator(".ta-results");
     let optionsCount;
     let text;
     await dropdown.waitFor();
 
     optionsCount = await dropdown.locator("button span").count();
     // console.log("--------------------"+optionsCount)
     for (let i = 0; i < optionsCount; ++i) {
 
         text = await dropdown.locator("button span").nth(i).textContent();
         if (text === " India") {
             await dropdown.locator("button span").nth(i).click();
             break;
         }
 
         // break;
     }
 
     // await page.pause();
     await expect(page.locator(".user__name [type='text']").first()).toHaveText("pv123427@gmail.com");
     await page.locator('.action__submit').click();
 
 
 
     await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
     console.log(orderId);
 
     await page.locator("button[routerlink*='myorders']").click();
     await page.locator("tbody").waitFor();
 
     const rows = await page.locator("tbody tr");
 */
    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {

            await rows.nth(i).locator("button").first().click();
            break;
        }
    }


    const orderIDDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIDDetails)).toBeTruthy();


}
);
