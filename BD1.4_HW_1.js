let express = require("express");
let app = express();

// Question 1:Create an endpoint that returns a welcome message to a student who wants to learn functions.
function getWelcomeMessage()
{
  return "we will now learn function";
}
app.get("/welcome",(req,res)=>{
  res.send(getWelcomeMessage());
});

//Function to return a greeting message
function getGreetingMessage(username)
{
  return "Hey, " + username +"! Are you ready to learn function with us?";
}
// Function 2:- Take a username and return greting message
app.get("/greet", (req,res)=>{
  let username = req.query.username;
  res.send(getGreetingMessage(username));
})
//function
function checkYearsOfExp(yearOfExp)
{
  if(yearOfExp > 0){
    return "You have some experience with function great";
  }else{
    return "No worries. you will start writing function in no time";
  }
}

//Function 3 :- Take the years of experience in function and return a message
app.get("/message",(req,res)=>{
  let yearsOfExp = parseFloat(req.query.yearsOfExp);
  res.send(checkYearsOfExp(yearsOfExp));
});

//Function 4 :- Take the hours per day and days in a week that the student can dedicate to learn function and find


app.get("/hours",(req,res)=>{
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(getTime(days,hours).toString());
});

//Function to return Time the student can dedicate to learn function
function getTime(days , hours)
{
return days * hours;
}

//question :- 5
//Function to return the module completion message
function getModuleComplition(username , hasCompleted)
{
  if(hasCompleted)
  {
    return username +" has completed the module";
  }
  else{
    return username + " has not completed the module";
  }
  }
//End point 5 :- Take a username and boolean indicating module completion status , return a message if the student has completed the module or not 
app.get("/module-completion-status",(req,res)=>{
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted === true;
  res.send(getModuleComplition(username , hasCompleted));
});
  //Question 6:-
  // Function to return a persoanlized greeting messsage
  function getPersonalizedGreeting(city, name)
  {
    return "Hey, "+ name + "! what famous about " + city + "?";
  }
  // End point 6 :- Take a student city and name return a personalized greeting message 
  app.get("/personalized-greeting",(req,res)=>{
    let city = req.query.city;
    let name = req.query.name;
    res.send(getPersonalizedGreeting(city, name));
  });
//question :-7
//Function to find the age from birth year
function findAge(birthyear)
{
return 2024 - birthyear;
}
//Endpoint 7: Take the birth year of the student and return the age
app.get("/find-age",(req,res)=>{
  let birthyear = parseInt(req.query.birthyear);
  res.send(findAge(birthyear).toString());
})

//Question 8:-
//Function to return the time require message
function findRequiredTime(days , hours)
{
  let time =days * hours;
  if(time >= 30)
  {
    return "The time being dedicated is sufficient for learning functions";
  }else{
    return "The time being dedicated is not sufficient for learning fu-fnctions"
  }
  }


// Endpoint 8Take the days per week and hours per day student can dedicated to learn function and return whether its is sufficient (>= 30)

app.get("/is-time-sufficient",(req,res)=>{
  let days = parseFloat(req.query.days)
  let hours = parseFloat(req.query.hours);
  res.send(findRequiredTime(days , hours).toString());
});

const PORT=3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:"+ PORT);
});