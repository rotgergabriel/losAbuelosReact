import React from 'react';
import '../assets/styles/components/Catalogue.scss';

const Catalogue = () => {

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    });

    return(
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path></svg>
            <section id="catalogue" className="catalogue">
                <h2 className="title">Catálogo</h2>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">Pollos</div>
                        <div className="collapsible-body">
                            <ul>
                                <li>Pollos</li>
                                <li>Pata Muslo</li>
                                <li>Pechuga</li>
                                <li>Filet de pollo</li>
                                <li>Trocitos</li>
                                <li>Alitas</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">Pescados</div>
                        <div className="collapsible-body">
                            <ul>
                                <li>Filet de Merluza</li>
                                <li>Filet de Atún</li>
                                <li>Sábalos</li>
                                <li>Cazuelas de mariscos</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">Pastas</div>
                        <div className="collapsible-body"><span>Consulte disponibilidad</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Fiambres</div>
                        <div className="collapsible-body"><span>Consulte disponibilidad</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Lacteos</div>
                        <div className="collapsible-body"><span>Consulte disponibilidad</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Productos Congelados</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path></svg>
    </>
)};

export default Catalogue;