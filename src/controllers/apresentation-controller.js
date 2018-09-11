'use strict'

const mongoose = require('mongoose');
const Apresentacao = mongoose.model('Apresentacao');

exports.post = (req, res, next) => {
    var apresentacao = new Apresentacao(req.body);
    apresentacao.save()
        .then(x => {
            res.status(201).send({
                message: 'Apresentação cadastrada!'
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
    Apresentacao
        .find({ active: true }, 'tema data hora aluno orientador sobre local campus')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getByCampus = (req, res, next) => {
    Apresentacao
        .find({ 
            campus: req.params.campus,
            active: true
         }, 'tema data hora aluno orientador sobre local campus')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Apresentacao
        .find({ 
            _id: req.params.id,
            active: true
         }, 'tema data hora aluno orientador sobre local campus')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    Apresentacao
        .findOneAndRemove(req.body.id)
        .then( x => {
            res.status(200).send({
                message: 'Apresentação removida!'
            });
        })
        .catch( e=> {
            res.status(400).send({
                message: 'Falha ao remover!',
                data: e
            });
        })
};

