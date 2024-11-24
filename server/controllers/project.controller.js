const Project = require("../models/project.model");

exports.getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find();
    res.status(200).json({ succses: true, allProjects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succses: true, msg: error });
  }
};

exports.getProjectById = async (req, res) => {};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json({ succses: true, newProject });
  } catch (error) {
    res.status(500).json({ succses: true, msg: error });
  }
};
