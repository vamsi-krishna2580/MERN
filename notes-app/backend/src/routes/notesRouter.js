import express from "express";
import { createNode, deleteNode, getAllnotes, getNoteById, updateNode } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNoteById);
router.post("/", createNode);
router.put("/:id", updateNode);
router.delete("/:id", deleteNode);

export default router;