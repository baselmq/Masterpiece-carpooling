const express = require("express");
const userController = require("../controllers/userController");
const bookingController = require("../controllers/bookingController");
const driverController = require("../controllers/driverController");
const tripController = require("../controllers/tripController");

const router = express.Router();

// ----------------- login route -----------------
router.post("/login", userController.loginUser);

// ----------------- signup route -----------------
router.post("/register", userController.signupUser);

// ----------------- forgot password route -----------------
router.post("/forgot-password", userController.forgotPassword);

// ----------------- reset password route -----------------
router.put("/reset-password/:resetToken", userController.resetPassword);

// ----------------- driver route -----------------
router
  .route("/driver")
  .get(driverController.getAllDrivers)
  .post(driverController.createDriver);

router
  .route("/driver/:id")
  .get(driverController.getDriver)
  .patch(driverController.updateDriver);

// ----------------- booking route -----------------
router
  .route("/booking")
  .get(bookingController.getAllBooking)
  .post(bookingController.createBooking);

router
  .route("/booking/:id")
  .get(bookingController.getBooking)
  .delete(bookingController.deleteBooking);
//   .patch(bookingController.updateBooking)

// ----------------- trips route -----------------
router
  .route("/trips")
  .get(tripController.getAllTrips)
  .post(tripController.createTrip);

router
  .route("/trips/:id")
  .get(tripController.getTrip)
  .patch(tripController.updateTrip)
  .delete(tripController.deleteTrip);

module.exports = router;
