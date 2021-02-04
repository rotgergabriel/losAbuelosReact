import React from 'react';
import '../assets/styles/Home.scss';

import Header from '../components/Header';
import Scroll from '../components/Scroll';
import About from '../components/About';
import Location from '../components/Location';
import Catalogue from '../components/Catalogue';
import Contact from '../components/Contact';
import Schedule from '../components/Schedule';
import Footer from '../components/Footer';

const Home = () => (
    <div>
        <Header />
        <Scroll />
        <About />
        <Location />
        <Catalogue />
        <Contact />
        <Schedule />
        <Footer />
    </div>
);

export default Home;