const express = require('express');
const router = express.Router();

const person  = require('./../Models/person');


router.post("/",async (req,res)=>{
  try{
    const data = req.body;
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log('Data saved successfully')
    res.status(200).json(response);
  }
  catch(err){
    res.sendStatus(500).json({error:'Internal server error'})
  }
})


//GET method to get the person

router.get('/', async (req,res)=>{
  try{
    const data = await person.find();
    console.log("Data fetched successfully")
    res.status(200).json(data)
  }catch(err){
    console.log("Internal server error");
  }
})


router.get("/:workType", async (req,res)=>{
  try{
    const workType = req.params.workType; //extract the work type from the url parameter
    if(workType == 'Developer' || workType == 'tester' || workType == 'manager'){
      
      const response = await person.find({work:workType})
      console.log('response fetched');
      res.status(200).json(response)
  
    }else{
      res.status(404).json({error: 'Invalid work type'})
    }
  }catch(err){
    res.sendStatus(500).json({error:'Internal server error'})
  }
  })


  router.put('/:id', async (req,res)=>{
    try{

      const personId = req.params.id; //Extract the id from URL parameter
      const updatedPersonData = req.body; //updated data for the person

      const response = await person.findByIdAndUpdate(personId, updatedPersonData , {
        new: true, //Return the updated document
        runValidators: true, //Run mongoose validation 
      })

    
      if(!response){
        return res.status(404).json({error: 'Person not found'});
      }

      console.log("Data updated");
      res.status(200).json(response);

    }catch(err){
      res.sendStatus(500).json({error:'Internal server error'})
    }
  })


  router.delete("/:id", async (req,res)=>{
    try{
      const personId = req.params.id; //Extract the person id from url parameter

      const response = await person.findByIdAndDelete(personId);

      if(!response){
        return res.status(404).json({error: 'person id not found'})
      }

      console.log("Data deleted");
      res.status(200).json({error:'deletion completed successfully'});
    }catch(err){
      res.sendStatus(500).json({error:'Internal server error'})
    }
  })

  module.exports = router;