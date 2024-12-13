import mongoose from 'mongoose';
const mongoURI = process.env.MONGO_URI;


async function connectToMongo () {
try{
await mongoose.connect(mongoURI as string);
console.log("MongoDB connected successfully")
}catch(error){
    console.log("error", error)
}
}


module.exports = connectToMongo;