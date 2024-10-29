import React, { useState } from 'react';
import axios from 'axios';

const UserDetailsFetcher = () => {
  const [userId, setUserId] = useState('');      
  const [userData, setUserData] = useState(null); 
  const [error, setError] = useState(null);       

  const fetchUserDetails = () => {   
    setUserData(null);
    setError(null);
    if (!userId) {
      setError('Please enter a valid user ID.');
      return;
    }

    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        setUserData(response.data);
        setError(null); 
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          setError('User not found. Please check the ID.');
        } else {
          setError('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fetch User Details</h2>
      <div>
        <input
          type="text"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} 
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button onClick={fetchUserDetails} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Fetch User
        </button>
      </div>

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Details:</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>City:</strong> {userData.address.city}</p>
        </div>
      )}

      {error && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsFetcher;
