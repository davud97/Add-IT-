//import libraries
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

//database
const mongoose = require("./config/db");

//Port
const port = process.env.PORT ? process.env.PORT : "3000";

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
