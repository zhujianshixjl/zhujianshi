var express = require('express');
var router = express.Router();
var connection = require("./mysql")



router.get("/",function(req,res){
    res.render('behandlogin');
});

router.post("/",function(req,res){
    var user= req.body.user;
    var password = req.body.password;
    var query = 'select * from behand where user ="'+user+'" and password = "'+password+'"';
    connection.query(query,function(err,rows){
        if(err){
            console.log(err);
            return;
        }console.log(rows[0]);
        if(!rows[0]){
            res.json({"status":-1});
        }else{
            res.json({"status":1});
        }
    })
})


module.exports = router;