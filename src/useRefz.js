import React, { useState, useRef, useEffect } from 'react';

const RenderCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
  count.current=count.current+1;  
});

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
      <p>Number of renders: {count.current}</p> {}
    </div>
  );
};

export default RenderCounter;
