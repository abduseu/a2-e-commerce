import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());


//application routes



export default app;
