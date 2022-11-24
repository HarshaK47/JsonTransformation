import express from "express";
import  "./Connection/mongodb.js";// must be called before others 
import {conn,upload,gfs,gridFSBucket} from "./Connection/multer_GridFS.js";

//routes
import code_generator from './routes/code_generator.js';
import json_transformer from './routes/json_transformer.js';

const app = express();

//middlewares
app.use(express.json());
app.use('/generate', code_generator);
app.use('/transform', json_transformer);

app.listen(3000, () => {
    console.log('Server is running at 3000');
})