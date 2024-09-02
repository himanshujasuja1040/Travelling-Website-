import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center', fontFamily: 'Arial', fontSize: '1.5rem'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Home</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/search" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Search</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/flights" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Flights</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/trains" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Trains</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/hotels" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Hotels</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/itinerary" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Itinerary</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/profile" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Profile</Link></li>
          <li style={{marginRight: '20px', textShadow: '0 0 5px #fff'}}><Link to="/login" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Login</Link></li>
          <li style={{textShadow: '0 0 5px #fff'}}><Link to="/register" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Register</Link></li>
          <li style={{textShadow: '0 0 5px #fff'}}><Link to="/ApiInput" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', hover: {color: '#ccc'}}}>Api</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;