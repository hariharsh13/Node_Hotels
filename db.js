const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/Hotels';

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