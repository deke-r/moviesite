var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

// establish connection ---------------------------------

con.connect(function(error) {
    if (error) throw error;
    console.log('connected');

    // date getting method ------------------------------------
    //     con.query('select * from register', (function(err, result) {
    //         if (err) throw err;
    //         console.warn('all results here', result);
    //     }))


    // Creating a Database------------------------------

    // con.query('CREATE DATABASE mydb', function(err, result) {
    //     if (err) throw err;
    //     console.log('database created');
    // })

    // Creating a Table ------------------------------
    // var sql = 'CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))';
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log('table created');
    // })



    // Insert into customers ------------------------------
    // var sql = 'INSERT INTO customers(name,address)VALUES( "deker","Delhi")';
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log('1 record inserted');
    // });

    // Insert multiple values into customers ------------------------------
    // var sql = 'INSERT INTO customers (name,address) VALUES?';
    // var values = [
    //     ['kumud', 'samastipur'],
    //     ['rakesh', 'begusarai'],
    //     ['mayank', 'bhagalpur'],
    //     ['hariom', 'bhagalpur']
    // ];
    // con.query(sql, [values], function(err, result) {
    //     if (err) throw err;
    //     console.log('No of rows inserted:' + result.affectedRows);
    // });


    // Selecting From Table ------------------------------
    // con.query('select*from customers', function(err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // The Fields Object-----------------------------------
    // con.query("SELECT name, address FROM customers", function(err, result, fields) {
    //     if (err) throw err;
    //     console.log(fields);
    // });


    // Select With a Filter---------------------------------------------------

    // con.query("SELECT * FROM customers WHERE address = 'begusarai'", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // Wildcard Characters--------------------------------------------------------
    // con.query("SELECT * FROM customers WHERE address LIKE 'b%'", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // Sort the Result---------------------------------------------------------
    // con.query("SELECT * FROM customers ORDER BY name", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // ORDER BY DESC------------------------------------------------------------

    // con.query("SELECT * FROM customers ORDER BY name DESC", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });


    // Delete Record--------------------------------------------------------------

    // var sql = "DELETE FROM customers WHERE address = 'samastipur'";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("Number of records deleted: " + result.affectedRows);
    // });


    // Delete a Table------------------------------------------------------
    //     var sql = "DROP TABLE customers";
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table deleted");
    //   });

    // Drop Only if Exist--
    //  var sql = "DROP TABLE IF EXISTS customers";
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    // Update Table--------------------------------------------------------------
    // var sql = "UPDATE customers SET address = 'begusarai' WHERE address = 'delhi'";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log(result.affectedRows + " record updated");
    // });

    // Limit the Result-------------------------------------------------------------
    // var sql = "SELECT * FROM customers LIMIT 2";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // Start From Another Position-------------------------------------------------
    // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // Shorter Syntax-----------------------------------------------

    // var sql = "SELECT * FROM customers LIMIT 2, 5";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // Node.js MySQL Join-------------------------------------------------
    // Join Two or More Tables--------
    var sql = 'SELECT users.name AS user,products.name AS favorite FROM users JOIN products ON users.favorite_product=products.id';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });

});

module.exports = con;