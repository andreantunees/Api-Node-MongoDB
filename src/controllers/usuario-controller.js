'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.post = (req, res, next) => {
    var usuario = new Usuario(req.body);
    usuario.save()
        .then(x => {
            res.status(201).send({
                message: 'Usuario cadastrado!'
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
    Usuario
        .find({ active: true })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getAuth = (req, res, next) => {
    Usuario.findOne({
            login: req.params.login,
            active: true })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};