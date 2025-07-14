import dbConnect from "../../../db/connect";
import Exercise from "../../../db/Schema/Exercise";
import Workout from "../../../db/Schema/Workout";

export default async function handler(_, res) {
  await dbConnect();
  const exercises = await Exercise.find();

  res.status(200).json({ exercises });
  return;
}
