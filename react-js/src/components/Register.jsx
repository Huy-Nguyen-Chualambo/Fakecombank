import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    window.location.href = '<Link to="/login">'; // Hoặc đường dẫn cụ thể như 'index.html'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp. Vui lòng thử lại.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
      return;
    }

    window.location.href = 'register-step2.html';
  };

  return (
    <div className="register-page">
      
      <Header />

      <main>
        <div className="register-container">
          <div className="register-header">
            <h1>Đăng ký tài khoản Fakecombank</h1>
            <p>Hoàn thành các bước sau để tạo tài khoản của bạn</p>
          </div>

          <div className="register-steps">
            <div className="step active">
              <div className="step-number">1</div>
              <div className="step-text">Thông tin cá nhân</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">Xác minh</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">Thông tin tài khoản</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-text">Hoàn thành</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullname">Họ và tên <span style={{ color: 'red' }}>*</span></label>
                <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Ngày sinh <span style={{ color: 'red' }}>*</span></label>
                <input type="date" id="dob" name="dob" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Giới tính <span style={{ color: 'red' }}>*</span></label>
                <select id="gender" name="gender" required>
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="id_number">Số CMND/CCCD <span style={{ color: 'red' }}>*</span></label>
                <input type="text" id="id_number" name="id_number" placeholder="Nhập số CMND/CCCD" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại <span style={{ color: 'red' }}>*</span></label>
              <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required />
              <p className="form-note">Số điện thoại này sẽ được sử dụng để đăng nhập và xác thực giao dịch</p>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
              <input type="email" id="email" name="email" placeholder="Nhập địa chỉ email" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Địa chỉ <span style={{ color: 'red' }}>*</span></label>
              <input type="text" id="address" name="address" placeholder="Nhập địa chỉ" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Mật khẩu <span style={{ color: 'red' }}>*</span></label>
                <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="form-note">Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt</p>
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Xác nhận mật khẩu <span style={{ color: 'red' }}>*</span></label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Nhập lại mật khẩu" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
            </div>

            <div className="terms-checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                Tôi đã đọc và đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a> của Fakecombank. Tôi đồng ý nhận thông tin ưu đãi và dịch vụ qua email và tin nhắn.
              </label>
            </div>

            <button type="submit" className="register-button">Tiếp tục</button>

            <div className="login-link">
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </div>
          </form>

          <div className="security-info">
            <h3>Bảo mật thông tin</h3>
            <p>Fakecombank cam kết bảo vệ thông tin cá nhân của bạn. Thông tin của bạn được mã hóa và bảo mật theo tiêu chuẩn ngân hàng. Không chia sẻ thông tin đăng nhập với bất kỳ ai và đảm bảo đăng xuất sau khi sử dụng.</p>
          </div>
        </div>
      </main>

      <Footer />
        
    </div>
  );
}

export default Register;