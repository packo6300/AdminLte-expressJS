var express = require('express');
var config = require('../config/const');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    
    var connection = config.CON;
    connection.connect();
    connection.query('SELECT * FROM sorteos', function (err, rows, fields) {
        if (err){
            console.log(err);
        }
        res.json(rows);
    });
    connection.end();
});
module.exports = router;
