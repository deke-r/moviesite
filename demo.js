// var other = require('./Function')
// console.log(other(20, 60));


// var http = require('http');
// http.createServer(function(req, res) {
//     res.write('<h1>hello from node js server</h1>');
//     res.write('hello from node js server 3');
//     res.write('hello from node js server 3');
//     res.write('hello from node js server 3');
//     res.write('hello from node js server 3');

//     res.end();
// }).listen(5200)

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': "text/html" });
    res.write('<h1>Hello</h1>');
    res.write('<input type="text"/>');
    res.write('<h1>Deker</h1>')
        // res.write('<h1>ep</h1>')
    res.write('<a href="https://www.javatpoint.com/nodejs-repl">Deker</a><br><br>')
    res.write('<input type="text" />')


    res.end();
}).listen(5000)