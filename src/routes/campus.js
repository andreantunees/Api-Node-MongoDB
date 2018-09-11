'user strict'

const express = require('express');
const router = express.Router();
const controller = require(`${process.cwd()}/src/controllers/campus-controller`);

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;