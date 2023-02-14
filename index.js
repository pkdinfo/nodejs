const mongoose = require('mongoose');
const main = async () =>{
	await mongoose.connect("mongodb://localhost:27017/ecommerce");
	const ProductSchema = new mongoose.Schema({
		name: String,
		age : Number,
	});
	const ProductModel = mongoose.model('cloths', ProductSchema);
	let data = new ProductModel({name : "Manish", age : 45})
	let result = await data.save();
	console.log(result); 
} 

main();