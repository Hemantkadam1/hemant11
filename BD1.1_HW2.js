let express=require("express");
let app=express();
let PORT=3000;

app.get("/custom-commit",(req,res)=>{
  let type=req.query.type;
  let message=req.query.message;
  let result=type+" :"+message;
  res.send(result);
  
})
app.get("/certificate",(req,res)=>{
  let firstName=req.query.firstName;
   let lastName=req.query.lastName;
   let courseName=req.query.courseName;
  let result="this certificate is awarded to "+firstName+" "+lastName+" for compliting the course "+courseName;
  res.send(result);
});

app.get("/autoreply",(req,res)=>{
  let startMonth=req.query.startMonth;
  let endMonth=req.query.endMonth;
  let result= "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from "+startMonth+" till "+endMonth+". Your enquiry will be resolved by another colleague.";
    res.send(result);
});

app.get("/secureurl",(req,res)=>{
  let domain=req.query.domain;
  let result="https://"+domain;
  res.send(result);
});
app.get("/sendotp",(req,res)=>{
  let otpCode=req.query.otpCode;
  let result="your OTP for account verification is "+otpCode+". Do not share to any one"
  res.send(result)
})

app.get("/welcome",(req,res)=>{
  let firstName=req.query.firstName;
  let email=req.query.email;
  let result="Hey " + firstName + " we are excited to have you here.we will send future notification to your registered mail (" + email+ " )";
  res.send(result);
})

app.get("/github-profile",(req,res)=>{
  let userName =req.query.userName;
  let result ="https://github.com/" + userName;
  res.send(result);
});
app.get("/text-to-csv",(req,res)=>{
  let id=req.query.id;
  let email=req.query.email;
  let rollNumber=req.query.rollNumber;
  let result=id+" ,"+ email + " ,"+ rollNumber;
  res.send(result);
});





app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});