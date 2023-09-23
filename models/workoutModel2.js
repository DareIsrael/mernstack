const mongoose = require("mongoose")

const Schema = mongoose.Schema

const workoutSchema2 = new Schema ({
    bright: {
        type: String,
        require: true
    },
    dare: {
        type: Number,
        require: true
    },
    boss: {
        type: Number,
        required: true
    }
}, {timestamps: true })

module.exports = mongoose.model("person", workoutSchema2)