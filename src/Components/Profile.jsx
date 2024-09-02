import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const data = await response.json();
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProfileData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email }),
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        // Handle profile update success
      } else {
        setError(data.error);
      }
    } catch (error) {
        setError(error.message);
    }
  };

  return (
    <div>
      <h2>Profile:</h2>
      <form onSubmit={handleUpdateProfile}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Update Profile</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Profile;