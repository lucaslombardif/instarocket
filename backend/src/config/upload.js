const multer   = require('multer');
const multerS3 = require('multer-s3');
const path     = require('path');
const fs       = require('fs');
const aws      = require('aws-sdk');
require('dotenv/config');

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new aws.S3;

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'testeforinstarocket',
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

module.exports = upload;