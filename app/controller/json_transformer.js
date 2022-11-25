// import { json } from 'express'
import Transform from '../models/json_transformer.js'
import { spawn } from 'child_process'
import { PythonShell } from 'python-shell';
import fs from 'fs';
// import { } from 'dotenv/config'


const spawnProcess = (source, mapping) => {

   // spawn process


   var dataToSend
   // spawn new child process to call the python script

   let args =
      JSON.stringify({
         'src': source,
         'map': mapping
      })

   // args.unshift(process.env.PYTHON_FILE)
   console.log("args -->", args);
   const python = spawn(process.env.PYTHON_PATH, [
      process.env.PYTHON_FILE,
      args

   ])
   // collect data from script
   python.stdout.on('data', function (data) {

      dataToSend = data.toString()
      // console.log("data -->", dataToSend);
      return dataToSend;
   })
   python.stderr.on('data', function (data) {
      console.log(data.toString())
      return data.toString();
   })
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {

      console.log(`child process close all stdio with code ${code}`)
      return `child process close all stdio with code ${code}`

      // send data to browser
   })

}


// let options = {
//    mode: 'text',
//    pythonPath: process.env.PYTHON_PATH,
//    pythonOptions: ['-u'], // get print results in real-time
//    scriptPath: process.env.PYTHON_FILE,
//    args: []
// };

// const spawnProcess = (source, mapping) => {

//    let options = {
//       // mode: 'text',
//       pythonPath: process.env.PYTHON_PATH,
//       pythonOptions: ['-u'], // get print results in real-time
//       scriptPath: process.env.PYTHON_FILE,
//       args: [source, mapping]
//    };

//    PythonShell.run(process.env.PYTHON_FILE, options, function (err, results) {
//       if (err) throw err;
//       // results is an array consisting of messages collected during execution
//       console.log('results: %j', results);
//    });
// }



const json_transformer = (req, res) => {


   console.log(req.file);
   // console.log(req.body.inputName);
   if (req?.file && Object.keys(req.file).length > 0) {

      Transform.findOne({ name: req.body.inputName }).exec((error, fileName) => {

         if (error) {
            return res.status(400).json({
               error
            })
         }
         if (fileName) {
            return res.status(400).json({
               error: "File Name already exists."
            })
         }


         const { originalname, mimetype, filename, path } = req.file
         const name = req.body.inputName
         const newFile = new Transform({
            name,
            originalname,
            mimetype,
            filename,
            path
         })

         newFile.save((error, data) => {

            if (error) {
               return res.status(400).json({
                  error: "Something went wrong."
               })
            }

            if (data) {

               // source and mapping file


               const { source } = req.body

               const parsedSource = JSON.parse(source)

               console.log(parsedSource);

               // const jsonResult = spawnProcess
               // let jsonResult;
               // fs.writeFileSync('D:\\Projects\\STG_India_Hackathon\\JsonTransformation\\app\\uploads\\source.json', JSON.stringify(parsedSource), (err) => {
               //    if (err) throw err
               //    console.log("File Saved");

               console.log(parsedSource, path);
               const jsonResult = spawnProcess(parsedSource, path)
               // })


               return res.status(200).json({
                  target: jsonResult
               })
            }
         })

      })

   } else {

      // source and map name convert to file 
      Transform.findOne({ name: req.body.mapName }).exec((error, file) => {

         if (error) {
            return res.status(400).json({
               error
            })
         }

         if (file) {

            const { source } = req.body

            source = JSON.parse(source)
            const jsonResult = spawnProcess(source, file.path)


            return res.status(200).json({
               target: jsonResult
            })
         }
      })




   }



}


export default json_transformer;
