const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

const configViewEngine = require('./config/viewEngine')
configViewEngine(app)

const webRoutes = require('./routes/web')
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

