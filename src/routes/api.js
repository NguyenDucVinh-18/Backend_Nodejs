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
  deleteACustomerAPI,
  deleteArrayCustomerAPI,
  
} = require("../controllers/customerController");

const{postCreateProjectAPI,getAllProjectAPI,putUpdateProjectAPI,deleteProjectAPI} = require("../controllers/projectController");

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
routerAPI.delete("/customers-many", deleteArrayCustomerAPI);

routerAPI.post("/projects", postCreateProjectAPI);
routerAPI.get("/projects", getAllProjectAPI);
routerAPI.put("/projects", putUpdateProjectAPI);
routerAPI.delete("/projects", deleteProjectAPI);

module.exports = routerAPI;
