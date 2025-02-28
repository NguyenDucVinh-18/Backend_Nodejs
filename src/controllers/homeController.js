const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getEjsPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;

  console.log(name, email, city);
  connection.query(
    `insert into users(email,name,city) values(? , ? , ?)`,
    [email, name, city],
    function (err, result) {
      console.log(result);
      res.send("User created successfully");
    }
  );
};
module.exports = {
  getHomePage,
  getEjsPage,
  postCreateUser,
};
