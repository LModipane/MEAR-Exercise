import mongoose from "mongoose";

const memeoriesShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    imageFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Data()
    },
});

const memoriesModel = mongoose.model("memories", memeoriesShema);
export default memoriesModel;