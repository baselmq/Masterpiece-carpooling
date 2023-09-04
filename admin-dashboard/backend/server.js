const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// port
const PORT = process.env.PORT || 8080;

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log("Connect to db & listen to port", PORT);
    });
  });
