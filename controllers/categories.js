const Category = require("../models/category")

// GET here runs to show all the available categories from DB
exports.category_index_get = async function (req, res) {
  const categories = await Category.find()
  res.render("categories/index.ejs", {
    categories: categories,
  })
}

// this GET is to show new category
exports.category_create_get = (req, res) => {
  res.render("categories/new.ejs")
}

// and this POST is hen the user submits the form, take the data they typed and save it in mongoDB
exports.category_create_post = async (req, res) => {
  await Category.create(req.body)
  res.redirect("/categories")
}
