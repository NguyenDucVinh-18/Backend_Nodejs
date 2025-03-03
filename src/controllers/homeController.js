const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let result = await getAllUsers();
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

  let [results, fields] = await connection.query(
    `insert into users(email,name,city) values(? , ? , ?)`,
    [email, name, city]
  );
  res.send("User created successfully");
};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
};

const getUpdateUserPage = async (req, res) => {
  let results = await getUserById(req.params.idUser);
  let user = results[0];
  res.render("updateUser.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let id = req.body.idUser;

  console.log(name, email, city, id);

  await updateUser(name, email, city, id);
  res.redirect("/");
};

const getDeletePage = async (req, res) => {
  let results = await getUserById(req.params.idUser);
  let user = results[0];
  res.render("deleteUser.ejs", { userDelete: user });
};

const postDeleteUser = async (req, res) => {
  let id = req.body.idUser;
  await deleteUser(id);
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
