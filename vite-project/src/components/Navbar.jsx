import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <h1>My Blog</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">sobre</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar