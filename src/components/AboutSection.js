import React from 'react';
import '../styles/about.css';
import person2 from '../assets/person2.jpg';
import OrderForm from './OrderForm';

function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <div className="about-left">
                    <h2>АКЦИЯ! СКИДКИ <br/>НА ТАРИФ "КОМФОРТ"</h2>
                    <p>Только в этом месяце скидки до 20%</p>
                </div>
                <div className="about-right">
                     <OrderForm/>
                </div>
                <img src={person2} alt="Девушка с телефоном" className="about-image" />

            </div>
        </section>
    );
}

export default AboutSection;