const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    // loginId: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    nameUp: {
        type: String,
        required: true
    },
    emailUp: {
        type: String,
        unique: true,
        required: true
    },
    mobileUp: {
        type: Number,
        unique: true,
        required: true
    },
    passUp: {
        type: String,
        required: true
    },
    cpassUp: {
        type: String,
        required: true
    },

});
//Session & Cookie----------------------------------------------------------------------
// userSchema.pre('save', function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     this.passUp = bcrypt.hashSync(this.passUp, 10);
//     next();
// });


// userSchema.methods.comparePassword = function(plaintext, callback) {
//     return callback(null, bcrypt.compareSync(plaintext, this.passUp));
// };


// Create Hash Password

userSchema.pre('save', async function(next) {
    if (this.isModified('passUp')) {
        this.passUp = await bcrypt.hash(this.passUp, 12);
        this.cpassUp = await bcrypt.hash(this.cpassUp, 12);
    }
    next();
});

//Session & Cookie----------------------------------------------------------------------

const userModel = mongoose.model('signup', userSchema)
module.exports = userModel