var express = require('express');
var router = express.Router();
var db = require('../db');


// -- Querying Database
router.get('/student-list', function (req, res, next) {
  var sql = 'SELECT student_name, score FROM student order by score desc';
  db.query(sql, function (err, rows) {
    if (err) throw err;
    console.log('Data received from Database: ');
    console.log(rows);
    res.render('student-list', {studentData: rows});

}); 
});



module.exports = router;
db.end();
