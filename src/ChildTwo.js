import React, { useState } from 'react';

const ChildTwo = ({ globalTheme }) => {
  const [localTheme, setLocalTheme] = useState(null); // Local theme state

  // Toggle the local theme (if localTheme is null, use globalTheme)
  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Use the local theme if it's set, otherwise fallback to the global theme
  const theme = localTheme !== null ? localTheme : globalTheme;

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '10px',
        border: '1px solid',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h2>Child Two</h2>
      <p>The theme in Child Two is: <strong>{theme}</strong></p>
      <button onClick={toggleLocalTheme}>Toggle Local Theme for Child Two</button>
    </div>
  );
};

export default ChildTwo;
