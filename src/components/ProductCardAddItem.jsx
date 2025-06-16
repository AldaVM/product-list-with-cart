import "./ProductCardAddItem.css";

import { useCart } from "../hooks/useCart";
import IconAddToCart from "../assets/icon-add-to-cart.svg";

function ProductCardAddItem({ product }) {
  const { dispatch } = useCart();

  return (
    <button
      className="btn-card-add-item"
      onClick={() =>
        dispatch({
          type: "ADD_ITEM",
          payload: {
            ...product,
            quantity: 1
          }
        })
      }
    >
      <img src={IconAddToCart} alt="Icon added item to cart" />
      Add to Cart
    </button>
  );
}

export default ProductCardAddItem;
