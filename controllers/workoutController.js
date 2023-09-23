const { default: mongoose } = require("mongoose")
const Workout = require("../models/workoutModel")
const Workout2 = require("../models/workoutModel2")
// const FileModel = require ("../models/fileModel")
const multer = require('multer');



  


const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const getWorkoutss = async (req, res) => {
    const people = await Workout2.find({}).sort({createdAt: -1})
    res.status(200).json(people)
}

const createWorkoutss = async (req, res) => {
    const {bright, dare, boss} = req.body

    try {
    const person = await Workout2.create({bright, dare, boss})
    res.status(200).json(person)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}


const getWorkout = async (req, res) => {
    const { id } = req.params

    
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status (404).json({error: "No such workout"})
    }
    res.status(200).json(workout)
}


  

const createWorkout = async (req, res) => {
    const {title, loads, reps} = req.body
    
    try {
    const workout = await Workout.create ({title, loads, reps})
    res.status(200).json(workout)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}


const deleteWorkout = async (req, res) => {
    const { id } =req.params

    
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status (404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params

    

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout) {
        return res.status (404).json({error: "No such workout"})
    }

    res.status(200).json(workout)

}


module.exports = { createWorkout, getWorkoutss, createWorkoutss, getWorkouts, getWorkout, deleteWorkout, updateWorkout }