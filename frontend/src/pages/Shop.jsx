import { useEffect, useMemo, useState } from "react";
import ProductFilter from "../components/product/ProductFilter";
import ProductGrid from "../components/product/ProductGrid";
import Loader from "../components/common/Loader";
import { useCart } from "../hooks/useCart";
import { getProducts } from "../services/productService";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category).filter(Boolean))],
    [products]
  );
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  if (loading) return <Loader />;

  return (
    <main className="page">
      <h1>Shop</h1>
      <ProductFilter value={category} onChange={setCategory} categories={categories} />
      <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
    </main>
  );
};

export default Shop;
