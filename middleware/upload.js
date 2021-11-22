const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
        const now = new Date().toISOString(); 
        const date = now.replace(/:/g, '-'); 
          cb(null, file.fieldname + '_' + date 
             + path.extname(file.originalname))
    }
});

     
const imageUpload = multer({
    storage: storage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        console.log('filefilter: ', file)
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

module.exports = multer({storage, imageUpload})


