// import "./Connection/mongodb.js";// must be called before others 
import express from "express";
import mongoose from 'mongoose'
import code_generator from './routes/code_generator.js';
import json_transformer from './routes/json_transformer.js';
import env from 'dotenv';


env.config();


// mongodb connection
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qn9faxx.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Database Connected Successfully");
    });



const app = express();

//middlewares
app.use(express.json());
app.use('/generate', code_generator);
app.use('/transform', json_transformer);

app.listen(3000, () => {
    console.log('Server is running at 3000');
})