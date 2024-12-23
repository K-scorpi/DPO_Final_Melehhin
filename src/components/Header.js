import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="header-logo">Название компании</div>
                <nav className="header-nav">
                    <a href="#tariffs">Тарифы</a>
                    <a href="#order">Заказать такси</a>
                    <a href="#about">О нас</a>
                    <a href="#registration">Регистрация</a>
                    <a href="#reviews">Отзывы</a>
                </nav>
                <div className="header-info">
                    <span>ежедневно с 10:00 до 22:00</span>
                    <span>+7 (000) 000 00 00</span>
                </div>
            </div>
        </header>
    );
}

export default Header;