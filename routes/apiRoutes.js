const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
   db.create(req)
   .then(dbWorkout => {
      res.json(dbWorkout);
   })
   .catch(err => {
      res.status(400).json(err);
   });
});

router.get("/api/workouts", (req,res) => {
   db.find({})
   .sort({date: -1})
   .then(dbWorkout => {
      res.json(dbWorkout);
   })
   .catch(err => {
      res.status(400).json(err);
   });
});

router.put("/api/workouts/:id", ({body, params}, res) =>{
   db.findByIdAndUpdate( body.params.id, {$push: {exercises: body.body}},
     (error, dbWorkout) => {
        if (error) {
           res.send(error);
        } else{
           res.send(dbWorkout)
        }
     }
   );
});

router.get("/api/workouts/range", (req,res) => {
   db.find({})
   .then(dbWorkout => {
      res.json(dbWorkout);
   })
   .catch(err => {
      res.status(400).json(err);
   });
});

router.delete("/api/workouts", ({body}, res) => {

});

module.exports = router