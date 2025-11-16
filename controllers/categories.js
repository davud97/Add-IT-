const Category = require("../models/category")

// GET show new category form **************
exports.categories_new_get = (req, res) => {
  res.render("categories/new.ejs")
}

// POST create new category ***************
exports.categories_new_post = async (req, res) => {
  await Category.create({
    type: req.body.type,
    description: req.body.description,
  })

  res.redirect("/categories")
}

// GET list all categories ****************
exports.categories_index_get = async (req, res) => {
  const categories = await Category.find()
  res.render("categories/index.ejs", { categories })
}
