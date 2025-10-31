import express from "express";
import { login, signUp } from "../controllers/authControllers.js";

const authRouter = express.Router();

// Signup route
authRouter.post("/register", signUp);

// Login route
authRouter.post("/login", login);


export default authRouter;
