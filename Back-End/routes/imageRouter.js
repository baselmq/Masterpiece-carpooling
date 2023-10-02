const express = require("express");
const multer = require("multer");
const imageController = require("../controllers/imageController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// middleware
router.use(requireAuth);
// Define the route for uploading an image
router.post("/", upload.single("image"), imageController.uploadImage);
router.get("/", imageController.getPhotosByUser);

module.exports = router;
