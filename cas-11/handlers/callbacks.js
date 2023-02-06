const blogpost = require("../models/blogpost");

const create = async (req, res) => {
  try {
    let data = {
      ...req.body,
      publish_date: new Date().toISOString(),
    };
    console.log(data);
    await blogpost.create(data);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};
const edit = async (req, res) => {
  try {
    let data = {
      ...req.body,
    };
    await blogpost.updateOne(req.params.id, data);
    res.redirect("/");
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
const remove = async (req, res) => {
  try {
    await blogpost.remove(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  create,
  edit,
  remove,
};
