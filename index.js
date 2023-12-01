var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer');
let upload = multer({dest: './uploads'})
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  
  let {mimetype, originalname, size} = req.file
  let response = {
    name: originalname,
    type: mimetype,
    size
  }
  res.json(response)
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
