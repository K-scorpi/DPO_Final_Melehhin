import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TariffSection from './components/TariffSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import RotatingText from './components/RotatingText';
import RegistrationSection from './components/RegistrationSection';
//import ReviewsSection from './components/ReviewsSection';
import WorkStepsSection from "./components/WorkStepsSection";
import './styles/base.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSection/>
            <TariffSection id="tariffs"/>
            <RotatingText/>
            <AboutSection id="about"/>
            <RotatingText/>
            <WorkStepsSection/>
            <RegistrationSection/>
            <ReviewSection id="order"/>
            <Footer/>
        </div>
    );
}

export default App;