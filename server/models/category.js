import mongoose, { Schema } from "mongoose";


const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {timestamps: true}
);

module.exports = model("Category", categorySchema);