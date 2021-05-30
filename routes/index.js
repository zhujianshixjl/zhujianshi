var express = require('express');
var router = express.Router();
const connection = require('./mysql');

/* GET home page. */
router.get('/', function(req, res) {
  connection.query("select * from menu",function(err,rows){
    console.log(rows)
    if(err){
      throw err
    }else{
      res.render("menu",{datas:rows})
    }
  })
  
});

module.exports = router;
