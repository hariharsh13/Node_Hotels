const express = require('express');
const app = express();
const db = require('./db')

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //all the raw data converted to object using bodyparser is stored in req.body


app.get('/',(rew,res)=>{
  res.send("Welcome to My Hotel")
})

/*

app.post('/person',(req,res)=>{
  const data = req.body //assuming the data stored in req.body when sent by  bodyparser

  //const newPerson = new person(data);
  
  newPerson.name = data.name;
  newPerson.work = data.work;
  newPerson.email = data.email;
  newPerson.age = data.age;
  newPerson.Salary = data.salary;
  newPerson.mobile = data.mobile;
  

  //save the newPerson to database

  newPerson.save((error,savedPerson) => {
    if(error){
      console.log('Error saving person',error)
      res.status(500).json({error:'internal server error'})
    }else{
      console.log("data saved successfully")
      res.status(200).json(savedPerson);
    }
  })
  
})

the abpove method is not used now a days because it is based on callback function
*/







//Import the router files

const personRoutes = require('./Routes/personRoutes');

//use the router
app.use('/person',personRoutes);



//comment added
//some new comment added for testing purpose

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log('Server Started On Port number 3000')
})