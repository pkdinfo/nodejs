const express = require('express');
const { find } = require('./product');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json()); // converts data feom request to json

app.get('/search/key', async (req, resp) => {
	
	console.log(req.params.key);
	let data = await Product.find({
		"$or": [ { "color": { $regex: req.params.key } } ]
	});
	resp.send(data);
});

app.listen(9000);

// app.post("/create", async (req, resp) => {
// 	let data = new Product(req.body);
// 	let result = await data.save();
// 	console.log(req.body);
// 	resp.send(req.body);
// });

// app.get("/list", async (req, resp)=>{

// 	let data = await Product.find();
// 	resp.send(data);

// });

// app.delete("/delete/:_id", async (req, resp)=>{
// 	console.log(req.params)
// 	let data = await Product.deleteOne(req.params);
// 	resp.send(data);

// });

// app.put('/update/:_id', async (req, resp) => {
// 	console.log(req.params);
// 	let data = await Product.updateOne(req.params, { $set: req.body });
// 	resp.send(data);
// });

// app.listen(6000);

// const mongoose = require('mongoose');
// const ProductSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number,
// 	sex: String
// });
// mongoose.connect('mongodb://localhost:27017/ecommerce');

// const saveInDb = async () => {

// const Product = mongoose.model('cloths', ProductSchema);
// 	let data = new Product({
// 		name: 'Clark',
// 		age: 45,
// 		sex: 'male',
// 	});
// 	let result = await data.save();
// 	console.log(result);
// };

// //saveInDb();

// const updateDb =async ()=>{
// 	const Product = mongoose.model('cloths', ProductSchema);
// 		let data = await Product.updateOne(
// 			{name : "Clark"},
// 			{$set: {sex : 'female'}}
// 			)
// }

// //updateDb();

// const deleteInDb =async () =>{
// 	const Product = mongoose.model('cloths', ProductSchema);
// let data = await Product.deleteOne(
// 		{name :"Clark"}
// )
// }

// //deleteInDb();

// const findInDb =async () =>{
// 	const Product = mongoose.model('cloths', ProductSchema);
// let data = await Product.find(
// 		{name :"Clark"}
// )
// console.log(data);
// }

// findInDb();
