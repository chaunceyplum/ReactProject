const express =require('express')
const Cuts = require('../mongoose/models/cuts')
const allCuts =require('../cuts')
const cutsRouter = express.Router()
const cors = require('./cors')








cutsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/vnd.api+json')
    res.json({allCuts})
})

cutsRouter.route('/:id')
.options(cors.corsWithOptions,(req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/vnd.api+json')
    res.json({allCuts})
})

module.exports = cutsRouter