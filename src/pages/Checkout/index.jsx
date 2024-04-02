import Main from "./index.styles";
import { useCartStore } from "../../store";

const Checkout = () => {
  const clearProducts = useCartStore((state) => state.clearProducts);
  clearProducts();

  return (
    <Main>
      <div>
        <h1>Checkout complete!</h1>
        <p>Thank you for shopping with us! You will receive an order conformation to you email shortly</p>
        <p>Order number: 123456</p>
        <p>Expected delivery: 2-3 days</p>
        <p>We hope to see you again soon !</p>
      </div>
    </Main>
  );
};
export default Checkout;
