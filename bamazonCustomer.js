var inquirer = require("inquirer");
var Table = require('cli-table');

var table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });

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
    connection.query("SELECT * FROM products", function(err, response){
        if(err) throw err;
        let titles = ["item_id","product_name","department_name","price","stock"];
        table.push(titles);
        console.log(response[1]);
        
        for(let i =0;i<response.length;i++){
            var newRow = [];
            newRow.push(response[i].item_id);
            newRow.push(response[i].product_name);
            newRow.push(response[i].department_name);
            newRow.push(response[i].price);
            newRow.push(response[i].stock_quantity);
            table.push(newRow);           
        }
        console.log(table.toString());
        //DISPLAY TABLE AND EVERYTHING BEFORE PROMPT
        inquirer.prompt([
            {
                name: "action",
                
            }
        ])
    });
});

