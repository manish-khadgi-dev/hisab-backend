import express from "express";
import { createUser } from "../models/userModel/UserModel.js";

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("hit by router all");
  next();
});

//createing
router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "NEW user successful",
        })
      : res.json({
          status: "error",
          message: "Unable to create from userRouter post",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.errorCode = 200;
      error.message = "Email already Exist";
    }
    next(error);
  }
});

//
export default router;
