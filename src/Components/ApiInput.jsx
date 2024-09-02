import React, { useState, useEffect } from 'react';

const ApiInput = () => {
  const [origin, setOrigin] = useState('');
  const [data, setData] = useState(null);

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(origin);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (origin) {
      fetchData();
    }
  }, [origin]);

  return (
    <div>
      <input type="text" value={origin} onChange={handleOriginChange} placeholder="Enter API URL" />
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiInput;