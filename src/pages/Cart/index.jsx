import { useCartStore } from "../../store";
import { FaCartShopping } from "react-icons/fa6";
import Counter from "../../components/Counter";
import { CartContainer, CartItem, CartTotal, HeaderContainer } from "./index.styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../components/Button/index.styles";
import RenderPageTitle from "../../components/PageTitle";

const Cart = () => {
  const products = useCartStore((state) => state.products);
  const [totalPrice, setTotalPrice] = useState(0);

  RenderPageTitle({ title: "E-com | Cart" });
  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      products.forEach((product) => {
        sum += product.price * product.count;
      });
      setTotalPrice(sum);
    };
    calculateTotalPrice();
  }, [products]);

  return (
    <main>
      <HeaderContainer>
        <h1>Shopping Cart</h1>
        <FaCartShopping />
      </HeaderContainer>
      <CartContainer>
        {(products.length > 0 &&
          products.map((product) => {
            const { id, title, imageUrl, price, count } = product;
            let productPrice = price * count;
            const handleCountChange = (newCount) => {
              if (newCount === 0) {
                useCartStore.getState().removeProduct(id);
              } else {
                let newPrice = price * newCount;
                return newPrice;
              }
            };

            return (
              <CartItem key={id}>
                <div>
                  <img src={imageUrl} alt={title} />
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>Nok: {productPrice.toFixed(2)}</p>
                  <p>Quantity: {count}</p>
                  <Counter CartItem={product} onCountChange={handleCountChange}></Counter>
                </div>
              </CartItem>
            );
          })) || <h3>No products in cart</h3>}

        <CartTotal hasProducts={products.length > 0}>
          {products.length > 0 ? (
            <div>
              <h3>Total: {totalPrice.toFixed(2)} Kr</h3>
              <Link to="/checkout">
                <StyledButton>CheckOut</StyledButton>
              </Link>
            </div>
          ) : (
            <Link to="/home">
              <StyledButton> Home</StyledButton>
            </Link>
          )}
        </CartTotal>
      </CartContainer>
    </main>
  );
};

export default Cart;
