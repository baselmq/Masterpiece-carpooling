const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const bookingRouter = require("./routes/bookingRouter");
const driverRoutes = require("./routes/driverRoutes");
const tripsRouter = require("./routes/tripsRouter");
const adminRoutes = require("./routes/adminRoutes");
const imageRoutes = require("./routes/imageRouter");

require("dotenv").config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

//Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/booking", bookingRouter);
app.use("/api/v1/driver", driverRoutes);
app.use("/api/v1/trips", tripsRouter);
app.use("/api/v1/upload", imageRoutes);

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
