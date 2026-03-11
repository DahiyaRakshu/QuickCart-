import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <ProductList cart={cart} setCart={setCart} />
      {isCartOpen && (
        <CartSidebar
          cart={cart}
          setCart={setCart}
          closeCart={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
}



export default App;