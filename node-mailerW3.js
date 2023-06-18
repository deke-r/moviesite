var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bhavishya2468@gmail.com',
        pass: 'mkghalyzssbeyboa'
    }
});

var mailOptions = {
    from: 'bhavishya2468@gmail.com',
    to: 'bhavishya8298@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});