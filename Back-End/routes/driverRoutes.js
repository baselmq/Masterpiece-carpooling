const express = require("express");
const driverController = require("../controllers/driverController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// middleware
router.use(requireAuth);

// driver route
router
  .route("/")
  .get(driverController.getAllDrivers)
  .post(driverController.createDriver);

router.route("/me").get(driverController.getMeDriver);

router
  .route("/:id")
  .get(driverController.getDriver)
  .patch(driverController.updateDriver)
  .delete(driverController.deleteDriver);

module.exports = router;
