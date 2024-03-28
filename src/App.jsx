import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
);
const CheckOut = () => (
  <div>
    <h1>Checkout</h1>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<Details />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
