const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nameP: {
        type: String,
        // required: true
    },
    castname: {
        type: String,
        // required: true
    },
    date: {
        type: String,
        // required: true
    },
    url: {
        type: String,
        // required: true
    },
    img: {
        type: String,
        // required: true
    },
    about: {
        type: String,
        // required: true
    },

})

const Add = mongoose.model('Addproduct', userSchema)
module.exports = Add