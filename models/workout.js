const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  //  model
  {
    day: {
      type: Date,
      default: Date.now
  },
    exercises: [{
      type: {
      type: String,
      trim: true,
      required: "Enter a type of exercise"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter the name of exercise"
    },
    duration: {
      type: Number,
      required: "Enter the number of minutes needed for your exercise"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;