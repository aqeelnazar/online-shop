import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import Loader from "../components/common/Loader";
import { useCart } from "../hooks/useCart";
import { getProduct } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <main className="page">Product not found.</main>;

  return (
    <main className="page product-details">
      <img src={product.image || "/placeholder-product.svg"} alt={product.name} />
      <section>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </section>
    </main>
  );
};

export default ProductDetails;
