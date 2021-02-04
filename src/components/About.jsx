import React from 'react';
import '../assets/styles/components/About.scss';
import whiteLogo from '../assets/static/white-logo.png';

const About = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path>
        </svg>
        <section id="about" className="about">
            <h2 className="title">¿Quiénes somos?</h2>
            <div>
                <p className="about__text">Somos un pequeño comercio de ventas al por menor y mayor de carnes de ave, pescados, fiambres, pastas, lácteos, gaseosas, etc. Nacimos en el año 2009 y estamos ubicados en la ciudad de Alderetes – Tucumán / Av. Rivadavia altura 1750.</p>
                <p className="about_text-two">Vení a conocernos. Te esperamos…!</p>
            </div>
            <img alt="logo icon" src={whiteLogo} className="about__logo" />
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path></svg>
    </>
);

export default About;