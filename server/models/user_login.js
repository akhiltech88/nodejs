
var sequelize = require('../config');
var Sequelize=require('sequelize');

var Login = sequelize.define('login', {
  id: { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
  user_name: { type: Sequelize.STRING},
  password: { type: Sequelize.STRING},
},{createdAt:false,
updatedAt:false,
tableName:'login',});

module.exports = Login;
