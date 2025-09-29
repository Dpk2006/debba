import express from "express";
import dotenv from 'dotenv';

dotenv.config({ path: '/custom/path/to/.env' });

const app = express();
let PORT = 3000;

app.get("/",(req,res)=>{
    res.send(true);
});

app.listen(3000, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});