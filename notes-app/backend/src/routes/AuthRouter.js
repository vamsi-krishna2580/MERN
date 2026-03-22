import express from "express";
import { create_user } from "../controllers/signupController.js";
import { login } from "../controllers/loginController.js";

const router = express.Router();

router.post("/signup", create_user);
router.post("/login", login);

export default router;