import React from 'react';

export default function Search() {
  return (
    <div className="search-container" style={{backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', width: '80%', margin: '0 auto'}}>
      <h1 style={{color: '#333', fontSize: '24px', fontWeight: 'bold'}}>Search for Flights, Hotels, and Activities</h1>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" placeholder="Destination" style={{width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc'}} />
        <input type="date" placeholder="Departure Date" style={{width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc'}} />
        <input type="date" placeholder="Return Date" style={{width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc'}} />
        <button style={{width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer'}}>Search</button>
      </form>
      <section className="search-results" style={{marginTop: '20px'}}>
        <h2 style={{color: '#333', fontSize: '20px', fontWeight: 'bold'}}>Search Results</h2>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <li style={{marginBottom: '20px'}}>
            <img src="https://picsum.photos/200/300" alt="Result 1" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
            <h3 style={{color: '#333', fontSize: '18px', fontWeight: 'bold', margin: '10px 0'}}>Result 1</h3>
            <p style={{color: '#666', fontSize: '14px', margin: '10px 0'}}>Short description of result 1</p>
          </li>
          <li style={{marginBottom: '20px'}}>
            <img src="https://picsum.photos/200/301" alt="Result 2" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
            <h3 style={{color: '#333', fontSize: '18px', fontWeight: 'bold', margin: '10px 0'}}>Result 2</h3>
            <p style={{color: '#666', fontSize: '14px', margin: '10px 0'}}>Short description of result 2</p>
          </li>
          <li style={{marginBottom: '20px'}}>
            <img src="https://picsum.photos/200/302" alt="Result 3" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
            <h3 style={{color: '#333', fontSize: '18px', fontWeight: 'bold', margin: '10px 0'}}>Result 3</h3>
            <p style={{color: '#666', fontSize: '14px', margin: '10px 0'}}>Short description of result 3</p>
          </li>
        </ul>
      </section>
    </div>
  );
}