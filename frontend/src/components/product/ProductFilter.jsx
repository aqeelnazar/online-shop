const ProductFilter = ({ value, onChange, categories = [] }) => (
  <label className="field">
    <span>Category</span>
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">All products</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
);

export default ProductFilter;
