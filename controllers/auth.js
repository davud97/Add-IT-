const User = require("../models/user")
const bcrypt = require("bcrypt")

//sign up page
exports.auth_signup_get = async (req, res) => {
  res.render("auth/signup.ejs")
}

exports.auth_signup_post = async (req, res) => {
  //checks if username has been used
  const userDatabase = await User.findOne({ username: req.body.username })
  if (userDatabase) {
    return res.send("Unfortunately. The username is already taken :/")
  }

  //checks if passwords match
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and confirm password do not match!")
  }

  //encrypt password...
  const secretPassword = bcrypt.hashSync(req.body.password, 10)

  //create user with all required fields
  const user = await User.create({
    username: req.body.username,
    password: secretPassword,
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    bio: "", // optional field
  })

  //successful signup message OR redirect
  res.send(`Welcome ${user.username}!`)
}

//sign in page
exports.auth_signin_get = async (req, res) => {
  res.render("auth/signin.ejs")
}

//sign in function
exports.auth_signin_post = async (req, res) => {
  const userDatabase = await User.findOne({ username: req.body.username })

  //checks if username is in the database
  if (!userDatabase) {
    return res.send("Username or password is wrong.")
  }

  //Variable that compares inputted password to the password stored in database
  const correctPassword = bcrypt.compareSync(
    req.body.password,
    userDatabase.password
  )

  //checks if the password is correct. Returns error message if not.
  if (!correctPassword) {
    return res.send("Username or password is wrong.")
  }

  //session store user data
  req.session.user = {
    username: userDatabase.username,
    _id: userDatabase._id,
  }

  res.redirect("/")
}

//sign out function
exports.auth_signout_get = async (req, res) => {
  req.session.destroy()
  res.redirect("/auth/sign-in")
}
