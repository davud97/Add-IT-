const Category = require("../models/category")
// APIs
exports.advertisement_index_get = async (req, res) => {
  const advertisements = await Advertisement.find().populate("owner").populate("category","type");
  res.render("advertisements/index.ejs", { advertisements })
}

exports.advertisement_create_post= async(req,res)=>{
  req.body.owner=req.session.user._id
  await Advertisement.create(req.body);
  res.redirect('advertisements')
}


exports.advertisement_create_get= async(req,res)=>{
  const categories = await Category.find()
  res.render('advertisements/new.ejs',{categories})
}

exports.advertisement_show_get=async (req,res)=>{
  const advertisement=await Advertisement.findById(req.params.advertisementId).populate('owner').populate('category','type');
  res.render('advertisements/show.ejs',{advertisement})
}

exports.advertisement_edit_get= async(req,res)=>{
  const advertisement=await Advertisement.findById(req.params.advertisementId).populate('owner')
    res.render('advertisements/edit.ejs',{advertisement})
};

exports.advertisement_update_put = async (req, res) => {
    const currentAdvertisement = await Advertisement.findById(req.params.advertisementId);
    if (currentAdvertisement.owner.equals(req.session.user._id)) {
      await currentAdvertisement.updateOne(req.body);
      res.redirect('/advertisements');
    } else {
      res.send("You don't have permission to do that.");
    }
};



exports.advertisement_delete_delete = async (req, res) => {
    const advertisement = await Advertisement.findById(req.params.advertisementId);
    if (advertisement.owner.equals(req.session.user._id)) {
      await advertisement.deleteOne();
      res.redirect('/advertisements');
    } else {
      res.send("You don't have permission to do that.");
    }
};


//  ali or mhd please merge this part into your newly uplade advertisement. js file
// *******************
// const Category = require("../models/category")

// exports.ads_new_get = async (req, res) => {
//   const categories = await Category.find()
//   res.render("ads/new.ejs", { categories })
// }

// ***************************

// and the following in advertisement.ejs file
// **************
{
  /* <label>Category:</label>
<select name="category">
  <% categories.forEach(cat => { %>
    <option value="<%= cat._id %>">
      <%= cat.type.join(", ") %>
    </option>
  <% }) %>
</select> */
}
