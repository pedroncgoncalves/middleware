const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require("cookie-Parser")

app.use(globalWelcome);
app.use(cookieParser())

app.get("/", (req, res) => {
  console.log("Home Page Running");
  res.send("This is the Home Page");
});

app.get("/users", usersPageWelcome, (req, res) => {
  console.log("Users PageRunning");
  res.send("This is the Users Page");
});

function globalWelcome(req, res, next) {
  console.log("Welcome to the global level middleware");
  next();
}

function usersPageWelcome(req, res, next){
    console.log("Welcome to the router-level middleware")
    next()
}

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${port}`);
});
