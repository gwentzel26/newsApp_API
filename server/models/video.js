import mongoose, { Schema } from "mongoose";


const videoSchema = new Schema(
    {
        videoId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        viewsCount: {
            type: Number,
            default: 0,
        },
    },
    {timestamps: true}
);

module.exports = model("Video", videoSchema);