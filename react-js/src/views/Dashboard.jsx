import React, { useState } from 'react';
import '../styles/Dashboard.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';
import '../components/Login';
import Header_dashboard from '../components/Header_dashboard'; // Import Header component

function PayPalDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = () => {
    // Xử lý logic đăng xuất (ví dụ: xóa token, clear session)
    navigate('/login'); // Điều hướng đến trang đăng nhập
  };

  return (
    <div className="paypal-dashboard">
      <Header_dashboard />

      <div className="container">
        <div className="left-section">
          <div className="card">
            <div className="credit-card-prompt">
              <div className="info-icon">i</div>
              <div>
                <div className="card-title">Link your credit card</div>
                <div className="card-text">Keep your financial info secure when buying online.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">PayPal balance</div>
              <div className="menu-dots">⋮</div>
            </div>
            <div className="balance-amount">$0.00</div>
            <div className="available-text">Available</div>
            <button className="transfer-btn">Transfer Funds</button>
          </div>

          <div className="card">
            <div className="section-title">Recent activity</div>
            <div className="activity-text">
              See when money comes in, and when it goes out. You'll find your
              recent PayPal activity here.
            </div>
            <a href="#" className="show-all">Show all</a>
          </div>
        </div>

        <div className="right-section">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Send again</div>
              <div className="menu-dots">⋮</div>
            </div>
            <div className="search-container">
              <div className="search-icon">🔍</div>
              <div>Search</div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Cards</div>
              <div className="menu-dots">⋮</div>
            </div>
            <div className="card-prompt">
              <div className="card-icon">💳</div>
              <div>
                <div>Shop and send payments more securely.</div>
                <div>Link your credit card now.</div>
              </div>
            </div>
            <a href="#" className="link-card">Link a card</a>
          </div>
        </div>
      </div>

      <div className="url-bar">https://www.paypal.com/myaccount/money/</div>
    </div>
  );
}

export default PayPalDashboard;
