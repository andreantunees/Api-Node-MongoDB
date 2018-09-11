'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Campus', schema);