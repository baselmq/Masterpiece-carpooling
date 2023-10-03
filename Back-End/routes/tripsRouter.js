const express = require("express");
const tripController = require("../controllers/tripController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// middleware
router.use(requireAuth);

// trips route
router
  .route("/")
  .get(tripController.getAllTrips)
  .post(tripController.createTrip);

router.route("/search").get(tripController.searchTrips);
router
  .route("/:id")
  .get(tripController.getTrip)
  .patch(tripController.updateTrip)
  .delete(tripController.deleteTrip);

module.exports = router;
