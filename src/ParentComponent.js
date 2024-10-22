import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

const ParentComponent = () => {
  const [globalTheme, setGlobalTheme] = useState('light'); // Global theme state

  // Toggle the global theme
  const toggleGlobalTheme = () => {
    setGlobalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <h2>Parent Component Section</h2>
      <button onClick={toggleGlobalTheme}>Toggle Global Theme</button>
      
      <ChildOne globalTheme={globalTheme} />
      <ChildTwo globalTheme={globalTheme} />
      <ChildThree globalTheme={globalTheme} />
    </div>
  );
};

export default ParentComponent;
