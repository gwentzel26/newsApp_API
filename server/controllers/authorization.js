import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
    const newUser = new User({
        ...data,
        password: hashedPassword,
        role
    });
     } catch(err){
        console.log(err);
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
