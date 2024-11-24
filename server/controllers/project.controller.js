const Project = require("../models/project.model");

exports.getAllProjects = async (req, res) => {};

exports.getProjectById = async (req, res) => {};

exports.createProject = async (req, res) => {
  try {
    const newProject = Project.create(req.body);
    res.status(201).json({ succses: true, newProject });
  } catch (error) {
    res.status(500).json({ succses: true, msg: error });
  }
};
