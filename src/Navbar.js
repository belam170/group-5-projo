import React, { useState } from 'react'
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      }
    </div>
  );
}
