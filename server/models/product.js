
var sequelize = require('../config');
var Sequelize=require('sequelize');

var Product = sequelize.define('product', {
  id: { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
  items: { type: Sequelize.STRING},
  price: { type: Sequelize.INTEGER},
  quantity: { type: Sequelize.INTEGER},
  total: { type: Sequelize.INTEGER},
},{createdAt:false,
updatedAt:false,
tableName:'product',});

module.exports = Product;
