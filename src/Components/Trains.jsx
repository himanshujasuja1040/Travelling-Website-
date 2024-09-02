import React, { useState, useEffect } from 'react';

const Trains = () => {
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    from: '',
    to: '',
    departureDate: '',
  });

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await fetch('/api/trains', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const data = await response.json();
        setTrains(data.trains);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTrains();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/trains/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchQuery),
        credentials: 'include',
      });
      const data = await response.json();
      setTrains(data.trains);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery((prevQuery) => ({ ...prevQuery, [e.target.name]: e.target.value }));
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Trains:</h2>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ fontSize: '18px', marginBottom: '5px' }}>From:</label>
        <input type="text" name="from" value={searchQuery.from} onChange={handleInputChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
        <br />
        <label style={{ fontSize: '18px', marginBottom: '5px' }}>To:</label>
        <input type="text" name="to" value={searchQuery.to} onChange={handleInputChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
        <br />
        <label style={{ fontSize: '18px', marginBottom: '5px' }}>Departure Date:</label>
        <input type="date" name="departureDate" value={searchQuery.departureDate} onChange={handleInputChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
        <br />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer' }}>Search Trains</button>
      </form>
      {trains.map((train) => (
        <div key={train.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', margin: '20px 0' }}>
          <h3 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{train.trainNumber} - {train.trainName}</h3>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>From: {train.from} To: {train.to}</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Departure Date: {train.departureDate}</p>
        </div>
      ))}
      {error && <p style={{ color: 'red', fontSize: '18px', marginBottom: '10px' }}>{error}</p>}
    </div>
  );
};

export default Trains;