import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLimit: 6,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            default: "user",
            enum: ["user", "admin"],
        },
        password: {
            type: String,
            required: true,
        },
        verificationCode: {
            type: Number,
        },
        isEmailVerified: {
            type: Boolean,
            default: false, 
        },
        passwordResetCode: {
            type: String,
        }
    },
    {timestamps: true}
);

module.exports = model("User", userSchema);