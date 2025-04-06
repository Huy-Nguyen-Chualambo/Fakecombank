import React, { useState } from 'react';
import '../styles/Help.css';
import Header_dashboard from '../components/Header_dashboard'; // Import Header component

function Help() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('getting-started');
  const [faqStates, setFaqStates] = useState({
    'faq1': false,
    'faq2': false,
    'faq3': false,
    'faq4': false,
    'faq5': false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    const targetSection = document.getElementById(menuId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const toggleFaq = (faqId) => {
    setFaqStates((prevState) => ({
      ...prevState,
      [faqId]: !prevState[faqId],
    }));
  };

  return (
    <div>
      <Header_dashboard /> 

      <div className="container">
        <div className="page-title">Help Center</div>

        <div className="search-help">
          <h2>How can we help you today?</h2>
          <div className="search-box">
            <input type="text" placeholder="Search for help..." />
            <button>Search</button>
          </div>
        </div>

        <div className="help-container">
          <div className="help-menu">
            <h3>Help Categories</h3>
            <ul className="menu-list">
              <li>
                <a
                  href="#getting-started"
                  className={activeMenu === 'getting-started' ? 'active' : ''}
                  onClick={() => handleMenuClick('getting-started')}
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#account-management"
                  className={activeMenu === 'account-management' ? 'active' : ''}
                  onClick={() => handleMenuClick('account-management')}
                >
                  Account Management
                </a>
              </li>
              <li>
                <a
                  href="#transfers"
                  className={activeMenu === 'transfers' ? 'active' : ''}
                  onClick={() => handleMenuClick('transfers')}
                >
                  Money Transfers
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className={activeMenu === 'security' ? 'active' : ''}
                  onClick={() => handleMenuClick('security')}
                >
                  Security & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#cards"
                  className={activeMenu === 'cards' ? 'active' : ''}
                  onClick={() => handleMenuClick('cards')}
                >
                  Cards & Payments
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className={activeMenu === 'faqs' ? 'active' : ''}
                  onClick={() => handleMenuClick('faqs')}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeMenu === 'contact' ? 'active' : ''}
                  onClick={() => handleMenuClick('contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="help-content">
            <div id="getting-started" className="help-section">
              <h2>Getting Started with Fakecombank</h2>
              <p>Welcome to Fakecombank! Here's everything you need to know to get started with our services:</p>
              <p>Fakecombank provides a secure and convenient way to manage your finances online. With our platform, you can send and receive money, link your credit cards, and keep track of all your financial activities in one place.</p>
              <p>To get the most out of Fakecombank, we recommend:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>Completing your profile information</li>
                <li>Linking your bank account or credit card</li>
                <li>Setting up two-factor authentication for enhanced security</li>
                <li>Downloading our mobile app for on-the-go access</li>
              </ul>
            </div>

            <div id="account-management" className="help-section">
              <h2>Account Management</h2>
              <p>Learn how to manage your Fakecombank account efficiently:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>Profile settings and preferences</li>
                <li>Updating personal information</li>
                <li>Managing email and notifications</li>
                <li>Account verification steps</li>
                <li>Closing your account</li>
              </ul>
            </div>

            <div id="transfers" className="help-section">
              <h2>Money Transfers</h2>
              <p>Everything you need to know about sending and receiving money:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>How to send money to friends and family</li>
                <li>Requesting money from others</li>
                <li>Transfer limits and processing times</li>
                <li>International transfers</li>
                <li>Transfer fees and currency conversion</li>
              </ul>
            </div>

            <div id="security" className="help-section">
              <h2>Security & Privacy</h2>
              <p>Your security is our top priority. Learn about our security features:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>Two-factor authentication</li>
                <li>Secure login procedures</li>
                <li>Privacy settings</li>
                <li>Fraud prevention tips</li>
                <li>How to report suspicious activity</li>
              </ul>
            </div>

            <div id="cards" className="help-section">
              <h2>Cards & Payments</h2>
              <p>Information about linking and using cards with Fakecombank:</p>
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li>How to link credit and debit cards</li>
                <li>Managing your linked cards</li>
                <li>Making online payments</li>
                <li>Card security features</li>
                <li>Payment disputes and resolution</li>
              </ul>
            </div>

            <div id="faqs" className="help-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq('faq1')}>
                  How do I reset my password? <span>{faqStates['faq1'] ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${faqStates['faq1'] ? 'active' : ''}`}>
                  To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password. For security reasons, password reset links expire after 24 hours.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq('faq2')}>
                  How long do transfers take to process? <span>{faqStates['faq2'] ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${faqStates['faq2'] ? 'active' : ''}`}>
                  Transfers between Fakecombank accounts typically process instantly. Transfers to bank accounts usually take 1-3 business days, depending on your bank's processing times. International transfers may take 3-5 business days to complete.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq('faq3')}>
                  Are there any fees for using Fakecombank? <span>{faqStates['faq3'] ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${faqStates['faq3'] ? 'active' : ''}`}>
                  Basic Fakecombank accounts are free to use. There are no fees for sending money to friends and family using your Fakecombank balance or linked bank account. There may be fees for currency conversion, international transfers, or when using credit cards to send money. Please refer to our fee schedule for details.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq('faq4')}>
                  How do I verify my account? <span>{faqStates['faq4'] ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${faqStates['faq4'] ? 'active' : ''}`}>
                  To verify your account, go to Account Settings > Identity Verification. You'll need to provide a valid government-issued ID and proof of address. Verification typically takes 1-2 business days to process.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq('faq5')}>
                  What should I do if I notice an unauthorized transaction? <span>{faqStates['faq5'] ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${faqStates['faq5'] ? 'active' : ''}`}>
                  If you notice an unauthorized transaction, please report it immediately by going to Activity > Report a Problem, or by contacting our customer support team. For added security, change your password and enable two-factor authentication if you haven't already.
                </div>
              </div>
            </div>

            <div id="contact" className="help-section">
              <h2>Contact Us</h2>
              <p>Need more help? Our support team is here for you. Choose your preferred contact method below:</p>

              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">📞</div>
                  <h3>Phone Support</h3>
                  <p>Speak directly with our support team</p>
                  <p>Available 24/7</p>
                  <a href="tel:+18005551234" className="contact-button">Call Us</a>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">✉️</div>
                  <h3>Email Support</h3>
                  <p>Send us your questions</p>
                  <p>Response within 24 hours</p>
                  <a href="mailto:support@fakecombank.com" className="contact-button">Email Us</a>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">💬</div>
                  <h3>Live Chat</h3>
                  <p>Chat with our support team</p>
                  <p>Available 9am-9pm</p>
                  <a href="#" className="contact-button">Start Chat</a>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">🌐</div>
                  <h3>Community Forum</h3>
                  <p>Get help from other users</p>
                  <p>Browse FAQs and guides</p>
                  <a href="#" className="contact-button">Visit Forum</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="url-bar">https://www.fakecombank.com/help</div>
    </div>
  );
}

export default Help;