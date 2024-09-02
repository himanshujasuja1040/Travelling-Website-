import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        // Handle login success
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      backgroundImage: 'linear-gradient(to bottom, #f7f7f7, #fff)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
        width: '400px',
        maxWidth: '90%',
        margin: '20px'
      }}>
        <h2 style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
          textAlign: 'center'
        }}>Login:</h2>
        <form onSubmit={handleLogin}>
          <label style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#666'
          }}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '18px',
            marginBottom: '20px'
          }} />
          <br />
          <label style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#666'
          }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '18px',
            marginBottom: '20px'
          }} />
          <br />
          <button type="submit" style={{
            padding: '15px 30px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px'
          }}>Login</button>
        </form>
        {error && <p style={{
          color: 'red',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '20px',
          textAlign: 'center'
        }}>{error}</p>}
        {isLoggedIn && <p style={{
          color: 'green',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '20px',
          textAlign: 'center'
        }}>Logged in successfully!</p>}
      </div>
    </div>
  );
};

export default Login;