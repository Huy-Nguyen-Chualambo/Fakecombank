import React from 'react';
import '../styles/Products.css';
import ProductCard from './ProductCard';

function Products() {
  const products = [
    {
      image: './pic/th.jpg',
      title: 'Tài khoản số',
      description:
        'Mở tài khoản trực tuyến chỉ trong 5 phút, không cần giấy tờ phức tạp, miễn phí giao dịch nội bộ.',
      link: '#',
    },
    {
      image: './pic/1569653930-Credit_Card.png',
      title: 'Thẻ tín dụng',
      description:
        'Thẻ tín dụng với nhiều ưu đãi hấp dẫn, tích lũy điểm thưởng và hoàn tiền lên đến 10% mọi giao dịch.',
      link: '#',
    },
    {
      image: './pic/personal-loan.jpg',
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