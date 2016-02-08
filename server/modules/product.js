var express = require('express');
var router = express.Router();
var connection = require('../config');
var mysql=require('mysql');

var Model = require("../models/product");
//get Products

router.get('/getProduct',function(req,res){
Model.findAll().then(function(product){
res.end(JSON.stringify(product));
});
});

//save Products

router.post('/saveProduct',function(req,res){
var data=req.body.data;
data.forEach(function(obj){
Model.create(obj);
});
});

//edit Products

router.post('/editProduct',function(req,res){
var data=req.body;
Model.find({where:{id:data.id}}).then(function(model){
if(model){
model.updateAttributes(data);
res.end('Updated');
}
});
});

//delete Products

router.post('/deleteProduct',function(req,res){
var data=req.body;
Model.find({where:{id:data.id}}).then(function(model){
model.destroy().then(function(){
res.end('Deleted');
});
});
});

module.exports = router;
