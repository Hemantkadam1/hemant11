let express = require("express");
let app = express();

app.get("/check-number",(req,res)=>{
  let number =parseFloat(req.query.number);
  let result=" ";
  if(number >= 0)
  {
    result = "positive Number";
  }
  else{
    result = "Negative Number";
  }
  res.send(result);
});

app.get("/check-even-odd",(req,res)=>{
  let number = parseFloat(req.query.number);
  let result=" ";
  if(number % 2 === 0)
  {
    result="Number is even";
  }
  else
  {
    result="Number is odd"
  }
  res.send(result);
})

app.get("/check-login",(req,res)=>{
  let isLoggedIn = req.query.isLoggedIn;
  console.log(isLoggedIn);
let result=" ";
  if(isLoggedIn === "true")
  {
 result="User is Logged in";   
 
  }
  else
  {
    result="User is not logged in";
  }
  res.send(result)
})

app.get("/check-discount",(req,res)=>{
  let age=parseFloat(req.query.age)
  let result=" ";
  if(age > 65)
  {
    result="User is eligible for a discount";
  }
  else
  {
    result="User is not eligible for a discount";
  }
  res.send(result);
})



app.get("/check-number-type",(req,res)=>{
  let number=parseFloat(req.query.number);
  
    let result=" ";
  if(number > 0)
  {
    result="Positive Number"
  }
  else if(number < 0 )
  
  {
    result="Negative number";
    
  }
  else 
  {
    result="Number is Zero"
  }
  res.send(result);
  
})

app.get("/check-temperature",(req,res)=>{
  let temperature=parseFloat(req.query.temperature);
  let result=" ";
  if(temperature <15)
  {
    result="Temperature is cold";
  }
  else if(temperature <= 25)
  {
    result="Temperature is warm";
  }
  else{
    result="Temperature is Hot";
  }
  res.send(result);
})

app.get("/check-activity-level",(req,res)=>{
  let steps=parseFloat(req.query.steps);
  let result=" ";

  if(steps<5000)
  {
    result="Activity level is low";
    
  }else if (steps<=10000)
  {
    result="Activity level is moderate"
    
  }
  else{
    result="Activity level is High"
  }
  res.send(result);
})

app.get("/check-engagement",(req,res)=>{
  let likes=parseFloat(req.query.likes);
  let result=" ";
  if(likes < 100)
  {
    result="Engagement level is low";
  }
  else if(likes <= 500)
    {
      result="Engagement level is low";
    }
  else
  {
    result="Engagement level is High";
  }
  res.send(result);
})
const PORT=3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:"+ PORT);
});