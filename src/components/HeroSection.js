import React from 'react';
import OrderForm from './OrderForm'; // Импорт компонента
import '../styles.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-left">
                    <h1>Всем клиентам скидки 20%</h1>
                    <p>При предварительном заказе такси класса "Бизнес"</p>
                    <p>Включено 4 мин и 2 км</p>
                    <p>от 149 р.</p>
                </div>
                <div className="hero-right">
                    <OrderForm/>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;