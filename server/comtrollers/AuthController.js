const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = (req,res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error:err
            })
        }
        let user = new User({
            fistName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
        })
        user.save()
        .then(user => {
            res.json({
                message:'user added successfully'
            })
        })
        .catch(error => {
            res.json({
                message:'an error occured'
        
            })
        })

    })
   
}

module.exports ={
    register
}
