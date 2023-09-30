const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

// ----------------- login route -----------------
router.post("/login", adminController.loginAdmin);

// ----------------- user route -----------------
router
  .route("/users")
  .get(adminController.getAllUsers)
  .post(adminController.createUser);

router
  .route("/users/:id")
  .get(adminController.getUser)
  .patch(adminController.updateUser)
  .delete(adminController.deleteUser);

module.exports = router;
