import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser, editProfile, getOtherUsers } from "../controllers/userController.js";
import { upload } from "../middlewares/multer.js"

const userRouter = express.Router();

userRouter.get("/user", isAuth, getCurrentUser);
userRouter.get("/others", isAuth, getOtherUsers);
userRouter.put("/profile", isAuth, upload.single("image"), editProfile);

export default userRouter;
