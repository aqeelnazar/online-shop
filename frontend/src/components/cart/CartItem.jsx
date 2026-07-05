const CartItem = ({ item, onQuantityChange, onRemove }) => (
  <article className="cart-item">
    <img src={item.image || item.product?.image || "/placeholder-product.svg"} alt={item.name || item.product?.name} />
    <div>
      <h3>{item.name || item.product?.name}</h3>
      <p>${item.price || item.product?.price}</p>
    </div>
    <input
      min="1"
      type="number"
      value={item.quantity}
      onChange={(event) => onQuantityChange(item, Number(event.target.value))}
    />
    <button type="button" onClick={() => onRemove(item)}>Remove</button>
  </article>
);

export default CartItem;
