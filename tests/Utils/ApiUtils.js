class ApiUtils {
    constructor(apiContext) {
        this.apiContext = apiContext
        this.LoginPayload = this.LoginPayload;
    }



    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.LoginPayload
            })// 200 ,201 
      //  expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        console.log(loginResponseJson)
        const token = loginResponseJson.token;
        console.log(token);
        return token;


    }
    async createOrder(orderpayload) {
        let response = {};
        response.token = await this.getToken();
        // const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        //     {
        //         data: orderpayload,
        //         headers: {
        //             'Authorization': response.token,
        //             'Content-Type': 'application/json'
        //         },
        //     });
        // const orderResponseJson = await orderResponse.json();
        // console.log(orderResponseJson);
        // const orderId = orderResponseJson.orders[0];

        // response.orderId = orderId;
        // return response;

    }


}
module.exports = { ApiUtils };