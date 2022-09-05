import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import memoryRoutes from "./routes/memories.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/memories", memoryRoutes);
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        app.listen(PORT, () => { console.log(`Server listening at port ${PORT}....`) });

    } catch (error) {
        console.log(error)
    }
};
 
startServer();
