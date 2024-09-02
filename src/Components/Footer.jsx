import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center'}}>
      <p style={{marginBottom: '10px'}}>&copy; 2023 Vacation Planner</p>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        <li style={{display: 'inline', marginRight: '20px'}}>
          <a href="#" target="_blank" style={{textDecoration: 'none', color: '#337ab7'}}>Terms and Conditions</a>
        </li>
        <li style={{display: 'inline', marginRight: '20px'}}>
          <a href="#" target="_blank" style={{textDecoration: 'none', color: '#337ab7'}}>Privacy Policy</a>
        </li>
        <li style={{display: 'inline'}}>
          <a href="#" target="_blank" style={{textDecoration: 'none', color: '#337ab7'}}>Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}