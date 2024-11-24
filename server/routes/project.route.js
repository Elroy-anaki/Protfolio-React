const express = require('express');

const router = express.Router();

router.get('/get-all-projects', projectControllers.getAllProjects)

router.get('/get-project-by-id/:id', projectControllers.getProjectById)

router.post('/create-project', projectControllers.createProject)

module.exports = router;