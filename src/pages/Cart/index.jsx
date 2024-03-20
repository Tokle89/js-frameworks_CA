import { useCartStore } from "../../store";
import { FaCartShopping } from "react-icons/fa6";
import Counter from "../../components/Counter";

const Cart = () => {
  const products = useCartStore((state) => state.getProducts());
  return (
    <main>
      <div>
        <h1>Shopping Cart</h1>
        <FaCartShopping />
      </div>
      <div>
        {(products.length > 0 &&
          products.map((product) => {
            const { id, title, imageUrl, price, count } = product;
            let productPrice = price * count;
            const handleCountChange = (newCount) => {
              console.log("Count changed", newCount);
              if (newCount === 0) {
                useCartStore.getState().removeProduct(id);
              } else {
                let newPrice = price * newCount;
                return newPrice;
              }
            };

            return (
              <div key={id}>
                <div>
                  <img src={imageUrl} alt={title} />
                </div>
                <h2>{title}</h2>
                <p>Nok: {productPrice}</p>
                <p>Quantity: {count}</p>
                <Counter CartItem={product} onCountChange={handleCountChange}></Counter>
              </div>
            );
          })) || <p>No products in cart</p>}
      </div>
    </main>
  );
};

export default Cart;
