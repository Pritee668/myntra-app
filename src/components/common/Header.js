import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">Myntra</h1>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to={'/social-look'} className="nav-link">Social Look</Link></li>
          <li className="nav-item"><Link to={'/social-challenges'} className="nav-link">Social Challenge</Link></li>
          <li className="nav-item"><Link to={'/style-feed'} className="nav-link">Style-Feed</Link></li>
        </ul>
      </nav>
    </header>
  );
}
