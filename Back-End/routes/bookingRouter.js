const express = require("express");
const bookingController = require("../controllers/bookingController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// middleware
router.use(requireAuth);

// booking route
router
  .route("/")
  .get(bookingController.getAllBooking)
  .post(bookingController.createBooking);

router.route("/me").get(bookingController.getMeBooking);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
