const mongoose = require("mongoose");

const languagesSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  sourceLink: { type: String, required: true },
  image: { type: String, required: true },
  languages: { type: [languagesSchema], required: false },
  description: { type: String, required: true, default: "A project during studies!" },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
