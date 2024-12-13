import mongoose from 'mongoose'
const {Schema} = require('mongoose');

const TodoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo


