import "./ProductCardButtons.css";
import { useCart } from "../hooks/useCart";

import IconIncrementQuantity from "../assets/icon-increment-quantity.svg";
import IconDecrementQuantity from "../assets/icon-decrement-quantity.svg";

function ProductCardButtons({ product }) {
  const { cart, dispatch } = useCart();
  const currentProduct = cart.items.filter((item) => item.id === product.id);
  const quantity =
    cart.items.length > 0
      ? currentProduct.length > 0
        ? currentProduct[0].quantity
        : 0
      : 0;

  return (
    <div className="product-card-buttons">
      <button
        className="btn-card-decrement-quantity"
        onClick={() => {
          if (quantity > 0) {
            dispatch({
              type: "DECREMENT_QUANTITY",
              payload: {
                ...product,
                quantity: quantity - 1
              }
            });
          }
          if (quantity === 1) {
            dispatch({
              type: "REMOVE_ITEM",
              payload: {
                ...product
              }
            });
          }
        }}
      >
        <img src={IconDecrementQuantity} alt="Icon decrement quantity item" />
      </button>
      <span>{quantity}</span>

      <button
        className="btn-card-increment-quantity"
        onClick={() =>
          dispatch({
            type: "INCREMENT_QUANTITY",
            payload: {
              ...product,
              quantity: quantity
            }
          })
        }
      >
        <img src={IconIncrementQuantity} alt="Icon icrement quantity item" />
      </button>
    </div>
  );
}

export default ProductCardButtons;
