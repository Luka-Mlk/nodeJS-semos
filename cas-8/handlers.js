const util = require("./utils");
const DATA_SOURCE = "./data.txt";

const addStudent = async (req, res) => {
  let dataRaw = await util.fileRead(DATA_SOURCE);

  let data = null;

  data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
  console.log(data);
  data.push(req.body);

  await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
  res.send("OK");
};

const getAllStudents = async (req, res) => {
  let data = await util.fileRead(DATA_SOURCE);

  if (data.length > 0) {
    res.send(JSON.stringify(data));
  } else {
    res.send("Nema studenti");
  }
};

const getStudentById = async (req, res) => {
  try {
    // console.log(req.query.id);
    let dataRaw = await util.fileRead(DATA_SOURCE);
    let data = JSON.parse(dataRaw);

    if (data[req.params.id]) {
      res.send(data[req.params.id]);
    } else {
      res.send("nema takov student");
    }
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
};
