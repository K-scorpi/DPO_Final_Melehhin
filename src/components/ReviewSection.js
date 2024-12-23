import React, { useState, useEffect } from 'react';
import '../styles/reviews.css';

const reviewsData = [
    {
        id: 1,
        author: 'Иван Иванов',
        text: 'Отличное такси, всегда приезжают вовремя.',
        position: 'Менеджер',
    },
    {
        id: 2,
        author: 'Елена Петрова',
        text: 'Быстро и комфортно, рекомендую!',
        position: 'Бухгалтер',
    },
    {
        id: 3,
        author: 'Алексей Смирнов',
        text: 'Удобное приложение и вежливые водители.',
        position: 'Инженер',
    },
    {
        id: 4,
        author: 'Анна Козлова',
        text: 'Хорошее качество обслуживания',
        position: 'Дизайнер',
    },
  {
      id: 5,
      author: 'Петр Сидоров',
      text: 'Всегда доволен поездкой, рекомендую!',
      position: 'Программист',
  },
  {
    id: 6,
    author: 'Ольга Морозова',
    text: 'Быстрая подача, вежливые водители',
      position: 'Менеджер',
  },
    {
        id: 7,
        author: 'Сергей Кузнецов',
        text: 'Отличный сервис, приемлемые цены',
        position: 'Маркетолог',
    },
    {
        id: 8,
        author: 'Наталья Васильева',
        text: 'Всегда езжу с этим такси, лучшее',
        position: 'Учитель',
    },
];

function ReviewsSection() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="reviews-section" id="reviews">
            <div className="container reviews-container">
                <h2>Отзывы клиентов</h2>
                <div className="review-cards">
                  {reviewsData.map((review, index) => (
                     <div key={review.id}
                         className={`review-card ${index === currentReviewIndex ? 'active' : ''}`}
                         >
                       <p className="review-text">{review.text}</p>
                       <p className="review-author">{review.author}</p>
                       <p className="review-position">{review.position}</p>
                     </div>
                 ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;