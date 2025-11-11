const Biding = require('../models/bid');

// API's

exports.biding_index_get = async (req, res) => {
  const bidings = await Biding.find().populate('advertiser');
  res.render('bids/index.ejs', { bidings })
}

exports.Biding_create_get = async (req, res) => {
  res.render('bids/new.ejs')
}

exports.Biding_create_post = async (req, res) => {
  req.body.owner = req.session.user._id;
  await Biding.create(req.body);
  res.redirect('/bids');
}

exports.Biding_show_get = async (req, res) => {
  const biding = await Biding.findById(req.params.bidingId).populate('owner');
  res.render('bids/show.ejs',{ biding });
}

exports.Biding_edit_get = async (req, res) => {
    const currentBid = await Biding.findById(req.params.bidingId);
    res.render('bids/edit.ejs', {
      biding: currentBid,
    });
};

exports.biding_update_put = async (req, res) => {
    const currentBid = await Biding.findById(req.params.bidingId);
    if (currentBid.owner.equals(req.session.user._id)) {
      await currentBid.updateOne(req.body);
      res.redirect('/bids');
    } else {
      res.send("You don't have permission");
    }
};

