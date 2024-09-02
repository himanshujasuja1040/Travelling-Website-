import React, { useState, useEffect } from 'react';

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch('/api/itinerary', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const data = await response.json();
        setItinerary(data.itinerary);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItinerary();
  }, []);

  return (
    <div>
      <h2>Itinerary:</h2>
      {itinerary.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Itinerary;