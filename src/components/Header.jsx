import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.jpg';
import facebook from '../assets/static/facebook.png';
import whatsapp from '../assets/static/whatsapp.png';
import phone from '../assets/static/phone.png';

const Header = () => (
    <header className="header">
            <div className="header__nav--mobile">
                <div className="container section">
                    <a href="#" className="sidenav-trigger" data-target="menu-side">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="sidenav" id="menu-side">
                        <li>
                            <div className="user-view">
                                <div className="background">
                                </div>
                                <a href="#">
                                    <img src={logo} alt="logo" className="circle"/>
                                </a>
                                <a href="#">
                                    <span className="name white-text">Los Abuelos</span>
                                </a>
                                <a href="#">
                                    <span className="email white-text">LosAbuelos@gmail.com</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">home</i>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <a href="#about">
                                <i className="material-icons">insert_emoticon</i>
                                ¿Quiénes somos?
                            </a>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <a href="#location">
                                <i className="material-icons">add_location</i>
                                ¿Dónde estamos?
                            </a>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <a href="#catalogue">
                                <i className="material-icons">list</i>
                                Catálogo
                            </a>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <a href="#contact">
                                <i className="material-icons">email</i>
                                Contacto
                            </a>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <a href="#schedule">
                                <i className="material-icons">access_time</i>
                                Horarios
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={logo} alt="logo" className="header__logo"/>
            <div className="header__nav--desk">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">¿Quiénes Somos?</a></li>
                    <li><a href="#location">¿Dónde Estamos?</a></li>
                    <li><a href="#catalogue">Catálogo</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#schedule">Horarios</a></li>
                </ul>
            </div>
            <section className="header__social-networks">
                <ul>
                    <li><a href="http://www.facebook.com" target="_blank" alt="red_social"><img alt="facebook icon" className="header__social-networks--image facebook" src={facebook} /></a></li>
                    <li><a href="http://www.whatsapp.com" target="_blank" alt="red_social"><img alt="whatsapp icon" className="header__social-networks--image whatsapp" src={whatsapp} /></a></li>
                    <li><img alt="phone icon" className="header__phone" src={phone} /></li>
                    <li><p className="header__number-phone">+ 54 9 3814946853</p></li>
                </ul>
            </section>
        </header>
)
export default Header;