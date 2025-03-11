const Project = require("../models/project");
const aqp = require('api-query-params') ;

module.exports = {
    createProjectService : async (data) => {
        if(data.type === "EMPTY_PROJECT"){
            let result = await Project.create(data);
            return result;
        }
    }
};
