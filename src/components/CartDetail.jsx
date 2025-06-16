import "./CartDetail.css";

import IllustrationEmptyCart from "../assets/illustration-empty-cart.svg";
import { useCart } from "../hooks/useCart";
import CartSummary from "./CartSummary";

function CartEmpty() {
  return (
    <div className="cart-empty">
      <div className="cart-empty-image">
        <img src={IllustrationEmptyCart} alt="Cart Image" />
      </div>
      <p className="cart-empty-message">Your added items will appear here</p>
    </div>
  );
}

function CartDetail({ handleOpenModal }) {
  const { cart } = useCart();

  return (
    <div className="cart-detail">
      <h2 className="cart-detail-title">{`Your Cart (${cart.totalItems})`}</h2>
      {cart.totalItems === 0 ? (
        <CartEmpty />
      ) : (
        <CartSummary handleOpenModal={handleOpenModal} />
      )}
    </div>
  );
}

export default CartDetail;
