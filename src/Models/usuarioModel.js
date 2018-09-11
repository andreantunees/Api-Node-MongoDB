'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    login:{
        type: String,
        required: true,
        trim: true
    },
    senha:{
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

module.exports = mongoose.model('Usuario', schema);