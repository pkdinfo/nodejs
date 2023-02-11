const express = require('express');
const app = express();

app.get('', (req, res) => {
	console.log('name:--------------', req.query.name);
	res.send('this is home page forfff',  req.query.name);
});

app.get('/about', (req, res) => {
	res.send('this is about pages');
});

app.get('/help', (req, res) => {
	res.send('this is help page');
});

//creating server
app.listen(8000);
