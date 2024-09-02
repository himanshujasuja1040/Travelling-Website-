import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        const response = await fetch('https://api.example.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (data.success) {
          // Handle registration success
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0', marginLeft: '20%' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', width: '60%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register:</h2>
        <form onSubmit={handleRegister}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', height: '40px', marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }} />
          <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', height: '40px', marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }} />
          <label style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', height: '40px', marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }} />
          <label style={{ display: 'block', marginBottom: '10px' }}>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '100%', height: '40px', marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ width: '100%', height: '40px', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;