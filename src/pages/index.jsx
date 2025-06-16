import productsData from "../data.json";
import "./index.css";

import ProductList from "../components/ProductList";
import CartDetail from "../components/CartDetail";
import Modal from "../components/Modal";
import { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { sortProductsByPrice } from "../utils/productsUtils";

function IndexPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState(productsData);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleSortProducts(order) {
    if (order === "all") {
      setProducts(productsData);
      return;
    }

    const sortProducts = sortProductsByPrice(products, order);

    setProducts(sortProducts);
  }

  return (
    <div>
      <main className="product-main-page">
        <ProductList
          title="Desserts"
          products={products}
          handleSortProducts={handleSortProducts}
        />
        <CartDetail handleOpenModal={handleOpenModal} />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderSummary handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}
export default IndexPage;
