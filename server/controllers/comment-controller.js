const Comment = require("../models/comment");

const addComment = async(req, res) => {
    try{
        const newComm = new Comment({
            ...req.body,
            createdBy: req.user._id,

        });
        await newComm.save();
        return res.status(201).json({
            message: "New Comment Added",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         });
    }
}

const deleteComment = async(req, res) => {
    try{
        const deleteOne = await Comment.findByIdAndDelete(req.params.id);
        if(!deleteOne) {
            return res.status(404).json({
                message: "Id not found",
                success: false
            })
        } else {
            return res.status(204).json({
                message: "Comment successfully deleted",
                success: true
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
        addComment,
        deleteComment,
    }
