import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-contact">
                    <h3>Контакты</h3>
                    <p>Адрес: ул. Примерная, 123</p>
                    <p>Телефон: +7 (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="footer-social">
                    <h3>Социальные сети</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
               <div className="footer-copy">
                  <p>&copy; 2024 Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;