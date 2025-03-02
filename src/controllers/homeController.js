const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let result = await getAllUsers();
  return res.render("home.ejs",{listUsers:result});
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
    `insert into users(email,name,city) values(? , ? , ?)`, [email, name, city],
  ) 
  res.send("User created successfully");



};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
}
module.exports = {
  getHomePage,
  getEjsPage,
  postCreateUser,
  getCreateUserPage,
};
