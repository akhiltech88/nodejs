var express = require('express');
var router = express.Router();
//var config = require('config');
var connection = require('../config');
var mysql=require('mysql');
/* GET users listing. */
router.post('/', function(req, res, next) {


//module.exports= connection;

//config.query('insert into product values()');
var arr=req.body.data;
//res.end('select * from login');
  console.log(arr)
//var q='select * from login'
//var q=con.query('insert into staff values("'+elem+'")');

var sql=connection.query('select * from login where user_name="'+arr.name+'" and password="'+arr.password+'"');

console.log(sql);
//console.log(q)

  
});
router.post('/check', function(req, res, next) {
console.log('test');
});

module.exports = router;
