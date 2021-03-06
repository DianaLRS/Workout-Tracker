const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Workout type is required"


        },

        name: {
            type: String,
            trim: true,
            required: "Write name of workout"


        },

        duration: {
            type: Number,
            required: "Enter duration in minutes"

        },

        weight: {
            type: Number,

        },

        reps: {
            type: Number,


        },

        sets: {

            type: Number,


        },
        distance: {
            type: Number,

        }
    }]

})


const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout