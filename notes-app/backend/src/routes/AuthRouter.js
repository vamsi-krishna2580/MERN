import express from "express";
import { create_user, login } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup", create_user);
router.post("/login", login);

export default router;