import products from "../data.json";
import "./index.css";

import ProductList from "../components/ProductList";
import CartDetail from "../components/CartDetail";
import Modal from "../components/Modal";
import { useState } from "react";
import OrderSummary from "../components/OrderSummary";

function IndexPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <main className="product-main-page">
        <ProductList title="Desserts" products={products} />
        <CartDetail handleOpenModal={handleOpenModal} />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderSummary handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}
export default IndexPage;
