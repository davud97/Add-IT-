const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  type: {
    type: [String], // array of strings
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Category", categorySchema)
