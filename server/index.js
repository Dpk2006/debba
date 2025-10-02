import express from "express";
import dotenv from 'dotenv';
import { routerSignup } from "./routes/auth.routes.js";
import {connectMongo} from "./db/connectMongo.js"

dotenv.config({ path: '/custom/path/to/.env' });

const app = express();
let PORT = 3000;

// Express middleware
app.use(express.json());

// Connect database
connectMongo();

app.get("/",(req,res)=>{
    res.send(true);
});

//Login and signup routes
// app.use('/login');
app.use('/signup',routerSignup);


app.listen(3000, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});