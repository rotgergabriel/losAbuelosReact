import React from 'react';
import Iframe from 'react-iframe';
import '../assets/styles/components/Location.scss';

const Location = () => (
    <section id="location" className="location">
        <h2 className="title">¿Dónde estamos?</h2>
        <Iframe className="location__map" 
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d890.2732048481458!2d-65.139971!3d-26.805173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b194967c8d1eba2!2sPolleria%20y%20Pescaderia%20Los%20Abuelos!5e0!3m2!1ses!2sar!4v1611276140737!5m2!1ses!2sar" 
            width="600" 
            height="450" 
            frameBorder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
            title="Los Abuelos">
        </Iframe>
        <p className="location__text">Av. Rivadavia - 1750 - Alderetes - Tucumán</p>
    </section>
);

export default Location;