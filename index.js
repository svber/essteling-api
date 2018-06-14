var express = require('express');
var app = express();

app.get('/macAddrress', function(request, response) {
 response.send('Hello Avans!');
})

app.all('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})

app.listen(3000, function() {
 console.log('Server app is listening on port 3000');
})