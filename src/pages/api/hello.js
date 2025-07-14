// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../db/connect";
import Test from "../../../db/Schema/Exercise";
import Workout from "../../../db/Schema/Workout";

export default async function handler(_, res) {
  await dbConnect();
  const tests = await Test.find();
  const workouts = await Workout.find();
  res.status(200).json({ tests, workouts });
  return;
}
