import "./CartSummary.css";

import IconRemoveItem from "../assets/icon-remove-item.svg";
import IconCarbonNeutral from "../assets/icon-carbon-neutral.svg";
import { useCart } from "../hooks/useCart";

function CartSummary({ handleOpenModal }) {
  const { cart, dispatch } = useCart();

  return (
    <div className="cart-summary">
      <ul className="summary-list">
        {cart.items.map((item) => (
          <li key={item.id} className="summary-item">
            <div>
              <h4 className="summary-item-name">{item.name}</h4>
              <span className="summary-item-quantity">{item.quantity}x</span>
              <span className="summary-item-price">@ ${item.formatPrice}</span>
              <span className="summary-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <button
              className="cart-summary-item-remove"
              onClick={() => {
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: {
                    ...item,
                  },
                });
              }}
            >
              <img src={IconRemoveItem} alt="Icon to remove item of cart" />
            </button>
          </li>
        ))}
      </ul>
      <div className="summary-total">
        <span>Order Total</span>
        <span className="summary-total-price">
          ${cart.totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="cart-summary-delivery">
        <img
          className="cart-summary-delivery-image"
          src={IconCarbonNeutral}
          alt="Icon to remove item of cart"
        />
        <span className="cart-summary-delivery-text">
          This is a <span className="text-bold">carbon-neutral</span> delivery
        </span>
      </div>
      <button
        className="summary-btn-checkout"
        onClick={() => handleOpenModal()}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default CartSummary;
