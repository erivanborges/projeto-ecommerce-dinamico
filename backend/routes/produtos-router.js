var express = require('express');

var router = express.Router();

var projetos = require('../model/produtos-model');

router.get('/', function(req, res, next) {
        res.json(projetos.listAll());
});

router.get( '/:id', function(req, res, next) {
        res.json(projetos.getByIndex(req.params.id));
});

module.exports = router;