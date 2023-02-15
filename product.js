const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    product : String,
    color: String,
    quantity:String,
})

module.exports = mongoose.model('cloths', ProductSchema);