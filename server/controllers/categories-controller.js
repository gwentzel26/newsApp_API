const Category = require("../models/category");
const paginate = require("express-paginate");

const addCategory = async(req, res) => {
    try{
        const newCat = new Category({
            ...req.body,
            createdBy: req.user._id,

        });
        await newCat.save();
        return res.status(201).json({
            message: "New Category Added",
            success: true
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
         });
    }
}

const deleteCategory = async(req, res) => {
    try{
        const deleteOne = await Category.findByIdAndDelete(req.params.id);
        if(!deleteOne) {
            return res.status(404).json({
                message: "Id not found",
                success: false
            })
        } else {
            return res.status(204).json({
                message: "Category successfully deleted",
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

const updateCategory = async(req, res) => {
    try{
        await Category.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).json({
            message: "Category successfully updated",
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
            Category.find({}
                .sort({createdAt: -1})
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(),
                Category.count({}),
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

const getCategory = async(req, res) => {
    try{
        const getCat = await Category.findById(req.params.id);
        if(getCat) {
            return res.status(200).json(getCat)
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
    addCategory,
    deleteCategory,
    updateCategory,
    getAll,
    getCategory
}