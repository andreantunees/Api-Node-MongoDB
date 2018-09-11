'use strict'

const mongoose = require('mongoose');
const Campus = mongoose.model('Campus');

exports.post = (req, res, next) => {
    var campus = new Campus(req.body);
    campus.save()
        .then(x => {
            res.status(201).send({
                message: 'Campus cadastrado!'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar!',
                data: e
            });
        });
};

exports.get = (req, res, next) => {
    Campus
        .find({ active: true })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Campus
        .find({ 
            _id: req.params.id,
            active: true })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
