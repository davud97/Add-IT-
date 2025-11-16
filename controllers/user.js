const User = require("../models/user")

// GET show profile**************
exports.user_profile_get = async (req, res) => {
  const user = await User.findById(req.session.user._id)
  res.render("user/profile.ejs", { user })
}

// GET show edit form************
exports.user_edit_get = async (req, res) => {
  const user = await User.findById(req.session.user._id)
  res.render("user/edit.ejs", { user })
}

// POST update the profile**********
exports.user_edit_post = async (req, res) => {
  const userId = req.session.user._id
  // Collect form data
  const updateData = {
    username: req.body.username,
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    bio: req.body.bio,
  }

  // If user uploaded a new image in editing
  if (req.file) {
    updateData.profileImage = req.file.filename
  }

  // If user updated password in prfile edit
  if (req.body.password) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.send("Passwords do not match!")
    }
    updateData.password = req.body.password
  }

  // Update that specific user
  await User.findByIdAndUpdate(userId, updateData)

  // Refresh session after all updates
  const updatedUser = await User.findById(userId)
  req.session.user = updatedUser

  res.redirect("/profile")
}
