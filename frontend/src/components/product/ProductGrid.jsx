import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [], onAddToCart }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductGrid;
