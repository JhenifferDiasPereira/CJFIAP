const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  sku: String,
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("product", schema);
