const express = require("express");
const handlers = require("./handlers");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("zrdavo od get pocetna");
});

app.post("/", (req, res) => {
  res.send("Zdravo od post pocetna");
});

app.get("/home", handlers.home);
app.get("/calc/:operation", handlers.calculator);

app.use("/mid", (req, res, next) => {
  console.log("before mid");
  next();
});

app.all("/mid", (req, res, next) => {
  res.send("/mid called");
  next();
});

app.use("/mid", (req, res, next) => {
  console.log("after mid");
  next();
});

app.use();

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Uspesno startuvan");
});
