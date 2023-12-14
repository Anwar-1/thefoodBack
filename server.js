require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const foodsystem = require('./routes/FoodSystem')
const userRoutes = require('./routes/person')
const cors=require('cors')



// express app
const app = express()
app.use(cors());

app.use(express.json())

app.use('/api/foodsystem', foodsystem)
app.use('/api/user', userRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
       // listen to port
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 



// listen for requests
//app.listen(process.env.PORT, () => {
 // console.log('listening on port', process.env.PORT)
//})
