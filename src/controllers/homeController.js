const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHomePage = async (req, res) => {
  let result = await User.find({});
  return res.render("home.ejs", { listUsers: result });
};

const getEjsPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;

  // console.log(name, email, city);
  // connection.query(
  //   `insert into users(email,name,city) values(? , ? , ?)`,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(result);
  //     res.send("User created successfully");
  //   }
  // );

  // let [results, fields] = await connection.query(
  //   `insert into users(email,name,city) values(? , ? , ?)`,
  //   [email, name, city]
  // );

  await User.create({ name, email, city });

  res.send("User created successfully");
};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
};

const getUpdateUserPage = async (req, res) => {
  // let results = await getUserById(req.params.idUser);
  // let user = results[0];
  let user = await User.findById(req.params.idUser).exec();
  res.render("updateUser.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let id = req.body.idUser;

  console.log(name, email, city, id);

  // await updateUser(name, email, city, id);
  await User.updateOne({ _id: id }, { name: name, email: email, city: city });
  res.redirect("/");
};

const getDeletePage = async (req, res) => {
  // let results = await getUserById(req.params.idUser);
  // let user = results[0];
  let user = await User.findById(req.params.idUser).exec();
  res.render("deleteUser.ejs", { userDelete: user });
};

const postDeleteUser = async (req, res) => {
  let id = req.body.idUser;
  // await deleteUser(id);
  await User.deleteOne({ _id: id });
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getEjsPage,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
};
