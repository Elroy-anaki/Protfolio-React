require('dotenv').config();
require('./config/DB.config')();

const express = require('express');
const app = express();
const port = process.env.port || 3001;



app.listen(port, () => console.log(`App listening on port ${port}!`))