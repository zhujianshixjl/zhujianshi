var express = require('express');
var router = express.Router();
var connection = require("./mysql")



router.get("/",function(req,res){
    res.render('login');
});

router.get("/index",function(req,res){
    res.render("index")

})

router.post("/",function(req,res){
        var e_mail= req.body.e_mail;
        var password = req.body.password;
        var query = 'select * from user where e_mail ="'+e_mail+'" and password = "'+password+'"';
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

// router.post("/register",function(req,res){
//     var form = new formidable.IncomingForm();
//     form.parse(req,function(err,fields){
//         var e_mail= req.body.e_mail;
//         var password = req.body.password;
//         var query = 'insert into user values("'+e_mail+'","'+password+'")'
//         connection.query(query,function(err,rows){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             res.json({"status":1});
//         })
//     })
// })




module.exports = router;
