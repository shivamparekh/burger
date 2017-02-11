var mysql = require("mysql");

  connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "2",
    database: "burgers_db"

  });

connection.connect(function(err) {
  
  if (err) {

    console.error("error connecting: " + err.stack);
    return;

  }

  console.log("id: " + connection.threadId);

});

module.exports = connection;