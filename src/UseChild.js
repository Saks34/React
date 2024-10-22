import React from 'react';

const Child = ({ incrementCount, decrementCount }) => {
  console.log("Child rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={incrementCount}>Increment from Child</button>
      <button onClick={decrementCount}>Decrement from Child</button>
    </div>
  );
};

export default Child;
