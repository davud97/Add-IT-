const mongoose = require("mongoose")
const advertisementSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  saleMode: {
    type: String,
    enum: ["fixed", "bid"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
})
const Advertisement = mongoose.model("Advertisement", advertisementSchema)
module.exports = Advertisement
