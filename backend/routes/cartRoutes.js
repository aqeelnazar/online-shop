const express = require("express");
const { clearCart, getCart, updateCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getCart).put(protect, updateCart).delete(protect, clearCart);

module.exports = router;
