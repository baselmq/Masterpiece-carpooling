const driverController = require("../controllers/driverController");

const router = express.Router();

// ----------------- driver route -----------------
router.route("/").get(driverController.getAllDrivers);

router
  .route("/:id")
  .get(driverController.getDriver)
  .patch(driverController.getDriver);
