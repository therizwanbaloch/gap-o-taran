import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser, editProfile } from "../controllers/userController.js";
import { upload } from "../middlewares/multer.js"

const userRouter = express.Router();

userRouter.get("/user", isAuth, getCurrentUser);
userRouter.put("/profile", isAuth, upload.single("image"), editProfile);

export default userRouter;
