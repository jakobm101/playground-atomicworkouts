import mongoose from "mongoose";
import libWorkouts from "../../lib/workouts";

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  name: { type: String, required: true },
  exercises: [
    {
      exerciseId: String,
      sets: Number,
      reps: Number,
    },
  ],
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", WorkoutSchema);

// fills the Workout Collection with the example data from next-server
export const fillWorkoutCollection = async () => {
  for (const item of libWorkouts) {
    await Workout.create(item);
  }
};

export default Workout;
