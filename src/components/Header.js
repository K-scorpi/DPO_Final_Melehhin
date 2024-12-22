import React from 'react';
import '../styles.css';


function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="header-logo">Taxi Company</div>
                <div className="header-info">
                    <span>ежедневно с 10:00 до 22:00</span>
                    <span>+7 (000) 000 00 00</span>
                </div>
            </div>
        </header>
    );
}


export default Header;