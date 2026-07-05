import { Link } from "react-router-dom";
import Button from "../common/Button";

const ProductCard = ({ product, onAddToCart }) => (
  <article className="product-card">
    <Link to={`/products/${product._id}`}>
      <img src={product.image || "/placeholder-product.svg"} alt={product.name} />
      <h3>{product.name}</h3>
    </Link>
    <p>{product.category}</p>
    <strong>${product.price}</strong>
    <Button onClick={() => onAddToCart(product)}>Add to cart</Button>
  </article>
);

export default ProductCard;
