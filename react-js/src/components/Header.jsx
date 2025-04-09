// Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Đảm bảo đường dẫn đúng
import fakecombankLogo from '../assets/pics/FAKECOMBANK_preview_rev_1.png'; // Đảm bảo đường dẫn đúng
import '../views/Home.js';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleLogoClick = () => {
    navigate('/'); // Điều hướng về trang chủ
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="app-header-logo" onClick={handleLogoClick}>
        <img
          src={fakecombankLogo}
          alt="Fakecombank logo"
          className="app-header-logo-img"
          style={{ width: '40px', height: '40px' }}
        />
        <span className="app-header-logo-text">Fakecombank</span>
      </div>
      <button className="app-header-menu-toggle" onClick={toggleMobileNav}>
        ☰
      </button>
      <nav className="app-header-desktop-nav">
        <div className="app-header-dropdown">
          <span className="app-header-nav-item">Về chúng tôi ▼</span>
          <div className="app-header-dropdown-menu">
            <Link to="#">Ngân hàng số</Link>
            <Link to="#">Dịch vụ thẻ</Link>
            <Link to="#">Tiền gửi</Link>
            <Link to="#">Cho vay</Link>
            <Link to="#">Chuyển tiền, thanh toán</Link>
            <Link to="#">Bảo hiểm</Link>
            <Link to="#">Tiền gửi</Link>
            <Link to="#">Hỗ trợ</Link>
          </div>
        </div>
        <div className="app-header-dropdown">
          <span className="app-header-nav-item">Khách hàng ▼</span>
          <div className="app-header-dropdown-menu">
            <Link to="#">Cá nhân</Link>
            <Link to="#">Doanh nghiệp</Link>
            <Link to="#">Nhà đầu tư</Link>
          </div>
        </div>
        <button className="app-header-login-btn" onClick={handleLoginClick}>Đăng nhập</button>
      </nav>

      {/* Mobile navigation menu */}
      <div className={`app-header-mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
        <div className="app-header-dropdown">
          <span className="app-header-nav-item">Về chúng tôi ▼</span>
          <div className="app-header-dropdown-menu">
            <Link to="#">Ngân hàng số</Link>
            <Link to="#">Dịch vụ thẻ</Link>
            <Link to="#">Tiền gửi</Link>
            <Link to="#">Cho vay</Link>
            <Link to="#">Chuyển tiền, thanh toán</Link>
            <Link to="#">Bảo hiểm</Link>
            <Link to="#">Tiền gửi</Link>
            <Link to="#">Hỗ trợ</Link>
          </div>
        </div>
        <div className="app-header-dropdown">
          <span className="app-header-nav-item">Khách hàng ▼</span>
          <div className="app-header-dropdown-menu">
            <Link to="#">Cá nhân</Link>
            <Link to="#">Doanh nghiệp</Link>
            <Link to="#">Nhà đầu tư</Link>
          </div>
        </div>
        <button className="app-header-login-btn" onClick={handleLoginClick}>Đăng nhập</button>
      </div>
    </header>
  );
};

export default Header;