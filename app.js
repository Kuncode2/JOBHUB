// EXPRESS PART(BACKEND-PART)
import  express  from "express";
import dotenv from "dotenv"
import cors from "cors"                // use for connections between forentend and backend
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from './routes/userRouter.js'
import applicationRouter from './routes/applicationRouter.js'
import jobRouter from './routes/jobRouter.js'
import { dbConnection } from './database/dbConnection.js'

const app = express();
dotenv.config({path: "./config/config.env"})

app.use(cors({                         //  this is the  express methods for  inserting the request 
    origin:[process.env.FRONTEND_URL],   //  the array is use for to connect multiple forentend with backend
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}))

app.use(cookieParser());      // tokens
app.use(express.json());                // converting the client data into the json
app.use(express.urlencoded({extended: true}));   
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",        // tmp is the  tempstorage 
}))

app.use("/api/v1/user", userRouter)                         // this all are end point of an api
app.use("/api/v1/application", applicationRouter)
app.use("/api/v1/job", jobRouter)

dbConnection();


export default app;  