import React from 'react';
import '../styles/Features.css';
import FeatureItem from './FeatureItem';

function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'An toàn & Bảo mật',
      description:
        'Bảo mật đa lớp với xác thực sinh trắc học và mã hóa tiên tiến cho mọi giao dịch.',
    },
    {
      icon: '⚡',
      title: 'Giao dịch nhanh chóng',
      description:
        'Chuyển tiền, thanh toán được xử lý ngay lập tức, 24/7 không giới hạn thời gian.',
    },
    {
      icon: '💼',
      title: 'Quản lý tài chính',
      description:
        'Công cụ theo dõi chi tiêu thông minh giúp bạn kiểm soát và tối ưu tài chính cá nhân.',
    },
    {
      icon: '🎁',
      title: 'Ưu đãi hấp dẫn',
      description:
        'Nhận ưu đãi độc quyền và khuyến mãi đặc biệt từ các đối tác của chúng tôi.',
    },
  ];

  return (
    <section className="features-section">
      <div className="section-title">
        <h2>Tại sao chọn Fakecombank?</h2>
        <p>Chúng tôi mang đến trải nghiệm ngân hàng hiện đại, an toàn và thuận tiện</p>
      </div>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;