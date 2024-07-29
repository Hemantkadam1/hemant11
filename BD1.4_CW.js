let express = require("express");
let app = express();
//end point 1
function getWelcomeMessage(){
  return "welcome to our service!"
}
app.get("/welcome",(req,res)=>{
  res.send(getWelcomeMessage())
})

//endpoint 2
function getGreetingMessage(username)
{
  return "Hello, " + username + "!";
}
app.get("/greet",(req,res)=>{
  let username = req.query.username;
  res.send(getGreetingMessage(username))
})
//endpoint 3
function checkPassword(password){
  console.log(password.length);
  if(password.length > 15) {
    return "Password is strong."
  }else{
    return "Password is weak."
  } 
}
app.get("/check-password",(req,res)=>{
  let password = req.query.password;
  res.send(checkPassword(password));
});

//endpoint 4
function calculateSum(num1,num2)
{
  let sum = num1 + num2 ;
  return sum.toString();
}
app.get("/sum",(req,res)=>{
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});
//endpoint 5
function checkSubscriptionStatus(username , subscribed)
{
if(subscribed === "true")
{
  return username + "is subscribed";
}
  else 
{
    return username + " is not subscribed";
  }
}
app.get("/subscription-status",(req,res)=>{
  let username=req.query.username;
  let subscribed=req.query.subscribed;
  res.send(checkSubscriptionStatus(username , subscribed));
});

//endpoint 6
function calculateDiscountedPrice(price, discount)
{
let fprice = (price * (discount / 100)) ;
   price = price - fprice;
  return price.toString();
}

app.get("/discounted-price",(req,res)=>{
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price,discount).toString())
});

//endpoint 7
function getGreeting(age , gender , name)
{
  return "Hello, "+ name + "! You are a " + age +" year old " + gender + ".";
}

app.get("/personalized-greeting",(req,res)=>{
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender , name));
});


//endpoint 8
function calculateFinalPrice(price, discount ,tax)
{
  let discountedPrice = price - (price* (discount)/100);
  let finalPrice = discountedPrice + (discountedPrice * (tax /100));
  return finalPrice.toString();
}
app.get("/final-price",(req,res)=>{
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculateFinalPrice(price , discount, tax))
  
});
//endpoint 9
function getTotalExceriseTime(running , cycling , swiming)
{
  return running + cycling + swiming;
}

app.get("/total-exercise-time",(req,res)=>{
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(getTotalExceriseTime(running,cycling,swimming).toString());
});

const PORT=3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:"+ PORT);
});