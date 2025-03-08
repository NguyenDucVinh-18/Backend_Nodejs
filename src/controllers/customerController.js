const Customer = require("../models/customer");
const { upLoadSingleFile } = require("../services/fileService");
const {createCustomerService,createArrayCustomerService,getAllCustomersService} = require("../services/customerService");

module.exports = {
  postCreateCustomerAPI: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageURL = "";
    if (!req.files || Object.keys(req.files).length === 0) {
    }
    let imagePath = await upLoadSingleFile(req.files.image);

    imageURL = imagePath.path;
    let customer = {
        name,
        address,
        phone,
        email,
        description,
        image: imageURL,
    }
    let result = await createCustomerService(customer);
    
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
  },
  postCreateArrayCustomerAPI: async (req, res) => {
    let customers = req.body.customers;
    let result = await createArrayCustomerService(customers);
    if(result){
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        return res.status(500).json({
            errorCode: -1,
            data: null
        })
    }
  },
  getAllCustomersAPI: async (req, res) => {
    let result = await getAllCustomersService();
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
  }
};
