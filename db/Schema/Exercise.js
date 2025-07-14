// /db/Schema/Test.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const testSchema = new Schema({
  test: String,
});

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;