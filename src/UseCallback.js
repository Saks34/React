import React, { useState, useCallback } from 'react';


const Parent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
   
  const decrementCount = useCallback(() => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
     
    </div>
  );
};

export default Parent;
