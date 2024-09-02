import React, { useState, useEffect } from 'react';
const url = 'https://hotel-api6.p.rapidapi.com/free/london';
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const response = await fetch('/api/hotels', {
  //         method: 'GET',
  //         headers: { 'Content-Type': 'application/json' },
  //         credentials: 'include',
  //       });
  //       const data = await response.json();
  //       setHotels(data.hotels);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchHotels();
  // }, []);

 const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '25e7b1b981msha88aebc460ab28ep1402e2jsn9adf3a52e1d6',
    'x-rapidapi-host': 'hotel-api6.p.rapidapi.com',
    Authorization: 'JWTeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U'
  }
};

useEffect(() => {
  const fetchHotels = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setHotels(result);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  fetchHotels();
}, []);

  return (
    <div className="luxury-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f7f7f7',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 className="luxury-header" style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#333',
      }}>Hotels:</h2>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="luxury-hotel" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '1rem',
        }}>
          <h3 className="luxury-hotel-name" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#333',
          }}>{hotel.name}</h3>
          <p className="luxury-hotel-description" style={{
            fontSize: '1rem',
            color: '#666',
          }}>{hotel.description}</p>
        </div>
      ))}
      {error && <p style={{
        color: 'red',
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: '1rem',
      }} className="luxury-error">{error}</p>}
    </div>
  );
};

export default Hotels;