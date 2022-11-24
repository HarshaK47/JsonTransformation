import { } from 'dotenv/config'

import express from "express";
import "./Connection/mongodb.js";// must be called before others 

//routes
// import code_generator from './routes/code_generator.js';
import json_transformer from './routes/json_transformer.js';
import file_names from './routes/file_names.js';

import env from 'dotenv';

env.config();
const app = express();

//middlewares
app.use(express.json());
// app.use('/generate',code_generator);
app.use('/transform', json_transformer);
app.use('/file_names', file_names);

app.listen(3000, () => {
    console.log('Server is running at 3000');
})