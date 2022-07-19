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

const login = async (data, res) => {
    try {
        let { email, password} = data;
    const user = await User.findOne({email});
    if(!user) {
        res.status(404).json({
            message: "Email login attempt failed",
            email: "Incorrect email",
            success: false,
        })
    } else {
        let isMatch = await bcrypt.compare(password, user.password);
        if(isMatch === true) {
            let token = jwt.sign({
                user_id: user._id,
                role: user.role,
                email: user.email,
                username: user.username,
            },
            process.env.JWT_SECRET, {
                expiresIn: "7 days",
            });
            let profile = {
                email: user.email,
                role: user.role,
                username: user.username,
            };
            let result = {
                user: profile,
                token: token,
                expiresIn: 168,
            };
            return res.status(200).json({
                ...result,
                message: "Login successful",
                success: true
            });

        } else {
            return res.status(403).json({
                message: "Failed login attempt",
                email: "Incorrect password",
                success: false
            })
        }
    }
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
    
};

const verifyEmail = async (data, res) => {
    try {
        let { code } = data;
        const user = await User.findOne({ verificationCode: code });
        if(!user) {
            return res.status(404).json({
                message: "Invalid code",
                success: false
            })
        } else if (user.isEmailVerified) {
            return res.status(404).json({
                message: "Email already verified",
                success: false
            })
            
        } else {
            await user.update ({isEmailVerified: true});
            return res.status(404).json({
                message: "Email verification successful",
                success: true
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
};
const forgotPassword = async (data, res) => {
    try {
        let { email } = data;
         const user = await User.findOne({email: email});
         if(!user) {
            return res.status(404).json({
                message: "Invalid email",
                success: false
            })
        }

        const code = crypto.randomInt(100000, 1000000);
        const passwordResetCode =  await bcrypt.hash(code.toString(), 16);
        await user.update({passwordResetCode : passwordResetCode});
        return res.status(404).json({
            message: "Verification code sent to your email",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
};
const resetPassword = async (data, res) => {
    try {

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
};
const changePassword = async (data, res) => {
    try {

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
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
