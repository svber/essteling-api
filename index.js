var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Hello Avans!');
})

app.get('/macAddrress', function(request, response) {
	response.json({
		'macAddrresses': [
			{
				'location': 'exit',
				'macAddrress': "A further value",
				'minor': '00'
			},
			{
				'location': 'exit',
				'macAddrress': "A further value",
				'minor': '01'
			},
		],
	})
})

app.all('*', function(request, response) {
	response.status(404);
	response.send('404 - Not found');
})

app.listen(process.env.PORT || 3000, function(){
	console.log('De server luistert op port 3000');	
});