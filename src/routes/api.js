const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
} = require("../controllers/apiController");

const {
  postCreateCustomerAPI,
  postCreateArrayCustomerAPI,
  getAllCustomersAPI,
  putUpdateCustomerAPI,
  deleteACustomerAPI
} = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);

routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomerAPI);
routerAPI.get("/customers", getAllCustomersAPI);
routerAPI.put("/customers", putUpdateCustomerAPI);
routerAPI.delete("/customers", deleteACustomerAPI);

module.exports = routerAPI;
