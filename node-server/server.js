var express = require('express');
var app = express();
var s3Instance = require('./aws-s3');
const cors = require('cors');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, }));
app.use(cors({
  origin: '*'
}));
app.post('/student-upload', (req, res) => {
  const dbInstance = require('./mysqlClient');
  dbInstance.insertIntoPic(req.body).then((data) => {
    res.send(data);
  })
})


app.post('/create-student', (req, res) => {
  const dbInstance = require('./mysqlClient');
  dbInstance.insert(req.body).then((data) => {
    res.send(data);
  })

})
app.get('/student-all', (req, res) => {
  var id = req.parameter?.name;
  const dbInstance = require('./mysqlClient');
  dbInstance.getAllPictures().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  })

})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at", host, port)
})


