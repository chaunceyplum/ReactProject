const mongoose =require('mongoose')
const Schema = mongoose.Schema

const cutsSchema =new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true

})

const Cuts = mongoose.model('Cuts' , cutsSchema)

module.exports = Cuts