'user strict'

const express = require('express');
const router = express.Router();
const controller = require(`${process.cwd()}/src/controllers/usuario-controller`);

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:login', controller.getAuth);

module.exports = router;