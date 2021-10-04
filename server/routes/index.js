var express = require('express');
// var router = express.Router();
const Cuts = require('../mongoose/models/cuts')
const cuts =require('../cuts')
const cors = require('./cors')

const cutsRouter = express.Router()
/* GET home page. */


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

cutsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({cuts})
})

module.exports = cutsRouter;
