import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../models/task.model.js"

const createTask = asyncHandler(async (req,resp) => {
    // get data from user

    const { title, description, status } = req.body;

    if(
        [title, description, status].some((field) => field.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    // create task object

    const task = await Task.create({
        title,
        description,
        status
    })

    if(!task){
        throw new ApiError(500, "Something went wrong while creating the task")
    }

    // return resp

    return resp.status(201).json(
        new ApiResponse(200, task, "Task Created Successfully")
    )
})

const getAllTasks = asyncHandler(async (req,resp) => {
    const tasks = await Task.find()

    if(!tasks){
        throw new ApiError(400, "Tasks not found")
    }

    // return resp

    return resp.status(200).json(
        new ApiResponse(200, tasks, "All Tasks")
    )
})

const getTaskById = asyncHandler(async (req,resp) => {
    const taskId = req.params.id;

    const task = await Task.findById(taskId)

    if(!task){
        throw new ApiError(401, "Task not found")
    }

    // return resp

    return resp.status(200).json(
        new ApiResponse(200, task, "Task Fetched")
    )
})

const updateTaskById = asyncHandler(async (req,resp) => {
    const taskId = req.params.id;

    const task = await Task.findByIdAndUpdate(
        taskId,
        req.body, {new: true}
    )

    if(!task){
        throw new ApiError(401, "Error while updating task")
    }

    // return resp

    return resp.status(200).json(
        new ApiResponse(200, task, "Task Updated")
    )
})

const deleteTaskById = asyncHandler(async (req,resp) => {
    const taskId = req.params.id;

    const task = await Task.findByIdAndDelete(taskId)

    if(!task){
        throw new ApiError(401, "Error while deleting task")
    }

    // return resp

    return resp.status(200).json(
        new ApiResponse(200, task, "Task Deleted")
    )
})


export {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
}