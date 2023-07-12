var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  

app.get('/sampledata', function (req, res) {  
response = 123456; 
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) 