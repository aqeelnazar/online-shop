import { useNavigate } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <main className="page cart-page">
      <section>
        <h1>Cart</h1>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item._id || item.product?._id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeFromCart}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </section>
      <CartSummary items={cartItems} onCheckout={() => navigate("/checkout")} />
    </main>
  );
};

export default Cart;
