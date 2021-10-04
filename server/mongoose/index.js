const mongoose = require('mongoose');
const Cuts = require('./models/cuts');

const url = 'mongodb://localhost:27017/barbershop';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connected to server')
})
.catch(err => {
    console.log(err)
    mongoose.connection.close()
})