var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.flag = true;
    var idUsuario=req.session.flag;
    if(idUsuario){
        res.render('index', { title: 'Express',ses:req.session });
    }
    else{
        res.render('login');
    }  
});

module.exports = router;
