import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "active",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
