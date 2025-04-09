import React from 'react';
import '../styles/Products.css';
import ProductCard from './ProductCard';
import platinumCardImage from '../assets/pics/platinum-card.jpg';
import personalLoanImage from '../assets/pics/1569653930-Credit_Card.png';
import savingsAccountImage from '../assets/pics/personal-loan.jpg';

function Products() {
  const products = [
    {
      image: 
      platinumCardImage,
      title: 'Tài khoản số',
      description:
        'Mở tài khoản trực tuyến chỉ trong 5 phút, không cần giấy tờ phức tạp, miễn phí giao dịch nội bộ.',
      link: '#',
    },
    {
      image: personalLoanImage,
      title: 'Thẻ tín dụng',
      description:
        'Thẻ tín dụng với nhiều ưu đãi hấp dẫn, tích lũy điểm thưởng và hoàn tiền lên đến 10% mọi giao dịch.',
      link: '#',
    },
    {
      image: savingsAccountImage,
      title: 'Vay cá nhân',
      description:
        'Giải pháp tài chính linh hoạt với lãi suất cạnh tranh, thủ tục đơn giản và phê duyệt nhanh chóng.',
      link: '#',
    },
  ];

  return (
    <section className="products-section">
      <div className="section-title">
        <h2>Dịch vụ ngân hàng của chúng tôi</h2>
        <p>
          Khám phá các sản phẩm và dịch vụ tài chính đa dạng, được thiết kế riêng
          cho nhu cầu của bạn
        </p>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;