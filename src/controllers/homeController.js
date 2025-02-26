const getHomePage = (req, res) => {
  res.send("Hello World! nodemon");
};

const getEjsPage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getEjsPage,
};
