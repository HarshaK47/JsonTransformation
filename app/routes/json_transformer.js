import express from 'express'
import json_transformer from '../controller/json_transformer.js'
const router = express();


router.post("/json",json_transformer);


export default router;