const Customer = require("../models/customer");
const Project = require("../models/project");
const {
  createProjectService,
  getAllProjectService,
  updateProjectService,
  deleteProjectService
} = require("../services/projectService");

const aqp = require("api-query-params");

module.exports = {
  postCreateProjectAPI: async (req, res) => {
    let data = req.body;
    let result = await createProjectService(data);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  getAllProjectAPI: async (req, res) => {
    let result = await getAllProjectService(req.query);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  putUpdateProjectAPI : async (req,res) => {
    let data = req.body;
    let result = await updateProjectService(data);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteProjectAPI : async (req,res) => {
    let projectId = req.body.projectId;
    let result = await deleteProjectService(projectId);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  }
};
