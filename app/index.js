import { } from 'dotenv/config'
import express from "express";
import "./Connection/mongodb.js";// must be called before others 
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//routes
import json_transformer from './routes/json_transformer.js';
import env from 'dotenv';


env.config();
const app = express();


//middlewares
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/transform', json_transformer);



app.listen(process.env.PORT, () => {
    console.log('Server is running at port ' + process.env.PORT);
})