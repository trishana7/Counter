import React, { useState } from "react";

function Counter() {
  // Set the initial count state to 0
  const [count, setCount] = useState(0);

  // to increase the count
  const handleIncrement = () => {
    setCount(increase => increase + 1);
  };

  // to decrease the count
  const handleDecrement = () => {
    setCount(decrease => decrease - 1);
  };

  return (
    <div>
      <div>
        <h1>Counter App</h1>
        <h3>{count}</h3>
      </div>
        <button className="btn-in" onClick={handleIncrement}>Increment</button>
        <button className="btn-dec" onClick={handleDecrement}>Decrement</button>
        <button className="btn-re" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;