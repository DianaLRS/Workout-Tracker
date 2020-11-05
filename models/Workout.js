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
            required: "Enter wight in lbs"
        },

        reps: {
            type: Number,
            required: "Enter number of reps"

        },

        sets: {

            type: Number,
            required: "Enter number of sets"

        },
        distance: {
            type: Number,
            required: "Enter distance in miles. "
        }
    }]

})


const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout