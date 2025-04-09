import React from 'react';
import '../styles/News.css';
import NewsCard from './NewsCard';
import moneytransfer from '../assets/pics/Money-transfer.jpg';
import newcard from '../assets/pics/th.jpg'
import uudai_svien from '../assets/pics/uudai_svien.jpg';

function News() {
  const news = [
    {
      image: newcard,
      date: '14 tháng 3, 2025',
      title: 'Ra mắt thẻ tín dụng Platinum mới',
      description:
        'Fakecombank giới thiệu thẻ tín dụng Platinum với nhiều đặc quyền và ưu đãi hấp dẫn dành cho khách hàng ưu tiên.',
      link: '#',
    },
    {
      image: uudai_svien,
      date: '10 tháng 3, 2025',
      title: 'Ưu đãi đặc biệt cho sinh viên',
      description:
        'Chương trình tài khoản ưu đãi dành cho sinh viên với nhiều quyền lợi độc quyền và miễn phí dịch vụ ngân hàng.',
      link: '#',
    },
    {
      image: moneytransfer,
      date: '5 tháng 3, 2025',
      title: 'Triển khai công nghệ thanh toán mới',
      description:
        'Fakecombank áp dụng công nghệ thanh toán không tiếp xúc mới nhất, giúp giao dịch an toàn và nhanh chóng hơn.',
      link: '#',
    },
  ];

  return (
    <section className="news-section">
      <div className="section-title">
        <h2>Tin tức & Khuyến mãi</h2>
        <p>Cập nhật thông tin mới nhất về sản phẩm, dịch vụ và ưu đãi từ Fakecombank</p>
      </div>
      <div className="news-container">
        {news.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
}

export default News;
