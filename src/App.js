import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TariffSection from './components/TariffSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import RotatingText from './components/RotatingText'
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSection/>
            <TariffSection/>
            <RotatingText/>
            <AboutSection/>
            <ReviewSection/>
            <Footer/>
        </div>
    );
}

export default App;