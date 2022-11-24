import express from 'express';
import json_transformer from '../controller/json_transformer.js';
import {upload} from "../Connection/multer_GridFS.js";

const router = express();


router.post("/json", json_transformer);


export default router;