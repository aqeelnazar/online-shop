import { createContext, useMemo, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const persistCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    const nextItems = existingItem
      ? cartItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cartItems, { ...product, quantity: 1 }];

    persistCart(nextItems);
  };

  const updateQuantity = (item, quantity) => {
    const nextItems = cartItems.map((cartItem) =>
      cartItem._id === item._id ? { ...cartItem, quantity } : cartItem
    );
    persistCart(nextItems);
  };

  const removeFromCart = (item) => {
    persistCart(cartItems.filter((cartItem) => cartItem._id !== item._id));
  };

  const value = useMemo(
    () => ({
      cartItems,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
    }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
