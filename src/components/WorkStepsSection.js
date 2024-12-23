import React from 'react';
import '../styles/work-steps.css';

function WorkStepsSection() {
    return (
        <section className="work-steps-section" >
            <div className="container work-steps-container">
                <h2>Как мы работаем</h2>
                <div className="work-steps">
                    <div className="work-step">
                        <span className="step-icon">24</span>
                        <p className="step-title">КРУГОЛОСУТОЧНАЯ ПОДДЕРЖКА</p>
                        <p className="step-text">Мы работаем круглосуточно и с удовольствием.</p>
                    </div>
                    <div className="work-step">
                        <span className="step-icon">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.59 10.98C15.59 11.88 14.86 12.61 13.97 12.61C13.08 12.61 12.35 11.88 12.35 10.98C12.35 10.08 13.08 9.35 13.97 9.35C14.86 9.35 15.59 10.08 15.59 10.98ZM6.28 10.98C6.28 11.88 5.55 12.61 4.66 12.61C3.77 12.61 3.04 11.88 3.04 10.98C3.04 10.08 3.77 9.35 4.66 9.35C5.55 9.35 6.28 10.08 6.28 10.98ZM19.7 10.98C19.7 11.88 18.97 12.61 18.08 12.61C17.19 12.61 16.46 11.88 16.46 10.98C16.46 10.08 17.19 9.35 18.08 9.35C18.97 9.35 19.7 10.08 19.7 10.98Z" fill="#0166FF"/>
                              <path d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21ZM12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23Z" fill="#0166FF"/>
                           </svg>
                        </span>
                        <p className="step-title">НИЖНИЕ ЦЕНЫ</p>
                        <p className="step-text">Мы не гонимся за прибылью. Мы просто делаем своё дело.</p>
                    </div>
                    <div className="work-step">
                      <span className="step-icon">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12.5C13.01 12.5 13.85 11.98 14.33 11.23L20.24 3.42C20.61 2.9 20.41 2.22 19.89 1.85C19.37 1.48 18.69 1.68 18.32 2.2L12.41 10.01C11.93 10.75 11.06 11.25 10 11.25C9.17 11.25 8.46 10.79 8.04 10.07L1.6 2.25C1.23 1.64 0.53 1.44 0 1.82C-0.53 2.2 0.17 2.88 0.55 3.49L6.5 11.3C7.1 12.15 8.1 12.5 9.05 12.5C9.96 12.5 10.84 12.04 11.4 11.38L17.3 2.46C17.7 2.05 18.2 2.15 18.5 2.55L12 12.5Z" fill="#0166FF"/>
                            <path d="M19.89 22.5C19.37 22.1 18.69 22.3 18.32 22.92L12.41 15.11C11.93 15.85 11.06 16.35 10 16.35C9.17 16.35 8.46 15.89 8.04 15.17L1.6 23C1.23 22.39 0.53 22.19 0 22.58C-0.53 22.96 0.17 23.64 0.55 23.5L6.5 15.3C7.1 16.15 8.1 16.5 9.05 16.5C9.96 16.5 10.84 16.04 11.4 15.38L17.3 22.35C17.7 22.95 18.2 22.65 18.5 22.5L19.89 22.5Z" fill="#0166FF"/>
                         </svg>

                      </span>
                        <p className="step-title">БЫСТРАЯ ПОДАЧА</p>
                        <p className="step-text">Мы ценим ваше время. Подача машины от 5 минут.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkStepsSection;