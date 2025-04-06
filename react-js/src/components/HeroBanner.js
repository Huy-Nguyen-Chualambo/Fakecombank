import React from 'react';
import '../styles/HeroBanner.css'; 
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Ngân hàng số thông minh cho tương lai</h1>
        <p>Trải nghiệm dịch vụ ngân hàng tiên tiến với Fakecombank. Mọi thứ bạn cần, chỉ trong một ứng dụng.</p>
        <Link to="/login" className="cta-button">Đăng ký ngay</Link>
      </div>
    </section>
  );
}

export default HeroBanner;