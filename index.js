const express = require('express');
require('./config');
const Product = require('./product');

const app = express(); // converts data feom request to json
app.use(express.json());
app.post('/create', (req, resp) => {
	console.log(req.body);
	resp.send('done');
});
app.listen(7000);

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
