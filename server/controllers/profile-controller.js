const User = require("../models/user");

const updateUser = async(req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: "User successfully updated",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         })
    }
}

const getUser = async(req, res) => {
    try{
        const getOne = await User.findById(req.params.id);
        if(getOne) {
            return res.status(200).json(getOne)
        } else {
            return res.status(404).json({
                message: "Id not found",
                success: false
            })
        }
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         })
    }  
}

module.exports = {
    updateUser,
    getUser,
}