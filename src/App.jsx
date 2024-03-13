import { Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
);
const Cart = () => (
  <div>
    <h1>Cart</h1>
  </div>
);
const Product = () => {
  let params = useParams();
  return (
    <div>
      <h1>Product {params.id}</h1>
    </div>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
