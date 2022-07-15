import mongoose, { Schema } from "mongoose";


const commentSchema = new Schema(
    {
        body: {
            type: String,
            required: true,
        },
        story: {
            type: Schema.Types.ObjectId,
            ref: "Story",
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {timestamps: true}
);

module.exports = model("Comment", commentSchema);