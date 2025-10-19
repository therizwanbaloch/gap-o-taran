import express from "express";
import { login, signUp } from "../controllers/authControllers.js";

const router = express.Router();

// Signup route
router.post("/register", signUp);

// Login route
router.post("/login", login);


export default router;
