import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Myntra Social Lookbook</h1>
      <nav className="header-nav">
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
