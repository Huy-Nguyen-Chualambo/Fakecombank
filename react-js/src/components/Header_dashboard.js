import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header_dashboard.css'; // Tạo file Header.css
import logo from '../assets/pics/FAKECOMBANK_preview_rev_1.png'; // Import logo

function Header({ handleLogout, isMobileMenuOpen, toggleMobileMenu }) {

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Fakecombank logo" />
        <span>Fakecombank</span>
      </div>

      <nav className="desktop-nav1">
        <Link to="/Dashboard" className="nav-item1">Home</Link>
        <Link to="/send-request" className="nav-item1">Send and Request</Link>
        <Link to="/wallet" className="nav-item1">Wallet</Link>
        <Link to="/activity" className="nav-item1">Activity</Link>
        <Link to="/help" className="nav-item1">Help</Link>
      </nav>

      <div className="nav-right">
        <div style={{ fontSize: '18px' }}>🔔</div>
        <div style={{ fontSize: '18px' }}>⚙️</div>
        <Link to="/login">
          <button className="logout-button" onClick={handleLogout}>LOG OUT</button>
        </Link>
      </div>

      <button className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>☰</button>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/Dashboard" className="nav-item1">Home</Link>
        <Link to="/send-request" className="nav-item1">Send and Request</Link>
        <Link to="/wallet" className="nav-item1">Wallet</Link>
        <Link to="/activity" className="nav-item1">Activity</Link>
        <Link to="/help" className="nav-item1">Help</Link>
        <Link to="/login">
          <button className="logout-button" onClick={handleLogout}>LOG OUT</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;