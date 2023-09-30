const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

require("dotenv").config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

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
