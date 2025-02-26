const express = require("express");
const router = express.Router();
const {getHomePage, getEjsPage} = require('../controllers/homeController');

router.get("/", getHomePage)
router.get("/ejs",getEjsPage)


module.exports = router;

