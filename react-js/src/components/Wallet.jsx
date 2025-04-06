import React, { useState } from 'react';
import '../styles/Wallet.css';
import Header_dashboard from './Header_dashboard'; // Import Header component

function Wallet() {
  const [activeTab, setActiveTab] = useState('payment-methods');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [autoPaymentsEnabled, setAutoPaymentsEnabled] = useState(true);
  const [priceAlertsEnabled, setPriceAlertsEnabled] = useState(false);
  const [cashbackEnabled, setCashbackEnabled] = useState(true);
  const [rewardNotificationsEnabled, setRewardNotificationsEnabled] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePaymentMethodClick = (name) => {
    alert('Adding ' + name);
  };

  const handleButtonClick = (action) => {
    alert(action + ' functionality would go here');
  };

  const handleToggleChange = (setting, value, setter) => {
    setter(value);
    alert(`${setting} ${value ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="wallet">
      <Header_dashboard/> 

      <div className="container">
        <div className="balance-card">
          <div className="balance-label">Total Balance</div>
          <div className="balance-amount">$0.00</div>
          <div style={{ opacity: 0.9 }}>Available</div>

          <div className="balance-actions">
            <button className="btn btn-white" onClick={() => handleButtonClick('Add Money')}>Add Money</button>
            <button className="btn btn-white" onClick={() => handleButtonClick('Transfer Funds')}>Transfer Funds</button>
          </div>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'payment-methods' ? 'active' : ''}`}
            data-tab="payment-methods"
            onClick={() => handleTabClick('payment-methods')}
          >
            Payment Methods
          </div>
          <div
            className={`tab ${activeTab === 'crypto' ? 'active' : ''}`}
            data-tab="crypto"
            onClick={() => handleTabClick('crypto')}
          >
            Crypto
          </div>
          <div
            className={`tab ${activeTab === 'rewards' ? 'active' : ''}`}
            data-tab="rewards"
            onClick={() => handleTabClick('rewards')}
          >
            Rewards
          </div>
        </div>

        {/* Payment Methods Tab */}
        <div className={`tab-content ${activeTab === 'payment-methods' ? 'active' : ''}`} id="payment-methods">
          <div className="card">
            <div className="section-title">Your payment methods</div>

            <div className="payment-methods">
              <div className="payment-method" onClick={() => handlePaymentMethodClick('Link a debit or credit card')}>
                <div className="payment-icon">💳</div>
                <div className="payment-details">
                  <div className="payment-name">Link a debit or credit card</div>
                  <div className="payment-info">Add a card to shop online or send money to friends</div>
                </div>
                <div className="payment-status">Add</div>
              </div>

              <div className="payment-method" onClick={() => handlePaymentMethodClick('Link a bank account')}>
                <div className="payment-icon">🏦</div>
                <div className="payment-details">
                  <div className="payment-name">Link a bank account</div>
                  <div className="payment-info">Transfer money in and out of your Fakecombank balance</div>
                </div>
                <div className="payment-status">Add</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="section-title">Automatic payments</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Automatic payments</div>
                <div style={{ color: '#666' }}>Allow merchants to automatically charge your Fakecombank account</div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={autoPaymentsEnabled}
                  onChange={(e) => handleToggleChange('Automatic payments', e.target.checked, setAutoPaymentsEnabled)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Crypto Tab */}
        <div className={`tab-content ${activeTab === 'crypto' ? 'active' : ''}`} id="crypto">
          <div className="card">
            <div className="section-title">Cryptocurrency</div>
            <p style={{ marginBottom: '20px' }}>Buy, sell, and hold crypto with Fakecombank</p>

            <div className="crypto-container">
              <div className="crypto-card">
                <div className="crypto-icon">₿</div>
                <div className="crypto-name">Bitcoin</div>
                <div className="crypto-balance">0.00000000 BTC</div>
                <div className="crypto-value">$0.00 USD</div>
              </div>

              <div className="crypto-card">
                <div className="crypto-icon">Ξ</div>
                <div className="crypto-name">Ethereum</div>
                <div className="crypto-balance">0.00000000 ETH</div>
                <div className="crypto-value">$0.00 USD</div>
              </div>

              <div className="crypto-card">
                <div className="crypto-icon">Ł</div>
                <div className="crypto-name">Litecoin</div>
                <div className="crypto-balance">0.00000000 LTC</div>
                <div className="crypto-value">$0.00 USD</div>
              </div>
            </div>

            <button className="btn" style={{ marginTop: '20px' }} onClick={() => handleButtonClick('Buy Crypto')}>Buy Crypto</button>
          </div>

          <div className="card">
            <div className="section-title">Crypto alerts</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Price alerts</div>
                <div style={{ color: '#666' }}>Get notified about significant price changes</div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={priceAlertsEnabled}
                  onChange={(e) => handleToggleChange('Price alerts', e.target.checked, setPriceAlertsEnabled)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Rewards Tab */}
        <div className={`tab-content ${activeTab === 'rewards' ? 'active' : ''}`} id="rewards">
          <div className="card">
            <div className="section-title">Your rewards</div>
            <p style={{ marginBottom: '20px' }}>Earn cashback and other rewards with Fakecombank</p>

            <div className="reward-card">
              <div className="reward-icon">🎁</div>
              <div className="reward-details">
                <div className="reward-title">No rewards yet</div>
                <div className="reward-description">Complete your first eligible purchase to start earning rewards</div>
              </div>
            </div>

            <div className="reward-card" style={{ marginTop: '15px' }}>
              <div className="reward-icon">💰</div>
              <div className="reward-details">
                <div className="reward-title">Refer a friend</div>
                <div className="reward-description">Get $10 when you refer a friend who completes a purchase of $25 or more</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="section-title">Reward preferences</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Cashback rewards</div>
                <div style={{ color: '#666' }}>Automatically apply cashback to your balance</div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={cashbackEnabled}
                  onChange={(e) => handleToggleChange('Cashback rewards', e.target.checked, setCashbackEnabled)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Reward notifications</div>
                <div style={{ color: '#666' }}>Get notified when you earn or can redeem rewards</div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={rewardNotificationsEnabled}
                  onChange={(e) => handleToggleChange('Reward notifications', e.target.checked, setRewardNotificationsEnabled)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="url-bar">https://www.fakecombank.com/wallet/</div>
    </div>
  );
}

export default Wallet;