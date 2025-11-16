require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("./config/db")

// Middleware libraries
const session = require("express-session")
const morgan = require("morgan")
const passUserToView = require("./middleware/pass-user-to-view")
const isSigned = require("./middleware/isSigned")

const port = process.env.PORT || 3000

// Parse form data
app.use(express.urlencoded({ extended: false }))

// (Husain’s)
app.use(morgan("dev"))

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

// Make user accessible to all EJS views (Husain’s)
app.use(passUserToView)

// static files
app.use(express.static("public"))

// Root route
app.get("/", (req, res) => {
  res.render("index.ejs")
})

// ROUTES
const authRouter = require("./routes/auth") // Husain's auth routes
const profileRouter = require("./routes/user") // Dawood's profile routes
const categoriesRouter = require("./routes/categories") // categories routes

app.use("/auth", authRouter)
app.use("/profile", isSigned, profileRouter)
app.use("/categories", isSigned, categoriesRouter)

// Start server
app.listen(port, () => {
  console.log(`you are on port: ${port}`)
})
