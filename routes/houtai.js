var express = require('express');
const connection = require('./mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  connection.query("select * from tab_month",function(err,rows){
    console.log(rows)
    if(err){
      throw err
    }else{
      res.render("zuoye",{datas:rows})
    }
  })
  
});
router.get('/add',(req,res)=>{
  res.render('add')
})

router.post('/add',(req,res)=>{
  var 时间=req.body.time
  var 水电支出=req.body.shuidianzhichu
  var 材料支出=req.body.cailiaozhihchu
  var 购置设备支出=req.body.shebeizhichu
  var 营业额=req.body.yingyee
  var 利润=req.body.liruen
  connection.query("insert into tab_month(时间,水电支出,材料支出,购置设备支出,营业额,利润) value(?,?,?,?,?,?)",[时间,水电支出,材料支出,购置设备支出,营业额,利润], function (err, rows) {
    if (err) {
        res.end('新增失败：' + err);
    } else {
        res.redirect('/houtai');
    }
})
});


router.get('/del/:id', function (req, res) {
  var id = req.params.id;
  connection.query("delete from tab_month where id=" + id+"", function (err, rows) {
      if (err) {
          res.end('删除失败：' + err)
      } else {
          res.redirect('/houtai')
      }
  });
});

router.get('/toUpdate/:id', function (req, res) {
  var id = req.params.id;
  connection.query("select * from tab_month where id=" + id, function (err, rows) {
      if (err) {
          res.end('修改页面跳转失败：' + err);
      } else {
          res.render("update", {datas: rows});       //直接跳转
      }
  });
});
router.post('/update', function (req, res) {
  var id = req.body.id;
  var 时间 = req.body.time;
  var 水电支出=req.body.shuidianzhichu
  var 材料支出=req.body.cailiaozhihchu
  var 购置设备支出=req.body.shebeizhichu
  var 营业额=req.body.yingyee
  var 利润=req.body.liruen
  connection.query("update tab_month set 时间='" + 时间 + "',水电支出='" + 水电支出 + "',材料支出='" + 材料支出 + "',购置设备支出='" + 购置设备支出 + "',营业额='" + 营业额 + "',利润='" + 利润 + "'where id=" + id, function (err, rows) {
      if (err) {
          res.end('修改失败：' + err);
      } else {
          res.redirect('/houtai');
      }
  });
});
router.post('/search', function (req, res) {
  var time = req.body.time;
  
  var sql = "select * from tab_month";

  if (time) {
      sql += " and 时间='" + time + "' ";
  }

  sql = sql.replace("and","where");
  connection.query(sql, function (err, rows) {
      if (err) {
          res.end("查询失败：", err)
      } else {
          res.render("zuoye", {title: 'Express', datas: rows, time:time});
      }
  });
});


module.exports = router;
