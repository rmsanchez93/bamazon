var inquirer = require("inquirer");

var mysql = require("mysql");  //download these using npm 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"//this is database not file name ya goof
});

//so first we connect to the database 
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});