import Transform from '../models/json_transformer.js'

const json_transformer = (req, res) => {

  if(!req.files)
  {
   console.log("error");
   return ;
  }

   if (req.files.length === 2) {

      Transform.findOne({ name: req.body.name }).exec(async (error, fileName) => {

         if (fileName) {
            return res.status(400).json({
               error: "File Name already exists."
            })
         }

         const { originalname, mimetype, filename } = req.files[1]
         const name = req.body.name
         const newFile = new Transform({
            name,
            originalname,
            mimetype,
            filename
         })

         newFile.save((error, data) => {

            if (error) {
               return res.status(400).json({
                  error: "Something went wrong."
               })
            }

            //    if (data) {




            //    }
            // })

         })

      })
      // else if (req.files.length === 1) {



      // }



   }

}

export default json_transformer;
