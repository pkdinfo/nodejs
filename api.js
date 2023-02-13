const express = require('express');
const app = express();
const dbConnect = require('./mongodb');

app.get('/', async (req, resp) => {
	let data = await dbConnect();
	data = await data.find().toArray();
	console.log(data);
	resp.send(data);
});

app.listen(3000);
