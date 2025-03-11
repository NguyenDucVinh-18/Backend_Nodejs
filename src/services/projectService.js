const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProjectService: async (data) => {
    if (data.type === "EMPTY_PROJECT") {
      let result = await Project.create(data);
      return result;
    } else if (data.type === "ADD_USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      // console.log(project);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let result = await myProject.save();
      return result;
    } else if(data.type === "REMOVE_USERS"){
      let myProject = await Project.findById(data.projectId).exec();
      // console.log(project);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }
      let result = await myProject.save();
      return result;
    }
  },
  getAllProjectService: async (query) => {
    const page = query.page;
    const population = query.population;
    const { filter, limit } = aqp(query);
    delete filter.page; 
    let offset = (page - 1) * limit;
    console.log(filter);
    console.log(limit);
    console.log(population);
    let result = await Project.find(filter)
      .skip(offset)
      .limit(limit)
      .populate(population)
      .exec();
    return result;
  },
  updateProjectService: async (data) => {
    let result = await Project.updateOne(
      { _id: data.projectId },
      {
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      }
    );
    return result;
  },
  deleteProjectService: async (projectId) => {
    let result = await Project.deleteById({ _id: projectId }); 
    return result;
  }

};
