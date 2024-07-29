let express= require("express");
let app = express();
const PORT = 3000;

function genrateProfileUrl(username)
{
  let result = "http:/github.com/ " +username
return result;  
}
app.get("/github-profile",(req,res)=>{
  let username= req.query.username;
  res.send(genrateProfileUrl(username));
});

//question 2 
//Function 
function generateCertificate(firstName,lastName,courseName)
{
  let result="This is the certificate Awarded to "+firstName+" "+ lastName +"for compliting the  Course "+courseName; 
  return result;
}
//endpoint 2
app.get("/certificate",(req,res)=>{
  let firstName=req.query.firstName;
  let lastName=req.query.lastName;
  let courseName=req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

//Question 3
//Function
function calculateGrade(math,eng,sci)
{
  let result=(math+eng+sci)/3;
  return result+"%"
}
//Endpoint 3
app.get("/grade",(req,res)=>{
  let math = parseInt(req.query.math);
  let eng = parseInt(req.query.eng);
  let sci = parseInt(req.query.sci);
  res.send(calculateGrade(math,eng,sci));
})

//Question 4
//Function
function splitBill(billAmount,numberOfFriends)
{
  let splitAmount = billAmount / numberOfFriends
  return "result eatch Friend owes Rs."+splitAmount+"Against the bill";
}
//Endpoint 4
app.get("/split-bill",(req,res)=>{
  let billAmount = req.query.billAmount;
  let numberOfFriends = req.query.numberOfFriends ;
  res.send(splitBill(billAmount,numberOfFriends));
})

//question 5
//function 
function calculateSalary(totalHours,hourlyWage)
{
  let monthlySalary = hourlyWage * totalHours
  return "your monthly salary is " +monthlySalary;
  
}
//endpoint 5
app.get("/monthly-salary",(req,res)=>{
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours,hourlyWage));
})


app.listen(PORT , ()=>{
  console.log("Server is running on http://localhost"+PORT);
})