var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.session.flag = true;
    var idUsuario = req.session.flag;
    if (idUsuario) {
//        var config = require('../config/const');
//        var connection = config.CON;
//        connection.connect();
//        connection.query('SELECT * FROM sorteos', function (err, rows, fields) {
//            if (err) {
//                console.log(err);
//            }
//            res.render('index', {title: 'Express',sorteos:rows});
//        });
//        connection.end();
           res.render('index', { title: 'Express',ses:req.session });
        
    } else {
        res.render('login');
    }
});

module.exports = router;
