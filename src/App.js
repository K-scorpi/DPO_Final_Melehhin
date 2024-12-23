import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TariffSection from './components/TariffSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import RotatingText from './components/RotatingText';
import RegistrationSection from './components/RegistrationSection';
import ReviewsSection from './components/ReviewsSection';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSection/>
            <TariffSection id="tariffs"/>
            <RotatingText/>
            <AboutSection id="about"/>
            <ReviewSection id="order"/>
            <RotatingText/>
            <RegistrationSection/>
            <ReviewsSection/>
            <Footer/>
        </div>
    );
}

export default App;