import User from ("../models/user");
const paginate = require("express-paginate");

const getAll = async(req, res) => {
    try{
        const [results, itemCount] = await 
        Promise.all([
            User.find({}
                .sort({createdAt: -1})
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(),
                User.count({}),
                )
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

const getAdmin = async(req, res) => {
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
    getAll,
    getAdmin
}