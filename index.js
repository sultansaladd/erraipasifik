var mysql = require('mysql');
var express = require('express');
var app = express();


// app.get('/', function (request, response) {
//     fetchData(response);
//     console.log('Done. Displayed Data!');
// });


// app.listen(8080, function () {
//     console.log('listening on port 8080');
// });
db.query('SELECT * FROM student', (err, rows) => {
  if(err) throw err;
  console.log('Data received from Database: ');
  console.log(rows);
}); 

// ---- Connection to DB
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
db.end();

// --Query
