const router = require("express").Router()
const authControl = require("../controllers/auth")

//routes
router.get("/sign-up", authControl.auth_signup_get)
router.post("/sign-up", authControl.auth_signup_post)
router.get("/sign-in", authControl.auth_signin_get)
router.post("/sign-in", authControl.auth_signin_post)
router.get("/sign-out", authControl.auth_signout_get)

//exporting the router
module.exports = router
