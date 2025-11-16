const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")
const isSigned = require("../middleware/isSigned")
const upload = require("../middleware/upload")

router.get("/", userController.user_profile_get)
router.get("/edit", userController.user_edit_get)
router.post(
  "/edit",
  isSigned,
  upload.single("profileImage"),
  userController.user_edit_post
)

module.exports = router
