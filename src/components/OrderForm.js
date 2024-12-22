import React, { useState } from 'react';
import '../styles.css';

function OrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && phone && isAgreed) {
          alert('Заказ успешно создан!');
      }
    };


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };


    const handleAgreementChange = () => {
        setIsAgreed(!isAgreed)
    }

    const isFormValid = name && phone && isAgreed;

    return (
        <div className="order-form">
            <h2>Заказать такси</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="* Имя"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="tel"
                    placeholder="* Телефон"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                      checked={isAgreed}
                        onChange={handleAgreementChange}
                    />
                    <span>Я согласен на обработку моих <a href="/privacy">персональных данных</a></span>
                </label>
                <button type="submit" className="order-button" disabled={!isFormValid}>Отправить заявку</button>
            </form>
        </div>
    );
}

export default OrderForm;