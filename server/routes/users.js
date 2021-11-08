var express = require('express');
var router = express.Router();
const cors = require('./cors')
const AuthController = require('../comtrollers/AuthController')
const User =require('../models/User')

router.post('/register', AuthController.register)
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.post(cors.cors, (req, res, next) => {
    User.create(req.body)
    .then(user => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/vnd.api+json')
      res.json({user})
    })
    
})
/* GET users listing. */


module.exports = router;
