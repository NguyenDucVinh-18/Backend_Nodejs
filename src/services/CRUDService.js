const connection = require("../config/database");

const getAllUsers = async () =>{
    let[results, fields] = await connection.query(`select * from users`);
    return results;
}

const getUserById = async (id) =>{
    const[results, fields] = await connection.query(`select * from users where id = ?`,[id]);
    return results;
}

const updateUser = async(name,email,city,id) => {
    const[results, fields] = await connection.query(`update users set name = ? , email = ? , city = ? where id = ?`,[name,email,city,id]);
}

module.exports = {
    getAllUsers,getUserById,updateUser
}
