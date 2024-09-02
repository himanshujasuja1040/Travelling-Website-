
import React, { useState, useEffect } from 'react';
import flightsData from '../Assets/Flights.json';

const Flight = () => {
  const [data, setData] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState(null);

  const obtainAccessToken = async () => {
    try {
      const apiKey = 'R3bfuJTWBByfKiigQGoc16c7rXMq1STo';
      const apiSecret = 'n7QSScQiI5MjT91h';
      const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const body = `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`;

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Error obtaining access token: ${response.status} ${response.statusText}`);
      }

      const jsonData = await response.json();
      setAccessToken(jsonData.access_token);
      return jsonData;
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleFetch = async () => {
    try {
      const tokenResponse = await obtainAccessToken();
      if (!tokenResponse) {
        throw new Error('Failed to obtain access token');
      }
      const accessToken = tokenResponse.access_token;
      const url = `https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=5`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }

      const responseBody = await response.text();
      let jsonData;

      try {
        jsonData = JSON.parse(responseBody);
      } catch (error) {
        console.error(`Error parsing response as JSON: ${error}`);
        throw new Error(`Error parsing response as JSON: ${error}`);
      }

      setData(jsonData);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  useEffect(() => {
    if (!data && !error) {
      setData(flightsData);
    }
  }, [data, error]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        value={origin}
        onChange={handleOriginChange}
        placeholder="Enter origin"
        style={{ padding: '10px', margin: '10px', width: '50%' }}
      />
      <input
        type="text"
        value={destination}
        onChange={handleDestinationChange}
        placeholder="Enter destination"
        style={{ padding: '10px', margin: '10px', width: '50%' }}
      />
      <input
        type="date"
        value={departureDate}
        onChange={handleDepartureDateChange}
        placeholder="Enter departure date"
        style={{ padding: '10px', margin: '10px', width: '50%' }}
      />
      <input
        type="date"
        value={returnDate}
        onChange={handleReturnDateChange}
        placeholder="Enter return date"
        style={{ padding: '10px', margin: '10px', width: '50%' }}
      />
      <button
        onClick={handleFetch}
        style={{
          padding: '10px',
          margin: '10px',
          width: '50%',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Click
      </button>
      {data ? (
        <pre style={{ width: '50%', overflow: 'auto' }}>
          <pre
            style={{
              width: '50%',
              overflow: 'auto',
              backgroundColor: '#f0f0f0',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          > {JSON.stringify(data, null, 2)
            
            }
          </pre>
        </pre>
      ) : (
        <p style={{ color: 'gray' }}>No data fetched yet.</p>
      )}
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : null}
    </div>
  );
};

export default Flight;
