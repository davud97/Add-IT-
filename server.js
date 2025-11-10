//import libraries
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

//database
const mongoose = require("./config/db");

//Port var
const port = process.env.PORT ? process.env.PORT : "3000";

//middleware libraries (for auth)

//
//
//
//
//
//

// listening to port
app.listen(port, () => {
  console.log(`you are on port: ${port}`);
});
