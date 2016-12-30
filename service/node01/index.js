var express = require('express');
var app = express();
app.use(express.static('public'));
app.all('*',function (req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
})
app.get('/', function (req,res){
  res.sendFile(__dirname+'/1.json');
});

app.get('/list', function (req,res){
	res.sendFile(__dirname+'/2.json');
});

app.get('/junt',function(req,res){
	res.sendFile(__dirname+'/3.json');
});

app.get('/sree',function(req,res){
	res.sendFile(__dirname+'/4.json');
});

app.get('/fift',function(req,res){
	res.sendFile(__dirname+'/5.json');
});


var server = app.listen('3500', function () {
  // body..
  console.log(app)
  console.log(server.address().address, server.address().port);
})