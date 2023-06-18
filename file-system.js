// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     fs.readFile('dm1.html', function(err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);




// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var fs = require('fs');

// //create an empty file named mynewfile2.txt:
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var fs = require('fs');

// //create a file named mynewfile3.txt:
// fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var fs = require('fs');

// //Delete the file mynewfile2.txt:
// fs.unlink('mynewfile2.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });


var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});