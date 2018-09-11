'use strict'
const cors = require('cors');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//connect bd 
mongoose.connect('mongodb://??:??@??', { useNewUrlParser: true });

//load models
const Apresentacao = require(`${process.cwd()}/src/Models/apresentationModel`);
const Usuario = require(`${process.cwd()}/src/Models/usuarioModel`);
const Campus = require(`${process.cwd()}/src/Models/campusModel`);

//load routes
const indexRoute = require(`${process.cwd()}/src/routes/index`);
const apresentationRoute = require(`${process.cwd()}/src/routes/apresentation`);
const campusRoute = require(`${process.cwd()}/src/routes/campus`);
const usuarioRoute = require(`${process.cwd()}/src/routes/usuario`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/', indexRoute);
app.use('/apresentation', apresentationRoute);
app.use('/campus', campusRoute);
app.use('/usuario', usuarioRoute);

module.exports = app;