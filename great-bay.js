var mysql = require("mysql");
var inquirer = require("inquirer");


/*
DROP DATABASE IF EXISTS great_baydb;

CREATE DATABASE great_baydb;

USE great_baydb;

CREATE TABLE items (
	id INTEGER AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    quantity INTEGER,
    price FLOAT(4, 2),
    PRIMARY KEY(id)
);
*/


inquirer.prompt([{
  type: "list",
  name: "listChoices",
  message: "What do you want to do on Great Bay?",
  choices: ["Post an Item", "Bid on an Item"]
}]).then(function(response) {
  
  if (response.listChoices = "Post an Item")
    { postItem(); }
  else
    { bidOnItem(); }
});




var bidOnItem = function() {

 console.log(great_baydb);

  inquirer.prompt ([{
    type: "input",
    name: "productSearch",
    message: "What do you want to bid on?"
  }])

}  //  bidOnItem()



var postItem = function() {
  inquirer.prompt ([{
    type: "input",
    name: "productName",
    message: "Enter product name: ",
  }, {
    name: "quantity",
    message: "Enter how many: ",
  }, {
    name: "price",
    message: "Enter the price: "
  }])
}  //  postItem()






/*
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "aaaa1111",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  })
}
*/
