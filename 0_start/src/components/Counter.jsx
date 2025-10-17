import React, { useState } from "react";

const Counter = () => {
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="w-fit h-fit  text-4xl flex justify-center items-center p-35 bg-black text-white">
        {count}
      </div>
      <button
        className="mx-4  p-4 bg-blue-300 rounded-lg "
        onClick={() => {
          increase();
        }}
      >
        Increment
      </button>
      <button
        className="mx-4  p-4 bg-blue-300 rounded-lg "
        onClick={() => {
          decrease();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
