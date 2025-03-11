const Customer = require("../models/customer");
const Task = require("../models/task");
const {
  createTaskService,
  getAllTasksService,
  updateTaskService,
  deleteTaskService
} = require("../services/taskService");

const aqp = require("api-query-params");

module.exports = {
  postCreateATasksAPI: async (req, res) => {
    let data = req.body;
    let result = await createTaskService(data);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  getAllTasksAPI: async (req, res) => {
    let result = await getAllTasksService(req.query);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  putUpdateTaskAPI: async (req, res) => {
    let data = req.body;
    let result = await updateTaskService(data);
    try {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: -1,
        data: error,
      });
    }
  },
  deleteTAskAPI: async (req, res) => {
    let taskId = req.body.taskId;
    let result = await deleteTaskService(taskId);
    try {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: -1,
        data: error,
      });
    }
  },
};
