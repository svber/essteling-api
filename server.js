var http = require('http');
var express = require('express');
var routes_v1 = require('./api/routes_v1');
var routes_v2 = require('./api/routes_v2');

var app = express();

app.get('/', function(request, response) {
 response.send('Hello Avans!');
})

app.get('/json', function(request, response) {
 response.json({
 'some_name': 'Value',
 'an_array_of_objects': [
 {
 'another_name': 'Another value',
 'a_further_name': "A further value"
 },
 {'yet_another_name': 'Yet another value'}
 ],
 'some_boolean': true,
 'some_integer': 42,
 'array_of_ints': [
 2, 3, 5, 7, 11, 13
 ],
 'array_of_strings': [
 "twee", "drie", "vijf", "zeven"
 ]
 })
})

app.get('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})


app.listen(process.env.PORT || 3000, function(){
	console.log('De server luistert op port 3000');	
});

module.exports = app;
