'user strict'

const express = require('express');
const router = express.Router();
const controller = require(`${process.cwd()}/src/controllers/apresentation-controller`);

router.post('/', controller.post);

router.get('/', controller.get);
router.get('/:campus', controller.getByCampus);
router.get('/id/:id', controller.getById);

router.put('/:id', controller.put);

router.delete('/', controller.delete);

module.exports = router;