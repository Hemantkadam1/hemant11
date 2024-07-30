let express = require("express");
let cors = require("cors");
const { send } = require("process");

let app = express();
app.use(cors());
//serverside values
let taxRate = 5; //5%
let discountPercentage = 10; // 10%
let loyaltyRate = 2; // 2 points per $1

//endpoint 1
app.get("/cart-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = (newItemPrice + cartTotal);
  res.send("result " +result);
});

//end point 2
//function
function calculateDiscount(cartTotal,isMember)
{
   if(isMember === "true")
    {
      let discount =(discountPercentage / 100)*cartTotal;
      let result = cartTotal - discount;
      return "discount will appied "+result;
    }else{
      let result = 0;
      return "No discount will applied "+result;
    }
}
//endpoint 2
app.get("/membership-discount",(req ,res )=>{
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  res.send(calculateDiscount(cartTotal,isMember));
 
})
//endpoint 3
app.get("/calculate-tax",(req ,res)=>{
  let cartTotal = parseFloat(req.query.cartTotal);
  let totalTax = (taxRate/100)*cartTotal;
  res.send(totalTax.toString());
})


//endpoint 4
//function
function calculateDeliveryTime(shippingMethod,distance)
{
  
  if(shippingMethod === "standard")
  {
    let dis = distance /100;
    let result = "Standard, the delivery days will be 1 day per 50 kms."
    return result+dis;
  }else{
    let dis = distance /100;
    let result = " Express, the delivery days will be 1 day per 100 kms."
    return result+dis;
  }
}
//endpoint 4
app.get("/estimate-delivery",(req,res)=>{
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  res.send(calculateDeliveryTime(shippingMethod,distance));
})

//endpoint 5
app.get("/shipping-cost",(req ,res)=>{
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shipmentCost = (weight * distance) * 0.1;
  res.send(shipmentCost.toString());
})
//endpoint 6 
app.get("/loyalty-points",(req ,res)=>{
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
   let result = (loyaltyRate * purchaseAmount);
  res.send(result.toString());
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
