const express = require("express");
const { getProfile, getUsers, updateProfile } = require("../controllers/userController");
const { admin, protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/profile").get(protect, getProfile).put(protect, updateProfile);
router.get("/", protect, admin, getUsers);

module.exports = router;
