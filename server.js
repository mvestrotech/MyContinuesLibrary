const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/assets', function (req,res){
  res.sendFile(__dirname + '/dist/assets');
});
app.get('/*', function (req,res){
  res.sendFile(__dirname + '/dist/assets');
})

var port = process.env.PORT || 80;
app.listen(port,function (){
  console.log('server running on port ' + port + '.');
});
