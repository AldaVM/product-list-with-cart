import "./ProductList.css";

import ProductCard from "./ProductCard";

function ProductList({ title, products }) {
  return (
    <div className="product-list-container">
      <h1 className="product-list-title">{title}</h1>
      <ul className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
