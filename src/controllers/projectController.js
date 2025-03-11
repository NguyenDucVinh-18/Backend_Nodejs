const Customer = require("../models/customer");
const Project = require("../models/project");
const {createProjectService} = require("../services/projectService");

const aqp = require('api-query-params') ;

module.exports = {
    postCreateProjectAPI: async (req, res) => {
        let data = req.body;
        let result = await createProjectService(data);
        return res.status(200).json({
            errorCode: 0,
            data: result,
          });
    }
};
