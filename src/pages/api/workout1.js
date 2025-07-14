// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../db/connect";
import Exercise from "../../../db/Schema/Exercise";
import Workout from "../../../db/Schema/Workout";

export default async function handler(_, res) {
  await dbConnect();
  const workout = await Workout.findOne();
  console.log(workout.exercises.map((exercise) => exercise.exerciseId));

  const array = workout.exercises.map((exercise) => exercise.exerciseId);
  const workoutName = workout.name;

  const exercises = await Exercise.where({ id: { $in: array } });
  const exerciseNames = exercises.map((exercise) => exercise.name);
  // delete duplicate
  if (exercises.length > 1) {
    await Exercise.findByIdAndDelete(exercises[1]._id);
  }

  res.status(200).json({ exerciseNames, workoutName });
  return;
}
