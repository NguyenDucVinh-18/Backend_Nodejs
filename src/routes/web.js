const express = require("express");
const router = express.Router();
const {getHomePage, getEjsPage, postCreateUser} = require('../controllers/homeController');

router.get("/", getHomePage)
router.get("/ejs",getEjsPage)
router.post("/create-user",postCreateUser)


module.exports = router;

