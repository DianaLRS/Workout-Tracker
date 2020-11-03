const router = require("express").Router();
const Workout = require("../models/Workout.js");
const Transaction = require("../models/Workout.js");


//GETting our routes

// router.get("/api/workouts", function(req, res) {
//     Workout.find({})


// })



//POSTing our routes
router.post("/api/workouts", function(req, res) {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });


});
//UPDATing our routes

//DELETing our routes

module.exports = router;