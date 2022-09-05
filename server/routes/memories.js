import express from "express"
import { getAllMemories } from "../controllers/memories.js";
const router = express.Router();

router.get("/", getAllMemories);

export default router;