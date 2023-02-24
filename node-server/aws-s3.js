var AWS = require('aws-sdk/dist/aws-sdk-react-native');
global.XMLHttpRequest = require('xhr2').XMLHttpRequest;
var fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: "AKIAVBNRPSDG6M4WALJH",
    secretAccessKey: "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",
})
function upload(name) {
    const blob = fs.readFileSync('./package.json');
    s3.upload({
        Bucket: "mybucket-22-02",
        Key: name,
        Body: blob,
    }).promise().then(function () {
        // console.log("file uploaded")
    })
}
function getFile(name) {
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: "mybucket-22-02",
            Key: name
        }, function (err, data) {
            if (err) {
                reject(err)
            } else {
                // console.log("file fetched: " + name);
                resolve(data);
            }
        })
    })


}
module.exports = { upload: upload, getFile: getFile };