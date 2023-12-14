const express = require('express')
const Food = require('../models/foodsystem')
const mongoose = require('mongoose')
const {getfoods,getfood,createfood,deletefood,updatefood} = require('../Controllers/FoodController')

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)
// GET all workouts
router.get('/',getfoods)

// GET a single workout
router.get('/:id',getfood)

// POST a new workout
router.post('/', createfood)

// DELETE a workout
router.delete('/:id', deletefood)

// UPDATE a workout
router.patch('/:id',updatefood )

module.exports = router