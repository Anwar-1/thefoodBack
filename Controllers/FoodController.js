const Food = require('../models/foodsystem')
const mongoose = require('mongoose')

// get all 
const getfoods =  async(req, res) => {
 const user_id = req.user._id // هاي تاعت اثرو بدي اخذ id عشان اعمل find على اساسه 

    const food1 = await Food.find({user_id}).sort({createdAt: -1})
    res.status(200).json(food1)
    

    /*const food1 = await Food.find({}).sort({createdAt: -1})
    res.status(200).json(food1)*/
  }

  // get single id 

  const getfood =  async(req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const food = await Food.findById(id)
  
    if (!food) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(food)
  }

  // post 
  const createfood = async(req, res) => {
    // res.json({mssg: 'POST a new workout'})
    ///const{title,ThefoodIhaveforTitle,TheToday} = req.body
    const { title, load, reps } = req.body;
  
    try {
      const user_id = req.user._id
    const food1 = await Food.create({title,ThefoodIhaveforTitle: load, TheToday: reps,user_id})
    ///const food1 = await Food.create({title,ThefoodIhaveforTitle,TheToday})
    ///const food1 = await Food.create({ title, ThefoodIhaveforTitle: load, TheToday: reps });
     res.status(200).json(food1)
     
    } catch (error) {
     res.status(400).json({error:error.message})
     

    }
   }
   //delete

   const deletefood = async(req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const food = await Food.findOneAndDelete({_id: id}).deleteOne()
  
    if(!food) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(food)
  
  }


  // update 

  const updatefood = async(req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const food = await Food.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!food) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(food)
  }

  module.exports = {getfoods,getfood,createfood,deletefood,updatefood}