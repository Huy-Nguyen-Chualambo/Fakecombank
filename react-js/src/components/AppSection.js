import React from 'react';
import '../styles/AppSection.css';

function AppSection() {
  return (
    <section className="app-section">
      <div className="app-container">
        <div className="app-info">
          <h2>Tải ứng dụng Fakecombank</h2>
          <p>
            Trải nghiệm ngân hàng số tiện lợi ngay trên điện thoại của bạn. Quản lý
            tài khoản, thực hiện giao dịch và tiếp cận các dịch vụ ngân hàng mọi
            lúc, mọi nơi với ứng dụng Fakecombank.
          </p>
          <div className="app-buttons">
            <button className="app-button">Tải trên App Store</button>
            <button className="app-button">Tải trên Google Play</button>
          </div>
        </div>
        <div className="app-image">
          <img src="./pic/FAKECOMBANK.png" alt="Fakecombank App" />
        </div>
      </div>
    </section>
  );
}

export default AppSection;
