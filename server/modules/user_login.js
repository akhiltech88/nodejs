var express = require('express');
var router = express.Router();
var sequelize = require('../config');
var Sequelize=require('sequelize');
sequelize.sync();

/* Create User */
router.post('/', function(req, res, next) {
var arr=req.body.data;
connection.query('insert into login(id,user_name,password) VALUES(NULL,"'+arr.name+'","'+arr.password+'")');
});

/* Check User */
router.post('/login', function(req, res, next) {

var arr=req.body.data;

var Model = require("../models/user_login");

Model.find({ where: {user_name:arr.name,password:arr.password} }).then(function(login){
res.end(JSON.stringify(login));
});

});

module.exports = router;
