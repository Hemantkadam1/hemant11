let express=require("express");
let app=express();
let port=3000;
//endpoint 1: Return a name in lowercase
app.get("/whisper",(req,res)=>{
  let name=req.query.name;
  let result=name.toLowerCase();
  res.send(result);
});
// Endpoint 2: Concatenate companyNAme and productName to return full product name
app.get("/full-product-name",(req,res)=>{
  let companyName=req.query.companyName;
  let productName=req.query.productName;
  let fullProductName=companyName +" "+ productName;
  res.send(fullProductName);
});

// Endpoint 3: Concatenate month and year to return a formatted date
app.get("/date",(req,res)=>{
  let month = req.query.month;
  let year=req.query.year;
  let formattedDate=month + "/"+ year;
  res.send(formattedDate);
});

//endPoint 4 Return a greeting with the givenhome city
app.get("/greet",(req,res)=>{
  let city=req.query.city;
  let greeting="you Live in "+city;
  res.send(greeting);
})

// endpoint 5 create end point that takes capital and country as query parameter and return a formatted sentence in the format “[capital] is the capital of [country].”

app.get("/capital",(req,res)=>{
  let capital=req.query.capital
  let country=req.query.country;
  let countryCapital=capital+" is the capital of " + country + " , ";
  res.send(countryCapital);
  
        
});
app.get("/officeEmail",(req,res)=>{
  let firstName=req.query.firstName;
  let lastName=req.query.lastName;
  let domain=req.query.domain;
  let email=firstName+","+lastName+"@"+domain;
  res.send(email);
})


app.listen(port,()=>{
  console.log("server is running on http://localhost:" + port);
  
});