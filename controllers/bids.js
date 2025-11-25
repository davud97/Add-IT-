const Bid = require("../models/bid");
const Advertisement = require("../models/advertisement");


//api

//displays users ongoing bidding
exports.bid_index_all_get = async (req, res) => {
  const user = req.session.user;
  const bids = await Bid.find({ lastBidder: user._id }).populate("advertisement");
  res.render("bids/index.ejs", { bids, user });
}

exports.bid_index_get = async (req, res) => {
  const ad = await Advertisement.findById(req.params.advertisementId).populate("owner");
  const bid = await Bid.findOne({ advertisement: ad._id }).populate("lastBidder");
  res.render("bids/show.ejs", { ad, bid, user: req.session.user });
}

exports.bid_create_post = async (req, res) => {
  const ad = await Advertisement.findById(req.params.advertisementId);
  //prevents owner bidding on his own ads #no internal trading
  if (ad.owner.equals(req.session.user._id)) {
    return res.redirect(`/bids/${ad._id}`);
  }
  let bid = await Bid.findOne({ advertisement: ad._id });
  if (bid) {
    bid.currentBid = req.body.currentBid;
    bid.lastBidder = req.session.user._id;
    await bid.save();
  } else {
    bid = await Bid.create({
      advertisement: ad._id,
      currentBid: req.body.currentBid,
      lastBidder: req.session.user._id,
    })
  }

  res.redirect(`/bids/${ad._id}`);
}
//ends bidding
exports.bid_finalize_post = async (req, res) => {
  const bid = await Bid.findOne({ advertisement: req.params.advertisementId });
  const ad = await Advertisement.findById(req.params.advertisementId);
  if (!ad.owner.equals(req.session.user._id)) {
    return res.redirect(`/bids/${ad._id}`);
  }
  bid.bidStatus = false;
  await bid.save();

  res.redirect(`/bids/${ad._id}`);
}
