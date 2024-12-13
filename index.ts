const TodoRoute = require('./route/TodoRoute')
const UserRoute = require('./route/UserRoute');
const connectToDB = require('./Db')
import express from 'express';
const app = express();
import dotenv from "dotenv"
var cors = require('cors');
app.use(cors());
app.use(express.json())
dotenv.config();
connectToDB();


app.use('/api', UserRoute);
app.use('/api', TodoRoute)


app.listen(process.env.PORT, () => {
    console.log(`App is listening at port: ${process.env.PORT}`)
})