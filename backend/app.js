const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const httpStatus = require('http-status');
const config = require('./config/config');
const ApiError = require("./utils/ApiError");
const fs = require('fs');
const {errorHandler} = require("./middlewares/errorHandler");


const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({extended: true}));

// sanitize request data
app.use(xss());

// enable cors
app.use(cors());
app.options('*', cors);

app.get('/ping', (req, res) => res.send("/pong"))

const dir = __dirname + "/routes"
fs.readdirSync(dir).forEach((file, index) => {
    const r = require(`${dir}/${file}`);
    const rName = file.split(".")[0];
    app.use(`/${rName}`, r)
    console.log(`Route loaded : /${rName}`);
})

app.use(errorHandler)

module.exports = app;