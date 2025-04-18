import React, { useState } from 'react';
import './Counter.css';

export default function Counter({ initialCount = 0, title }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <h2>{title}</h2>
      <button onClick={handleDecrement} className='counter-button'>
        -
      </button>
      <p className='counter-count'>{count}</p>
      <button onClick={handleIncrement} className='counter-button'>
        +
      </button>
    </div>
  );
}
