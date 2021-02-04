import React from 'react';
import '../assets/styles/components/Footer.scss';
import facebook from '../assets/static/facebook.png';
import whatsapp from '../assets/static/whatsapp.png';

const Footer = () => (
    <footer className="footer">
        <div className="footer__red-social">
            <a href="http://www.facebook.com" target="_blank">
                <img alt="facebook icon" src={facebook} title="facebook" alt="red social" />
            </a>
            <a href="http://www.whatsapp.com" target="_blank">
                <img alt="whatsapp icon" src={whatsapp} title="Whatsapp" alt="red social" />
            </a>                
        </div>
            <p className="footer__browser">&copy; 2021 - <a href="https://www.losabuelos.netlify.app/">https://losabuelos.netlify.app/</a> </p>
            <p className="footer__dev"> Rotger Gabriel Augusto - Frontend Developer - rotgergabriel@gmail.com </p>  
            <p className="footer__browser"> Compatible con: Google Chrome - FireFox - Opera - Microsoft Edge</p>
    </footer>
);

export default Footer;