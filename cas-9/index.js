const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/podatoci/:ime", (req, res) => {
  let data = {
    ime: req.params.ime,
    studenti: [
      { firstName: "Goran", lastName: "Goranovski" },
      { firstName: "Jansko", lastName: "Janskovski" },
      { firstName: "Stanko", lastName: "Stankovski" },
      { firstName: "Stanka", lastName: "Stankovska" },
      { firstName: "Goran", lastName: "Goranovski" },
      { firstName: "Goran", lastName: "Goranovski" },
    ],
  };
  res.render("podatoci", data);
});

app.get("/formular", (req, res) => {
  res.render("formular");
});

app.post("/formular-rezultat", (req, res) => {
  let data = {
    ime: req.body.ime,
  };
  console.log(data);
  res.render("formular-rezultat", data);
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Server startiran na porta 3000");
});
