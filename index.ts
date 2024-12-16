import express from "express";
import TodoRoute from "./route/TodoRoute";
import UserRoute from "./route/UserRoute";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Mongodb connected successfully!"));


app.use("/api", UserRoute);
app.use("/api", TodoRoute);



app.listen(process.env.PORT, () => {
  console.log(`App is listening at port: ${process.env.PORT}`);
});
