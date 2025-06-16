import "./ProductList.css";

import ProductCard from "./ProductCard";
import SortProducts from "./SortProducts";

function ProductList({ title, products, handleSortProducts }) {
  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1 className="product-list-title">{title}</h1>
        <SortProducts handleSortProducts={handleSortProducts} />
      </div>
      <ul className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
