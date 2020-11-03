const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now

    },

    type: {
        type: String,
        required: "Workout type is required"


    },

    name: {
        type: String,
        required: "Write name of workout"


    },

    duration: {
        type: Number,
        required: true

    },

    weight: {
        type: Number,
        required: true

    },

    reps: {
        type: Number,
        required: true

    },

    sets: {

        type: Number,
        required: true

    }

})


const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout