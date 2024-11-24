const mongoose = require("mongoose");

const languagesSchema = mongoose.Schema({
    name: {type: String, required: true},
})

const projectSchema = mongoose.Schema({
    title: {type: String, required: true},
    sourceLink:{type: String, required: true},
    image: {type: String, required: true},
    languages: {type: [languagesSchema], required: false}
})


const Project = mongoose.model('Project', projectSchema);

module.exports = Project