import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },

    description:{
        type: String,
        trim: true,
    },

    status:{
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const Task = mongoose.model("Task", taskSchema)