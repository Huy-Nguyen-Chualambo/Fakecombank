import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Các cột footer */}
        <div className="footer-column">
          <h3>Về chúng tôi</h3>
          <ul>
            <li>
              <a href="./inApp/Home.html">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Lịch sử phát triển</a>
            </li>
            <li>
              <a href="#">Mạng lưới</a>
            </li>
            <li>
              <a href="#">Thông tin cổ đông</a>
            </li>
            <li>
              <a href="#">Cơ hội nghề nghiệp</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Dịch vụ</h3>
          <ul>
            <li>
              <a href="#">Tài khoản & Thẻ</a>
            </li>
            <li>
              <a href="#">Vay cá nhân</a>
            </li>
            <li>
              <a href="#">Tiền gửi tiết kiệm</a>
            </li>
            <li>
              <a href="#">Bảo hiểm</a>
            </li>
            <li>
              <a href="#">Đầu tư</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Hỗ trợ</h3>
          <ul>
            <li>
              <a href="#">Câu hỏi thường gặp</a>
            </li>
            <li>
              <a href="#">Hướng dẫn sử dụng</a>
            </li>
            <li>
              <a href="#">Biểu phí</a>
            </li>
            <li>
              <a href="#">Lãi suất</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Liên hệ</h3>
          <ul>
            <li>Hotline: 6677 1508</li>
            <li>Email: hotro@fakecombank.com</li>
            <li>Địa chỉ: Khu Tam Thái Tử, Quận 2.500v, Campuchia</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-social">
        <a href="#" className="social-icon">
          
        </a>
        <a href="#" className="social-icon">
          
        </a>
        <a href="#" className="social-icon">
          
        </a>
        <a href="#" className="social-icon">
          
        </a>
      </div>

      <div className="footer-links">
        <span>Điều khoản sử dụng</span>
        <span>Chính sách bảo mật</span>
        <span>Quy định giao dịch</span>
        <span>Sơ đồ website</span>
      </div>

      <p>© 2025 Fakecombank. Tất cả các quyền được bảo lưu.</p>
    </footer>
  );
}

export default Footer;