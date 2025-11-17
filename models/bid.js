const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  advertisement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advertisement",
    required: true,
  },
  currentBid: {
    type: Number,
    required: true,
    min: 0,
  },
  bidStatus: {
    type: Boolean,
    default: true,
  },
  lastBidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Bid = mongoose.model("Bid", bidSchema);
module.exports = Bid;
