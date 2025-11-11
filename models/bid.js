const mongoose = require("mongoose")
const bidSchema = new mongoose.Schema({
  currentBid: {
    type: Number,
    required: true,
    min: 0,
  },
  bidStatus: {
    type: Boolean,
    default: false,
  },
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  advertiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advertisement",
  },
})
const Bid = mongoose.model("Bid", bidSchema)
module.exports = Bid
