'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    tema:{
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: Date,
        required: true
    },
    hora:{
        type: Number,
        required: true
    },
    aluno:{
        type: String,
        required: true,
        trim: true
    },
    orientador:{
        type: String,
        required: true,
        trim: true
    },
    sobre:{
        type: String,
        required: true,
        trim: true
    },
    local:{
        type: String,
        required: true
    },
    campus:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Apresentacao', schema);