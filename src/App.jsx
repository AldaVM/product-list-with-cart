import { CartProvider } from "./context/CartContext";
import IndexPage from "./pages";

function App() {
  return (
    <>
      <CartProvider>
        <IndexPage />
      </CartProvider>
    </>
  );
}

export default App;
