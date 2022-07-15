import mongoose, { Schema } from "mongoose";


const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        body: {
            type: String,
            required: true,
        },
        viewsCount: {
            type: Number,
            default: 0,
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        imageUrl : {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
         
    },
    {timestamps: true}
);

module.exports = model("Story", storySchema);