const express = require("express");
const {
  createOrder,
  getMyOrders,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { admin, protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createOrder).get(protect, admin, getOrders);
router.get("/mine", protect, getMyOrders);
router.patch("/:id/status", protect, admin, updateOrderStatus);

module.exports = router;
