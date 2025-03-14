const asyncHandler = require("express-async-handler");
const NewsModel = require("../model/NewsModel");

const createNews = asyncHandler(async (req, res) => {

    const { title, description, img } = req.body;
    try {
        const newItem = await NewsModel.create({
            title, 
            description,
            img
        });

        return res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

const getAllNewss = asyncHandler(async (req, res) => {
    try {
        const Newss = await NewsModel.find()

        res.status(200).json(Newss);
    } catch (error) {
        res.status(500).json({
            message: error.mesasge
        })
    }
});

const getOne = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const Newss = await NewsModel.findById(id)
        res.status(200).json(Newss);
    } catch (error) {
        res.status(500).json({
            message: error.mesasge
        })
    }
});

const deleteNews = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw Error("Id can't be empty");
        }

        const deletedSub = await NewsModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'News Deleted Successfully', item:deletedSub });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const updateNews = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const Data = req.body;

        if (!id) {
            throw Error("Id can't be empty");
        }

        const updatedNews = await NewsModel.findByIdAndUpdate( id, Data );
        res.status(200).json({ message: 'News Updated Successfully', item: updatedNews });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    createNews,
    getAllNewss,
    getOne,
    deleteNews,
    updateNews
};