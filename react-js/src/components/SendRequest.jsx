import React, { useState } from 'react';
import '../styles/SendRequest.css';
import Header_dashboard from '../components/Header_dashboard'; // Import Header component

function SendRequest() {
  const [activeTab, setActiveTab] = useState('send');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactClick = (name) => {
    if (name !== 'Add New') {
      alert('Selected contact: ' + name);
    } else {
      alert('Add new contact functionality would go here');
    }
  };

  const handleButtonClick = (action) => {
    alert(action + ' functionality would go here');
  };

  return (
    <div className="send-request">
      <Header_dashboard />
    

      <div className="container">
        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'send' ? 'active' : ''}`}
            data-tab="send"
            onClick={() => handleTabClick('send')}
          >
            Send
          </div>
          <div
            className={`tab ${activeTab === 'request' ? 'active' : ''}`}
            data-tab="request"
            onClick={() => handleTabClick('request')}
          >
            Request
          </div>
          <div
            className={`tab ${activeTab === 'contacts' ? 'active' : ''}`}
            data-tab="contacts"
            onClick={() => handleTabClick('contacts')}
          >
            Contacts
          </div>
        </div>

        {/* Send Money Tab */}
        <div className={`tab-content ${activeTab === 'send' ? 'active' : ''}`} id="send">
          <div className="card">
            <div className="section-title">Send money to anyone</div>
            <div className="form-group">
              <label className="form-label">Email or mobile number</label>
              <input type="text" className="form-input" placeholder="name@email.com or phone number" />
            </div>

            <div className="form-group">
              <label className="form-label">Amount</label>
              <div className="amount-input">
                <div className="currency">$</div>
                <input type="number" placeholder="0.00" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Add a note (optional)</label>
              <textarea className="note-area" placeholder="What's this payment for?"></textarea>
            </div>

            <button className="btn" onClick={() => handleButtonClick('Send Now')}>
              Send Now
            </button>
          </div>

          <div className="card">
            <div className="section-title">Send again</div>
            <div className="recent-contacts">
              <div className="contact" onClick={() => handleContactClick('John Doe')}>
                <div className="contact-avatar">JD</div>
                <div>John Doe</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Jane Smith')}>
                <div className="contact-avatar">JS</div>
                <div>Jane Smith</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Tom Wilson')}>
                <div className="contact-avatar">TW</div>
                <div>Tom Wilson</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Add New')}>
                <div className="contact-avatar">+</div>
                <div>Add New</div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Money Tab */}
        <div className={`tab-content ${activeTab === 'request' ? 'active' : ''}`} id="request">
          <div className="card">
            <div className="section-title">Request money</div>
            <div className="form-group">
              <label className="form-label">Email or mobile number</label>
              <input type="text" className="form-input" placeholder="name@email.com or phone number" />
            </div>

            <div className="form-group">
              <label className="form-label">Amount</label>
              <div className="amount-input">
                <div className="currency">$</div>
                <input type="number" placeholder="0.00" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">What's this for?</label>
              <textarea className="note-area" placeholder="Add a note about this request"></textarea>
            </div>

            <button className="btn" onClick={() => handleButtonClick('Request Now')}>
              Request Now
            </button>
          </div>

          <div className="card">
            <div className="section-title">Request with a QR code</div>
            <div className="qr-section">
              <div className="qr-code">QR Code</div>
              <p>Have people scan this code to send you money instantly</p>
              <button className="btn btn-secondary" onClick={() => handleButtonClick('Share QR Code')}>
                Share QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Contacts Tab */}
        <div className={`tab-content ${activeTab === 'contacts' ? 'active' : ''}`} id="contacts">
          <div className="card">
            <div className="section-title">Your contacts</div>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Search contacts" />
            </div>

            <div className="recent-contacts">
              <div className="contact" onClick={() => handleContactClick('John Doe')}>
                <div className="contact-avatar">JD</div>
                <div>John Doe</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Jane Smith')}>
                <div className="contact-avatar">JS</div>
                <div>Jane Smith</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Tom Wilson')}>
                <div className="contact-avatar">TW</div>
                <div>Tom Wilson</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Alice Miller')}>
                <div className="contact-avatar">AM</div>
                <div>Alice Miller</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Robert Jones')}>
                <div className="contact-avatar">RJ</div>
                <div>Robert Jones</div>
              </div>
              <div className="contact" onClick={() => handleContactClick('Add New')}>
                <div className="contact-avatar">+</div>
                <div>Add New</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="url-bar">https://www.fakecombank.com/send-request/</div>
    </div>
  );
}

export default SendRequest;