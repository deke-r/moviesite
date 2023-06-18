var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com', //Simple Mail Transfer Protocol(SMTP)?
    port: 587,
    secure: false,
    requireTLS: true, //TLS is the way to provide secure connection to b/w cleint and server
    auth: {
        user: 'bhavishya2468@gmail.com',
        pass: ''
    }

});
var mailOptions = {
    from: 'bhavishya2468@gmail.com',
    to: 'bhavishya8298@gmail.com',
}