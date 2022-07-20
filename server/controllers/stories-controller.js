import Story from ("../models/story");
const paginate = require("express-paginate");
import Comment from ("../models/comment");

const addStory = async(req, res) => {
    try{
        const newSto = new Story({
            ...req.body,
            createdBy: req.user._id,

        });
        await newSto.save();
        return res.status(201).json({
            message: "New Story Added",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         });
    }
}

const deleteStory = async(req, res) => {
    try{
        const deleteOne = await Story.findByIdAndDelete(req.params.id);
        if(!deleteOne) {
            return res.status(404).json({
                message: "Id not found",
                success: false
            })
        } else {
            return res.status(204).json({
                message: "Story successfully deleted",
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

const updateStory = async(req, res) => {
    try{
        await Story.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: "Story successfully updated",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         })
    }
}

const getAll = async(req, res) => {
    try{
        const [results, itemCount] = await 
        Promise.all([
            Story.find({})
            .populate("category", "title")
                .sort({createdAt: -1})
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(),
                Story.count({}),
                
        ]);
        const pageCount = Math.ceiling(itemCount/ req.query.limit);
        return res.status(201).json({
            object: "list",
            hasMore: paginate.hasNextPages(req) (pageCount),
            data: results,
            itemCount,
            currentPage: req.query.page,
            pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         })
    }
}

const getStory = async(req, res) => {
    try{
        let item = await Story.findByIdAndUpdate(req.params.id, {
            $inc: {viewsCount: 1},
        }).populate("category", "title");
        if(item) {
            item.comments = await Comment.find({story: item._id});
            return res.status(200).json(item)
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
    addStory,
    deleteStory,
    updateStory,
    getAll,
    getStory
}