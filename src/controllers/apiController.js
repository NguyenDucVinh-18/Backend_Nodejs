const connection = require("../config/database");
const {

} = require("../services/CRUDService");

const User = require("../models/user");

const getUsersAPI = async (req, res) => {
  let result = await User.find({});
  return res.status(200).json(
    {
        errorCode:0,
        data:result
    }
  )
};

const postCreateUserAPI = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
  
    let user = await User.create({ name, email, city });
  
    return res.status(200).json(
        {
            errorCode:0,
            data:user
        }
      )
  };

  const putUpdateUserAPI = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let id = req.body.idUser;
  
    console.log(name, email, city, id);
  
    // await updateUser(name, email, city, id);
    let user = await User.updateOne({ _id: id }, { name: name, email: email, city: city });
    return res.status(200).json(
        {
            errorCode:0,
            data:user
        }
      )
  };

  const deleteUserAPI = async (req, res) => {
    let id = req.body.idUser;
    let result = await User.deleteOne({ _id: id });
    return res.status(200).json(
        {
            errorCode:0,
            data:result
        }
      )
  };


module.exports = {
    getUsersAPI,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI
};
