//my sql connection
console.log ("load connection.js test");

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "ku7ad0tg8o4v4lmk",
  password: "i7ja8hftftkte27e",
  database: "csi8fsv1imh7izcx"
});
};
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
