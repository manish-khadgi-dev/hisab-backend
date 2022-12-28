import mongoose from "mongoose";

export const connectMongoDB = () => {
  try {
    const mongoURL = "mongodb://localhost:27017/hisabDB";
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(mongoURL);
    conn && console.log("Mongo connected");
  } catch (error) {
    console.log(error.message, "from connectMongoDb function");
  }
};
