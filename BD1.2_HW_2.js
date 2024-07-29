let express=require("express");
let app=express();
let port=3000;

//1.2.1 Body Mass Index (BMI) Calculator
app.get("/bmi",(req,res)=>{
  let height= parseFloat(req.query.height);
  let weight=parseFloat(req.query.weight);
  let bmi=(weight / (height*height));
  res.send(" yourBMI is :"+ bmi);
});
//1.2.2 Calculate grocery checkout price
app.get("/checkout",(req,res)=>{
  let product = (req.query.product);
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
  let totalPrice = ( units* price);
  res.send("your total for" + units+" "+ product +" is "+ totalPrice);
});

// Question 3: Calculate grade percentage
app.get("/grade",(req,res)=>{
  let maths=parseInt(req.query.maths);
  let science=parseInt(req.query.science);
  let english=parseInt(req.query.english);
  let percentage = ((maths + science + english) / 3);
  res.send("your percentage is "+ percentage +"%");
});
//Question 4: Return bill amount after applying discount
app.get("/discounted-price",(req,res)=>{
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let  discountedPrice = (cartTotal-(cartTotal*(discount / 100)));
  res.send("Result : your bill amount is " + discountedPrice);
});
//1.2.5 split bill amount friend
app.get("/split-bill",(req,res)=>{
  let billAmount=parseFloat(req.query.billAmount);
  let numberOfFriends=parseInt(req.query.numberOfFriends);
  let splitBill=(billAmount/numberOfFriends);
  res.send("Result Eatch friend owes RS " +splitBill+ "against the bill");
});
//Question 6: Convert Celsius to Fahrenheit
app.get("/celsius-to-fahrenheit",(req,res)=>{
  let celsius=parseFloat(req.query.temperature);
  let fahrenheit=(celsius * 9/5 + 32);
  res.send("Result:" + fahrenheit+ " Fahrenheit ");
});

//Question 7: Calculate monthly salary
app.get("/monthly-salary",(req,res)=>{
  let totalHours=parseInt(req.query.totalHours);
  let hourlyWage=parseFloat(req.query.hourlyWage);
  let monthlySalary= hourlyWage * totalHours;
  res.send("Result :- your monthly salary is "+ monthlySalary);
});

app.listen(port,()=>{
  console.log("server is runing http://localhost"+port);
});