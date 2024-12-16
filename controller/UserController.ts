const User = require("../models/UserSchema")
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
import {Request, Response} from 'express'


const register = async (req: Request, res: Response): Promise<any> => {
try{
const {email, password, role} = req.body;
let user = User.findOne({email});
if(user){
    return res.status(500).json({message: "User already exists"})
}

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

user = await User.create({
    email: email,
    password: hashedPassword,
    role: role
})

const payload = {
    userId: user._id,
    role: user.role
}

const authToken = JWT.sign(payload, process.env.JWT_SECRET)
res.status(201).json({authToken})

}catch(error){
    console.log("error", error)
}
}


const login = async (req: Request, res: Response): Promise<any> => {
try{
const {email, password} = req.body;
let user = await User.findOne({email});
if(!user){
    return res.status(400).json({message: "invalid user email or password"})
}
const comparePassword = bcrypt.compareSync(password, user.password);
if(!comparePassword){
return res.status(400).json({message: "Invalid user email or password"})
}
const payload = {
    userId: user._id,
    role: user.role
}
const authToken = JWT.sign(payload, process.env.JWT_SECRET);
res.status(200).json({authToken})

}catch(error){
console.log("error", error)
}
}


export default {
    register,
    login
}