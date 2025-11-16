const express = require("express")
const router = express.Router()
const categoriesController = require("../controllers/categories")
const isSigned = require("../middleware/isSigned")

// Show all categories
router.get("/", categoriesController.categories_index_get)

// New category form for signed in users and add owners
router.get("/new", isSigned, categoriesController.categories_new_get)

// Create category
router.post("/new", isSigned, categoriesController.categories_new_post)
module.exports = router
// about isSigned make sure to see server.js file
