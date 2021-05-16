var express = require('express');
var router = express.Router();
var connection = require("./mysql")

router.get("/",function(req,res){
    res.render('login');
});

router.post("/",function(req,res){
    
        var e_mail= req.body.e_mail;
        var password = req.body.password;
        var query = 'insert into user values("'+e_mail+'","'+password+'")'
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            res.json({"status":1});
        })
    })

module.exports = router;