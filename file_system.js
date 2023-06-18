// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     // fs.readFile('demo.html', function(err, data) {
//     // fs.appendFile('create.html', 'hello content', function(err, data) {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);

//         return res.end();
//     })
// }).listen(5007)

var http = require('http');
var fs = require('fs')
http.createServer(function(req, res) {
    fs.writeFile('create.html', 'this is my text', function(err, data) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
});





// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {

//     // fs.openFile('create2.html', 'w', function(err, data) {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);

//         return res.end();
//     })
// }).listen(5007)






// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     fs.rename('create.html', 'renamedcreate.html', function(err, data) {



//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);

//         return res.end();
//     })
// }).listen(5008)