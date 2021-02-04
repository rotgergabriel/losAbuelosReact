import React from 'react';
import '../assets/styles/components/Schedule.scss';

const Schedule = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path>
        </svg>
        <section id="schedule" className="schedule">
            <h2 className="title">Horarios de atención</h2>
            <ul>
                <li><span className="schedule__day">Lunes a Sábados</span> - 09:00 / 13:30 hs - 18:30 / 22:00 hs</li>
                <li><span className="schedule__day">Domingos</span> - 09:30 / 13:00 hs</li>
            </ul>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,0L0,0Z">
            </path>
        </svg>
    </>
);

export default Schedule;