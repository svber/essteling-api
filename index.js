var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function(request, response){
	response.send('hello avans');
})
app.listen(port, function(){
	console.log('Server app is listening on port '= port);
})