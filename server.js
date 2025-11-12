//import libraries
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()

//database
const mongoose = require("./config/db")

//Port var
const port = process.env.PORT ? process.env.PORT : "3000"

//middleware libraries (for auth)
const isSigned = require("./middleware/isSigned")
const morgan = require("morgan")
const session = require("express-session")
const passUserToView = require("./middleware/pass-user-to-view")
//using middleware
app.use(express.urlencoded())
app.use(morgan("dev"))

//configuring the session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passUserToView)

//routing route...
app.get("/", async (req, res) => {
  res.render("index.ejs")
})

//requiring routes
const authRouter = require("./routes/auth")

//using the routes
app.use("/auth", authRouter)

// listening to port
app.listen(port, () => {
  console.log(`you are on port: ${port}`)
})
