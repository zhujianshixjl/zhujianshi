var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"xjl2002",
    database:"node"
})



connection.connect();
module.exports = connection;