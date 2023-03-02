import React from 'react';
import { useState } from 'react';

export default function CounterClock() {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCount = () => {
    setCount(count - 1);
  };

  let zeroCount = () => {
    setCount(0)

  };

  return (
    <div>
      <p> {count} </p>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
      <button onClick={zeroCount}>Set to Zero</button>
    </div>
  );
}
