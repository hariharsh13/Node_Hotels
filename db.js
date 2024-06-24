const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL,{})

const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to MongoDB server')
})

db.on('disconnected',()=>{
  console.log('disconnected from MongoDB server')
})

db.on('error',()=>{
  console.error('error in connection to MongoDB server')
})

module.exports = db;