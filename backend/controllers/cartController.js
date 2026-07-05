const Cart = require("../models/Cart");

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(cart || { user: req.user._id, items: [] });
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { items: req.body.items || [] },
      { new: true, upsert: true, runValidators: true }
    ).populate("items.product");

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndUpdate(
      { user: req.user._id },
      { items: [] },
      { new: true, upsert: true }
    );
    res.json({ message: "Cart cleared" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCart, updateCart, clearCart };
