import React, { useState } from 'react';
import '../styles/Activity.css';
import Header_dashboard from '../components/Header_dashboard'; // Import Header component

function Activity() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleFilterClick = () => {
    alert('Filter options would appear here');
  };

  const handleDateSelectClick = () => {
    alert('Date range selector would appear here');
  };

  const handleDownloadClick = () => {
    alert('Statement download options would appear here');
  };

  const handlePageClick = (pageNumber) => {
    alert(`Would navigate to page ${pageNumber}`);
  };

  const handlePageNavClick = (direction) => {
    alert(`Would navigate to ${direction === 'prev' ? 'previous' : 'next'} page`);
  };

  return (
    <div className="activity">
      
      <Header_dashboard />


      <div className="container">
        <div className="card">
          <div className="section-title">Transaction History</div>

          <div className="filter-bar">
            <div className="search-box">
              <div className="search-icon">🔍</div>
              <input type="text" className="search-input" placeholder="Search by name or transaction" />
            </div>

            <button className="filter-btn" onClick={handleFilterClick}>
              <span className="filter-icon">📊</span>
              <span>Filter</span>
            </button>

            <div className="date-select" onClick={handleDateSelectClick}>
              <span className="date-icon">📅</span>
              <span>Last 90 days</span>
            </div>
          </div>

          <div className="tab-container">
            <div
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              data-tab="all"
              onClick={() => handleTabClick('all')}
            >
              All
            </div>
            <div
              className={`tab ${activeTab === 'money-in' ? 'active' : ''}`}
              data-tab="money-in"
              onClick={() => handleTabClick('money-in')}
            >
              Money In
            </div>
            <div
              className={`tab ${activeTab === 'money-out' ? 'active' : ''}`}
              data-tab="money-out"
              onClick={() => handleTabClick('money-out')}
            >
              Money Out
            </div>
            <div
              className={`tab ${activeTab === 'pending' ? 'active' : ''}`}
              data-tab="pending"
              onClick={() => handleTabClick('pending')}
            >
              Pending
            </div>
            <div
              className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
              data-tab="completed"
              onClick={() => handleTabClick('completed')}
            >
              Completed
            </div>
          </div>

          {/* All Transactions Tab */}
          <div className={`tab-content ${activeTab === 'all' ? 'active' : ''}`} id="all">
            {/* Example transactions */}
            <div className="activity-item">
              <div className="activity-icon">💳</div>
              <div className="activity-details">
                <div className="activity-name">Added Debit Card</div>
                <div className="activity-date">March 30, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount">-</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🔄</div>
              <div className="activity-details">
                <div className="activity-name">Transfer to Bank</div>
                <div className="activity-date">March 25, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$50.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-details">
                <div className="activity-name">Payment from John Doe</div>
                <div className="activity-date">March 20, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$75.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-details">
                <div className="activity-name">Online Store Payment</div>
                <div className="activity-date">March 15, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$29.99</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">💰</div>
              <div className="activity-details">
                <div className="activity-name">Added funds from Bank</div>
                <div className="activity-date">March 10, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$100.00</div>
            </div>

            <div className="stmt-download">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="download-icon">📥</span>
                <span>Download statements for your records</span>
              </div>
              <button className="download-btn" onClick={handleDownloadClick}>Download</button>
            </div>

            <div className="pagination">
              <div className="page-nav" onClick={() => handlePageNavClick('prev')}>❮</div>
              <div className="page-item active">1</div>
              <div className="page-item" onClick={() => handlePageClick(2)}>2</div>
              <div className="page-item" onClick={() => handlePageClick(3)}>3</div>
              <div className="page-nav" onClick={() => handlePageNavClick('next')}>❯</div>
            </div>
          </div>

          {/* Money In Tab */}
          <div className={`tab-content ${activeTab === 'money-in' ? 'active' : ''}`} id="money-in">
            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-details">
                <div className="activity-name">Payment from John Doe</div>
                <div className="activity-date">March 20, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$75.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">💰</div>
              <div className="activity-details">
                <div className="activity-name">Added funds from Bank</div>
                <div className="activity-date">March 10, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$100.00</div>
            </div>
          </div>

          {/* Money Out Tab */}
          <div className={`tab-content ${activeTab === 'money-out' ? 'active' : ''}`} id="money-out">
            <div className="activity-item">
              <div className="activity-icon">🔄</div>
              <div className="activity-details">
                <div className="activity-name">Transfer to Bank</div>
                <div className="activity-date">March 25, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$50.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-details">
                <div className="activity-name">Online Store Payment</div>
                <div className="activity-date">March 15, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$29.99</div>
            </div>
          </div>

          {/* Pending Tab */}
          <div className={`tab-content ${activeTab === 'pending' ? 'active' : ''}`} id="pending">
            <div className="empty-state">
              <div className="empty-icon">⏳</div>
              <div className="empty-title">No pending transactions</div>
              <div className="empty-description">When you have pending transactions, they'll appear here</div>
            </div>
          </div>

          {/* Completed Tab */}
          <div className={`tab-content ${activeTab === 'completed' ? 'active' : ''}`} id="completed">
            <div className="activity-item">
              <div className="activity-icon">💳</div>
              <div className="activity-details">
                <div className="activity-name">Added Debit Card</div>
                <div className="activity-date">March 30, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount">-</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🔄</div>
              <div className="activity-details">
                <div className="activity-name">Transfer to Bank</div>
                <div className="activity-date">March 25, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$50.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-details">
                <div className="activity-name">Payment from John Doe</div>
                <div className="activity-date">March 20, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$75.00</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-details">
                <div className="activity-name">Online Store Payment</div>
                <div className="activity-date">March 15, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount negative">-$29.99</div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">💰</div>
              <div className="activity-details">
                <div className="activity-name">Added funds from Bank</div>
                <div className="activity-date">March 10, 2025</div>
                <div className="activity-status completed">Completed</div>
              </div>
              <div className="activity-amount positive">+$100.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="url-bar">https://www.fakecombank.com/activity/</div>
    </div>
  );
}

export default Activity;