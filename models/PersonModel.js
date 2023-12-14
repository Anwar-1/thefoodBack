/*const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const PersonSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  UserName:{
    type:String,
    required: true
  }
})



module.exports = mongoose.model('Person', PersonSchema)*/


const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model('User', userSchema)
