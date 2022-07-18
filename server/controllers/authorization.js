import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const crypto = require("crypto");
import User from "../models/user";

const register = async (data, role, res) => {
    try{
        const emailTaken = await validateEmail(data.email);
        if(emailTaken === true) {
            return res.status(400).json({
            email: "Email is already taken",
            message: "Registration failure",
            success: false,
        })
    } 
    const hashedPassword = await bcrypt.hash(data.password, 16);
    const code = crypto.randomInt(100000, 1000000);
    const newUser = new User({
        ...data,
        password: hashedPassword,
        verificationCode: code,
        role
    }); 

    await newUser.save();
    return res.status(201).json({
        message: "Account successfully created",
        success: true,
    });
     } catch(err){
        return res.status(500).json({
           message: err.message,
           success: false,
        })
    }
};

const validateEmail = async(email) => {
    let user = await User.findOne({email: email});
    if(user) {
        return true;

    } else {
        return false;
 
    }
};
