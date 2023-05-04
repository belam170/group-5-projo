import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [nava, setNava] = useState(false);

  function openButton() {
    setNava(!nava);
  }

  return (
    <div className='bar'>
      <button onClick={openButton}><i className="fa-solid fa-bars"></i></button>
      {nava &&
        <div className='container'>
          <nav>
            <ul>
              <li><Link to="/beef">beef</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      }
    </div>
  );
}
