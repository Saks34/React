import React, { useState, useRef} from 'react';

const ColorChangeInput = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); 

  const changeColor = () => {

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = randomColor;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        type="text"
        ref={inputRef} 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={changeColor}
        style={{
          marginLeft: '10px',
          padding: '10px 15px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChangeInput;
