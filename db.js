// var db = mysql.createConnection({
//   host     : 'erraipasifik.mysql.database.azure.com',
//   user     : 'sultansalad@erraipasifik',
//     password: 'Matsanewa98',
//     database: 'erraipasifik',
//   port : 3306
// });


var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
    password: '',
    database: 'usersdb',
  port : 3306
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = db;