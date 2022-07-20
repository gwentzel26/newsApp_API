import Video from ("../models/video");
const paginate = require("express-paginate");

const addVideo = async(req, res) => {
    try{
        const newVid = new Video({
            ...req.body,
            createdBy: req.user._id,
        });
        await newVid.save();
        return res.status(201).json({
            message: "New Video Added",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         });
    }
}

const deleteVideo = async(req, res) => {
    try{
        const deleteOne = await Video.findByIdAndDelete(req.params.id);
        if(!deleteOne) {
            return res.status(404).json({
                message: "Id not found",
                success: false
            })
        } else {
            return res.status(204).json({
                message: "Video successfully deleted",
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

const updateVideo = async(req, res) => {
    try{
        await Video.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: "Video successfully updated",
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
            Video.find({})
                .sort({createdAt: -1})
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(),
                Video.count({}),   
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

const getVideo = async(req, res) => {
    try{
        let item = await Video.findByIdAndUpdate(req.params.id, {
            $inc: {viewsCount: 1},
        })
        if(item) {
            
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


const getTopVideos = async(req, res) => {
    try{
        let result = await 
            Video.find({})
                .sort({viewsCount: -1})
                .limit(3)
                .lean()
                .exec()
                
        return res.status(201).json({
            data: result,
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         })
    }
}

module.exports = {
    addVideo,
    deleteVideo,
    updateVideo,
    getAll,
    getVideo,
    getTopVideos,
}