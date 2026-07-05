import Button from "../common/Button";

const CartSummary = ({ items = [], onCheckout }) => {
  const total = items.reduce((sum, item) => {
    const price = item.price || item.product?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <p>{items.length} items</p>
      <strong>${total.toFixed(2)}</strong>
      <Button onClick={onCheckout} disabled={!items.length}>Checkout</Button>
    </aside>
  );
};

export default CartSummary;
