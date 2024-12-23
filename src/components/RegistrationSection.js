import React, { useState } from 'react';
import '../styles/registration.css';

function RegistrationSection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && name && phone && password) {
            setRegistrationSuccess(true);
            setEmail('');
            setName('');
            setPhone('');
            setPassword('');
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    return (
        <section className="registration-section" id="registration">
            <div className="container">
                <h2>Регистрация</h2>
                {registrationSuccess ? (
                    <div className="registration-success">
                        <p>Регистрация прошла успешно!</p>
                    </div>
                ) : (
                    <form className="registration-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                            type="email"
                            placeholder="* Почта"
                            value={email}
                            onChange={handleEmailChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                            type="text"
                            placeholder="* Имя"
                            value={name}
                            onChange={handleNameChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                            type="tel"
                            placeholder="* Телефон"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                            type="password"
                            placeholder="* Пароль"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                      </div>
                        <button type="submit" className="order-button">Зарегистрироваться</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default RegistrationSection;