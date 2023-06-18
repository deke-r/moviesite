var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysqlpc'
})

con.connect(function(err, result) {
    if (err) throw err;
    console.log('connected')


    // con.query('CREATE DATABASE mysqlpc', function(err, result) {
    //     if (err) throw err;
    //     console.log('DB Created')
    // })

    // con.query('CREATE TABLE demo(name VARCHAR(255),address VARCHAR(255))', function(err, result) {
    //     if (err) throw err;
    //     console.log('demo created')
    // })

    // con.query("INSERT INTO demo(name,address)VALUES('deker','bgs')", function(err, result) {
    //     if (err) throw err
    //     console.log('1 data inserted')
    // })

    // var sql = 'INSERT INTO demo(name,address)VALUES?';
    // var values = [
    //     ['vav', 'bgs'],
    //     ['vhav', 'delhi']
    // ]
    // con.query(sql, [values], function(err, result) {
    //     if (err) throw err;
    //     console.log('2 data inserted')
    // })


    // con.query('select * from demo', function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    // })

    // con.query('SELECT address FROM demo', function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    // })

    // con.query('SELECT * FROM demo where address="bgs"', function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    // })


    // con.query('SELECT * FROM demo WHERE address like "b%"', function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    // })




})