import dbConnect from "../../../../db/connect";
import Exercise from "../../../../db/Schema/Exercise";
import libMusclegroups from "../../../../lib/musclegroups";

export default async function handler(req, res) {
  if (
    !libMusclegroups.find(
      (muscle) => muscle.toLowerCase() === req.query.musclegroup
    )
  )
    return res.status(500).json({ error: "not found" });

  try {
    await dbConnect();
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
