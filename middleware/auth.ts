import {Request, Response, NextFunction} from 'express';
import JWT from "jsonwebtoken"




export const userAuthRole = async (req: Request, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;
    if(!authorization || !authorization.startsWith("Bearer ")){
        return res.sendStatus(401)
    }

    const token = authorization.split(' ')[1];
    try{
    const decoded = JWT.verify(token, process.env.JWT_SECRET as string);
    if(!decoded){
        return res.status(401).json({message: "Access Denied"})
    }
    const userRole = decoded.role;
    req.user = decoded

    if(userRole === "admin"){
        next()
    }else if(userRole === 'guests'){
    if(req.method === 'GET'){
        next()
    }else{
        return res.status(401).json({message: "Access Denied"})
    }
    }else{
        return res.status(401).json({message: "Access Denied"})
    }
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
    }
}