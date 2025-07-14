// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../db/connect";
import Test from "../../../db/Schema/Exercise";

export default async function handler(req, res) {
  await dbConnect();
  const tests = await Test.find();

  res.status(200).json(tests);
}
