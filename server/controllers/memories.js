import memoriesModel from "../models/memories.js";
import asyncWrapper from "../middleware/async.js"
export const getAllMemories = asyncWrapper(async (req, res) => {
    const AllMemories = await memoriesModel.find();
    res.status(200).json(AllMemories);
});

export const createMemory = asyncWrapper( async (req, res) => { 
    const memory = req.body
    const newMemory = new memoriesModel(memory);
    await newMemory.save();
    res.status(201).json(newMemory)
});