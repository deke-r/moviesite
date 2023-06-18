const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    selectC: {
        type: String,
        // required: true
    },
    nameC: {
        type: String,
        // required: true
    },
    emailC: {
        type: String,
        // unique: true,
        // required: true
    },
    noC: {
        type: Number,
        // unique: true,
        // required: true
    },
    msgC: {
        type: String,
        // required: true
    },


})

const Contact = mongoose.model('Contact', userSchema)
module.exports = Contact