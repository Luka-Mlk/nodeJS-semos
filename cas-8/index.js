const express = require("express");
const handlers = require("./handlers");
const app = express();

app.use(express.json());
// routes / endpoints
// post /studenti -> gi vrajka site studenti
app.post("/studenti", handlers.addStudent);
// get /studenti:id -> vrajka studenti so id
app.get("/studenti/:id", handlers.getStudentById);
// put /studenti:id -> azurira student so id

// delete /studenti:id -> brise student so id

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server started on port: 3000");
});
