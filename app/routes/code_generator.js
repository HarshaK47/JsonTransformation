import express from 'express';
import code_generator from '../controller/code_generator.js';
import multer from 'multer';
import path from 'path';
const router = express();

router.post("/code", code_generator);

export default router;