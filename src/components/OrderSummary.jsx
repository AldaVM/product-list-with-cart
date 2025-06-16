import "./OrderSummary.css";
import { useCart } from "../hooks/useCart";

import IconOrderConfirmed from "../assets/icon-order-confirmed.svg";

export default function OrderSummary({ handleCloseModal }) {
  const { cart, dispatch } = useCart();

  return (
    <div className="order-summary">
      <img
        src={IconOrderConfirmed}
        alt="Order Confirmation"
        className="order-summary-image"
      />
      <h2 className="order-summary-title">Order Confirmed</h2>
      <p className="order-summary-message">We hope you enjoy your food</p>
      <ul className="summary-list order-summary-list">
        {cart.items.map((item) => (
          <li key={item.id} className="summary-item order-summary-item">
            <div className="order-summary-item-details">
              <img
                src={item.image.thumbnail}
                alt={item.name}
                className="order-summary-item-image"
              />
              <div className="order-summary-item-info">
                <h4 className="summary-item-name">{item.name}</h4>
                <div>
                  <span className="summary-item-quantity">
                    {item.quantity}x
                  </span>
                  <span className="summary-item-price">
                    @ ${item.formatPrice}
                  </span>
                </div>
              </div>
            </div>
            <span className="summary-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
        <li className="summary-total">
          <span>Order Total</span>
          <span className="summary-total-price">
            ${cart.totalPrice.toFixed(2)}
          </span>
        </li>
      </ul>
      <button
        className="summary-btn-checkout"
        onClick={() => {
          dispatch({
            type: "CLEAR_CART",
            payload: {},
          });
          handleCloseModal();
        }}
      >
        Start New Order
      </button>
    </div>
  );
}
