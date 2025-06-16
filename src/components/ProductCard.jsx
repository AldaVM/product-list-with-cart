import { useCart } from "../hooks/useCart";
import "./ProductCard.css";

import ProductCardAddItem from "./ProductCardAddItem";
import ProductCardButtons from "./ProductCardButtons";

function ProductCard({ name, category, image, id, formatPrice, price }) {
  const { cart } = useCart();

  const isProductInCart = cart.items.some((item) => item.id === id);
  return (
    <div className={`product-card ${isProductInCart ? "is-product-card-selected" : ""}`}>
      <div className="product-image-container">
        <img src={image.desktop} alt={name} className="product-image" />
      </div>
      <div className="product-card-buttons-container">
        {isProductInCart ? (
          <ProductCardButtons product={{ name, category, image, price, id, formatPrice }} />
        ) : (
          <ProductCardAddItem product={{ name, category, image, price, id, formatPrice }} />
        )}
      </div>
      <span className="product-card-category">{category}</span>
      <h3 className="product-card-name">{name}</h3>
      <span className="product-card-price">
        ${formatPrice}
      </span>
    </div>
  );
}
export default ProductCard;
