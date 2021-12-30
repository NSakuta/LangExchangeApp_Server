const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uploadConfig = require('../config/upload.config')

const s3Config = new AWS.S3({
  accessKeyId: uploadConfig.accessKey,
  secretAccessKey: uploadConfig.secretAccKey,
  Bucket: uploadConfig.bucket
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const multerS3Config = multerS3({
    s3: s3Config,
    bucket: uploadConfig.bucket,
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        console.log(file)
        const now = new Date().toISOString(); 
        const date = now.replace(/:/g, '-');
        cb(null, 'avatar' + '-' + date + file.originalname)
    }
});

const upload = multer({
    storage: multerS3Config,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5 
    }
})

exports.profileImage = upload; 

