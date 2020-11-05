const router = require("express").Router();
const Workout = require("../models/Workout.js");




// //POSTing our routes
router.post("/api/workouts", function({ body }, res) {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})
router.post("/api/workouts/range", function({ body }, res) {
    Workout.insertMany(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })

})


//UPDATing our routes
router.put("/api/workouts/", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
            params.id, { $push: { exercises: body } }, { new: true, runValidators: true }
        )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});
//GETting our routes

router.get("/api/workouts", function(req, res) {
    Workout.find()
        .then(dbWorkout => {
            res.join(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });

});

router.get("/api/workouts/range", function(req, res) {
    Workout.find()
        .then(dbWorkout => {
            res.join(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });

});











module.exports = router;