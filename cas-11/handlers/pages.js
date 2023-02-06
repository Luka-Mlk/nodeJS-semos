const blogpost = require("../models/blogpost");
const main = async (req, res) => {
  try {
    let data = await blogpost.getAll();
    return res.render("main", { data });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};
// nema potreba da e asinhrona deka nema array
const singleBlogpost = async (req, res) => {
  try {
    let data = await blogpost.getOne(req.params.id);
    return res.render("single_blogpost", { data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

const formAdd = (req, res) => {
  return res.render("form_add");
};
const formEdit = async (req, res) => {
  try {
    let data = blogpost.getOne(req.params.id);
    return res.render("form_edit", { data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};
module.exports = {
  main,
  singleBlogpost,
  formAdd,
  formEdit,
};
