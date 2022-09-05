import express from "express"
import { getAllMemories, createMemory } from "../controllers/memories.js";
const router = express.Router();

router.route("/").get(getAllMemories).post(createMemory);

export default router;