/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartStore } from "../../store";
import CounterContainer from "./index.styles";

const Counter = ({ CartItem, onCountChange }) => {
  const setProductCount = useCartStore((state) => state.setProductCount);
  const [count, setCount] = useState(CartItem.count);
  let plusCount = 1;
  let minusCount = 1;
  const handlePlus = () => {
    const newCount = count + plusCount;
    setCount(newCount);
    onCountChange(newCount);
  };
  const handleMinus = () => {
    const newCount = count - minusCount;
    setCount(newCount);
    onCountChange(newCount);
  };
  useEffect(() => {
    setProductCount(CartItem.id, count);
  }, [count, CartItem.id, setProductCount]);
  return (
    <CounterContainer>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </CounterContainer>
  );
};

export default Counter;
