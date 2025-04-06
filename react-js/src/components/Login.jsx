import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Header from './Header';


function Login() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    window.location.href = './views/Home'; // Hoặc đường dẫn cụ thể như 'index.html'
  };

  return (
    <div>
      <Header />

      <main>
        <div className="login-container">
          <div className="login-header">
            <h1>Đăng Nhập</h1>
            <p>Vui lòng đăng nhập để sử dụng dịch vụ Fakecombank</p>
          </div>

          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" required />
            </div>

            <div className="remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>

            <Link to="/Dashboard"> <button type="submit" className="login-button">ĐĂNG NHẬP</button></Link>

            <div className="login-footer">
              <a href="#">Quên mật khẩu?</a>
            </div>

            <div className="register-link">
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </div>
          </form>

          <div className="security-info">
            <h3>Thông tin bảo mật</h3>
            <p>Fakecombank không bao giờ gửi email hoặc tin nhắn yêu cầu bạn xác nhận thông tin tài khoản. Vui lòng không chia sẻ mật khẩu, mã OTP hoặc thông tin cá nhân với bất kỳ ai.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <span>Trợ giúp</span>
          <span>Liên hệ</span>
          <span>Phí</span>
          <span>Bảo mật</span>
          <span>Điều kiện</span>
          <span>Mua sắm</span>
        </div>
        <div className="copyright">© Copyright 2025</div>
      </footer>
    </div>
  );
}

export default Login;