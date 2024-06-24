const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{type: String , required:true},
  age:{type: Number},
  Salary:{type:Number},
  work:{type: String , enum:['Developer','tester','manager'] , required:true},
  mobile:{type: Number},
  email:{type:String , required:true , unique: true}

});


//create person model

const person = mongoose.model('person', personSchema);
module.exports = person;