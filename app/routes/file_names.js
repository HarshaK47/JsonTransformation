import express from 'express';
import file_names from '../controller/file_names.js';

const router = express.Router();


router.get("/fetch", file_names);


export default router;