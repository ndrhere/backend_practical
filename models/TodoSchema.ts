import mongoose from 'mongoose'


const TodoSchema = new mongoose.Schema ({
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
export default Todo


