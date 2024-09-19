import React, { useState } from 'react';

function UserForm() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    const value = Number(event.target.value);
    setAge(value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Age: ${age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange} 
          placeholder="Enter your name" 
        />
      </div>
      <div>
        <label>Age:</label>
        <input 
          type="number" 
          value={age} 
          onChange={handleAgeChange}
          min="0"
          placeholder="Enter your age"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UserForm;
