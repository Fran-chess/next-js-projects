"use client";
import { useState } from "react";


interface Props {
    value?: number;
}

const CartCounter = ({value} : Props) => {
  const [count, setCount] = useState(value ?? 0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span className="text-3xl font-bold underline">{count}</span>
      <div
        className="flex
        "
      >
        <button
          onClick={increment}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -
        </button>
      </div>
    </>
  );
};

export default CartCounter;
