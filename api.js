const express = require('express');
const app = express();
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

app.use(express.json());

app.get('/', async (req, resp) => {
	let data = await dbConnect();
	data = await data.find().toArray();
	console.log(data);
	resp.send(data);
});

app.post('/', async (req, resp) => {
	console.log(resp.body);
	console.log(req.body);
	let data = await dbConnect();
	let result = await data.insertOne(req.body)
	resp.send(result);
});

// update API
app.put("/", async (req, resp)=>{
let data = await dbConnect();
let result = data.updateOne(
	{name : req.body.name},
	{$set : req.body}

)
resp.send({result:update})
})

// delete API

app.delete('/:id', async (req, resp)=>{
	console.log(req.params.id);
	const data = await dbConnect();
	const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
	resp.send(result);
	console.log("done");

})
app.listen(4000);
