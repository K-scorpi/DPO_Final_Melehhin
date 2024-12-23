import React from 'react';
import '../styles/tariff.css';

import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';

function TariffCard({ title, description, price, carImage }) {
    const handleOrderClick = () => {
        alert(`Заказ тарифа "${title}" успешно создан!`);
    };

    return (
        <div className="tariff-card">
            <img src={carImage} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>от {price}</p>
            <button className="order-button" onClick={handleOrderClick}>Заказать</button>
        </div>
    );
}

function TariffSection() {
    return (
        <section className="tariff-section" id="tariffs">
            <div className="container tariff-container">
                <TariffCard
                    title="Эконом"
                    description="включено 5 мин и 2 км Hyundai Solaris Renault Logan и др."
                    price="180 р."
                    carImage={car1}
                />
                <TariffCard
                    title="Комфорт"
                    description="включено 5 мин и 2 км Ford Focus Chevrolet Cruze и др."
                    price="349 р."
                    carImage={car2}
                />
                <TariffCard
                    title="Бизнес"
                    description="включено 5 мин и 2 км Toyota Camry Skoda Superb и др."
                    price="349 р."
                    carImage={car3}
                />
            </div>
        </section>
    );
}

export default TariffSection;