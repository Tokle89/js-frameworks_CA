/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartStore } from "../../store";

const Counter = ({ CartItem, onCountChange }) => {
  const setProductCount = useCartStore((state) => state.setProductCount);
  const [count, setCount] = useState(CartItem.Count || 1);
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
    <div>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
