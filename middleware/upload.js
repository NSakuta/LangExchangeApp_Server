const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
    destination: 'images', // Destination to store image     
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
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
})  

module.exports = multer({storage, imageUpload})


