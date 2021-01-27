var express = require('express');
var db = require('./db');
var app = express();

// -- Querying Database
var sql = 'SELECT student_name, score FROM student order by score desc';
db.query(sql, function (err, rows) {

    if (err) throw err;
    console.log('Data received from Database: ');
    console.log(rows);
    app.get("/student", (req, res) => {
	return res.json({rows});
    });
}); 

app.listen(process.env.PORT || 3000);
db.end();
