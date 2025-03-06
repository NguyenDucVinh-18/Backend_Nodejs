const express = require('express')
const mongoose = require("mongoose");
const path = require('path')
const fileUpload = require('express-fileupload')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const connection = require('./config/database')

app.use(fileUpload())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const configViewEngine = require('./config/viewEngine')
configViewEngine(app)

const webRoutes = require('./routes/web')
const apiRouter = require('./routes/api')
app.use('/', webRoutes)
app.use('/v1/api/', apiRouter)




;(async()=> {
  try {
    await connection()
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error)
  }
})()






