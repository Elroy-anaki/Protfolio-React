const mongoose = require("mongoose");



const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sourceLink: { type: String, required: true },
  image: { type: String, required: true },
  languages: { type: [String], required: false },
  description: {
    type: String,
    required: true,
    default: "A project during studies!",
  },
}, { timestamps: true });

/** @type {import('mongoose').Model} */

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
