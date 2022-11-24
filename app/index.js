import {} from 'dotenv/config'

import express from "express";
import  "./Connection/mongodb.js";// must be called before others 

//routes
// import code_generator from './routes/code_generator.js';
import json_transformer from './routes/json_transformer.js';

const app=express();

//middlewares
app.use(express.json());
// app.use('/generate',code_generator);
app.use('/transform',json_transformer);

app.listen(3000, ()=>{
    console.log('server is running at 3000...');
})