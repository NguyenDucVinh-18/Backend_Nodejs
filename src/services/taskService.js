const Task = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
  createTaskService: async (data) => {
    if (data.type === "EMPTY_TASK") {
      let result = await Task.create(data);
      return result;
    }
  },
  getAllTasksService: async (query) => {
    const page = query.page;
    const { filter, limit } = aqp(query);
    delete filter.page;
    let offset = (page - 1) * limit;
    let result = await Task.find(filter)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
  updateTaskService: async (data) => {
    let result = await Task.updateOne(
        { _id: data.taskId },
        {
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          description: data.description,
          status:data.status
        }
      );
      return result;
  },
  deleteTaskService: async (taskId) => {
    let result = Task.deleteById({ _id: taskId });
    return result;
  }
};
