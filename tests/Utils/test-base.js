const {base} = require('@playwright/test');

exports.test =base.test.extend(
   {
    testDataForOrder:  {
        username : "pv123427@gmail.com" ,
    password : "Shiva@123",
    productName : "zara coat 3"
    }
}
)
