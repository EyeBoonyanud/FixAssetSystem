import React, { useState } from 'react';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>ค่าปัจจุบัน: {counter}</p>
      <button onClick={handleIncrement}>บวก 1</button>
    </div>
  );
};

export default CounterComponent;
