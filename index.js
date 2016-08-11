const zlib = require('zlib');
const unzip = zlib.Unzip();
var jsonStream = require('JSONStream');
var AWS = require('aws-sdk');

var params = {
  Bucket: 'BUCKET_NAME',
  Key: 'BUCKET_KEY'
};

var s3 = new AWS.S3();

s3.getObject(params).createReadStream()
.pipe(unzip)
.pipe(jsonStream.parse())
.on('data', function(data){
  console.log(data)
  // data = unique objects
});

