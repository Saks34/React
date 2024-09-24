import React, { useState, useEffect } from 'react';

const RenderCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prevCount => prevCount + 1);
  }, [inputValue]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>Input value: {inputValue}</p>
      <p>Number of renders: {renderCount}</p>
    </div>
  );
};

export default RenderCounter;
