//mongo atlas
//id:deker
//pass:Deker2468
const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017", {

var con = mongoose.connect("mongodb+srv://deker:Deker2468@cluster0.es0uzwa.mongodb.net/demo2?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true
})

//node src/app.js
.then(() => console.log("connection successfully.."))
    .catch((err) => console.log(err));


module.exports = con;