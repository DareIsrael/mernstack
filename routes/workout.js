const express = require ("express")
const path = require('path');
const upload = require ("../controllers/workoutController")
// const upload = multer({dest:'images/'});
// const Workout = require ("../models/workoutModel")
const {createWorkout, getWorkouts, getWorkoutss, createWorkoutss, getWorkout, deleteWorkout, updateWorkout} = require ("../controllers/workoutController")

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get("/", getWorkouts)

router.get("/users", getWorkoutss)

router.post("/users", createWorkoutss)


router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router