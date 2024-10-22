import React, { useState, useMemo } from 'react';

const Calculator = () => {
  const [count, setCount] = useState(0);

  const newNumber = useMemo(() => {
    console.log('Updating number...');
    
    return count;
    
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      
      <p style={{ marginTop: '20px' }}>My new number: {newNumber}</p>
    </div>
  );
};

export default Calculator;
