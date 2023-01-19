const home = (req, res) => {
  res.send("zdravo od home!");
};
const calculator = (req, res) => {
  //   console.log("Req operation: " + req.params.operation);
  //   console.log("Req query: " + JSON.stringify(req.query));
  switch (req.params.operation) {
    case "sobiranje":
      result = Number(req.query.a) + Number(req.query.b);
      break;
    case "odzemanje":
      result = Number(req.query.a) - Number(req.query.b);
      break;
    case "moozenje":
      result = Number(req.query.a) * Number(req.query.b);
      break;
    case "delenje":
      result = Number(req.query.a) / Number(req.query.b);
      break;
    default:
      result = 0;
  }
  res.send(result.toString());
  res.send("");
};
module.exports = {
  home,
  calculator,
};
