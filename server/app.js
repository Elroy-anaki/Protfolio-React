require('dotenv').config();
require('./config/DB.config')();
const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.port || 3001;


// A global middlewares
app.use(cors())
app.use(express.json())

// Use routes
const projectRoutes = require('./routes/project.route')

app.use('/projects', projectRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`))