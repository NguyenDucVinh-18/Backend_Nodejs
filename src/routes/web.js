const express = require("express");
const router = express.Router();
const {getHomePage, getEjsPage, postCreateUser,getCreateUserPage} = require('../controllers/homeController');

router.get("/", getHomePage)
router.get("/ejs",getEjsPage)
router.post("/create-user",postCreateUser)
router.get("/createUserPage",getCreateUserPage)


module.exports = router;

