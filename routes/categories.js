const express = require("express")
const router = express.Router()

const categoryCtrl = require("../controllers/categories")

router.get("/", categoryCtrl.category_index_get)

router.get("/new", categoryCtrl.category_create_get)

router.post("/", categoryCtrl.category_create_post)

module.exports = router
