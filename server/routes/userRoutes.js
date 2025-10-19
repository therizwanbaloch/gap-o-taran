import express from "express";
import isAuth from "../middlewares/isAuth.js";
import getCurrentUser from "../controllers/userController.js"

const userRouter = express.Router();

// getting user information API..

userRouter.get("/user", isAuth, getCurrentUser)


export default userRouter;
