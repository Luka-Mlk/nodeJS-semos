const http = require("http");

// Kreiranje server
const server = http.createServer((req, res) => {
  let textArr = req.url.split("/");
  console.log(textArr);
  if (textArr[1] === "odzemanje") {
    let result = textArr[2] - textArr[3];
    res.end(String(result));
  } else if (textArr[1] === "sobiranje") {
    let result = Number(textArr[2]) + Number(textArr[3]);
    res.end(String(result));
  } else if (textArr[1] === "mnozenje") {
    let result = textArr[2] * textArr[3];
    res.end(String(result));
  } else if (textArr[1] === "delenje" && textArr[2] !== 0 && textArr[3] !== 0) {
    let result = textArr[2] / textArr[3];
    res.end(String(result));
  }
});
server.listen(3000, () => {
  console.log("Server listening");
});
