import React, { useState } from 'react';

const Addition = () => {
  
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [sum, setSum] = useState(null);

  
  const handleAddition = () => {
    const result = Number(firstNumber) + Number(secondNumber);
    setSum(result); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Addition Calculator</h2>
      <div>
        <input
          type="text"
          placeholder="First number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddition}>Add</button>
      </div>
      {sum !== null && (
        <h3 style={{ marginTop: '20px' }}>Result: {sum}</h3>
      )}
    </div>
  );
};



export default Addition;
