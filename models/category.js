const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
  type: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
const Category = mongoose.model("Category", categorySchema)
module.exports = Category
