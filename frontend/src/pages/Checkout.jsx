const Checkout = () => (
  <main className="page">
    <h1>Checkout</h1>
    <form className="form">
      <input placeholder="Shipping address" />
      <input placeholder="City" />
      <input placeholder="Postal code" />
      <input placeholder="Country" />
      <button type="submit">Place order</button>
    </form>
  </main>
);

export default Checkout;
