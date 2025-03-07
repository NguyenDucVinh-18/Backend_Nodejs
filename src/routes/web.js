const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getEjsPage,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/ejs", getEjsPage);
router.post("/create-user", postCreateUser);
router.get("/createUserPage", getCreateUserPage);
router.get("/updateUserPage/:idUser", getUpdateUserPage);
router.post("/update-user", postUpdateUser);
router.get("/deleteUserPage/:idUser", getDeletePage);
router.post("/delete-user", postDeleteUser);

module.exports = router;
