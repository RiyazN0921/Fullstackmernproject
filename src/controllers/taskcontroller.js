const express = require('express');
const TaskModel = require("../models/taskmodels");

const createTask = async (req,res)=>{
    try {
        const {title, description , status} = req.body;
        const createtask = await TaskModel.create(req.body);

        res.json({
            message:"Task created successfully",
            createTask
        })
    } catch (error) {
        res.json({
            message:"internal server error"
        })
    }
}

const getAllTask = async (req, res) => {
    try {
        const gettask = await TaskModel.find();
        res.json({
            message:gettask
        })
    } catch (error) {
        res.json({
            message:"internal server error"
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const update = await TaskModel.findByIdAndUpdate(req.params.id , req.body , {new : true});
        res.json({
            message : update
        })
    } catch (error) {
        res.json({
            message: "internal server error"
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const deletetask = await TaskModel.findByIdAndDelete(req.params.id);
        res.json({
            message : "task deleted",
            deletetask
        })
    } catch (error) {
        res.json({
            message : "internal server error"
        })
    }
}

module.exports = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}