import {Request, Response} from 'express';
import Todo from '../models/TodoSchema'


const getList = async (req: Request, res: Response): Promise<any> => {
try{
const todo = await Todo.find();
res.status(200).send(todo)
}catch(error){
    console.log("error", error);
    res.status(500).json({message:"Something went wrong"})
}
}



const createList = async (req: Request, res: Response): Promise<any> => {
try{
const {title, description, tag} = req.body;
const todo = await Todo.create({
    title: title,
    description: description, 
    tag: tag
})
res.status(200).send(todo)
}catch(error){
    console.log("error", error);
    res.status(500).json({message: "Something went wrong"})
}
}


const updateList = async (req: Request, res: Response): Promise<any> => {
try{
const todoId = req.params.id;
const {title, description, tag} = req.body;
const updatedList = await Todo.findByIdAndUpdate(todoId, {title, description, tag}, {new:true});
if(!updatedList){
    return res.json({message: "No list to update"})
}
res.status(201).send(updatedList)
}catch(error){
    console.log("error", error);
    res.status(500).json({message:"Something went wrong"})
}
}


const deleteTodo = async (req: Request, res: Response): Promise<any> => {
try{
const todoId = req.params.id;
const deletedTodo = await Todo.findByIdAndDelete(todoId)
}catch(error){
console.log("error", error);
res.status(500).json({message: "Something went wrong"})
}
}


export default {
    getList,
    createList,
    updateList,
    deleteTodo
}