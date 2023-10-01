const express = require("express");
const userController = require("../controllers/userController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// ----------------- login route -----------------
router.post("/login", userController.loginUser);

// ----------------- signup route -----------------
router.post("/register", userController.signupUser);

// ----------------- forgot password route -----------------
router.post("/forgot-password", userController.forgotPassword);

// ----------------- reset password route -----------------
router.put("/reset-password/:resetToken", userController.resetPassword);

router.use(requireAuth);
// router.patch('/updateMyPassword', authController.updatePassword);
router.get("/me", userController.getMe);
// router.patch(
//   '/updateMe',
//   userController.uploadUserPhoto,
//   userController.resizeUserPhoto,
//   userController.updateMe
// );
// router.delete("/deleteMe", userController.deleteMe);

module.exports = router;
