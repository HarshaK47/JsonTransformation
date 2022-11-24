import express from 'express';
import code_generator from '../controller/code_generator.js';
import multer from 'multer';
import path from 'path';
const router = express();


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log(path.join(path.dirname(__dirname), "uploads"));
//         cb(null, path.join(path.dirname(__dirname), "uploads"));
//     },
//     filename: function (req, file, cb) {

//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage });


router.post("/code", code_generator);

export default router;