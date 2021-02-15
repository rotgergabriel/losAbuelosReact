import React from 'react';
import '../assets/styles/components/Scroll.scss';
import chicken from '../assets/static/imageScroll/canal-pollo-crudo-tabla-cortar-aislada-blanco_109285-1133.jpg';
import leg from '../assets/static/imageScroll/pierna-pollo-crudo-tabla-cortar-mesa-madera_171194-522.jpg';
import raw from '../assets/static/imageScroll/raw-chicken-breasts-wooden-cutting-board_opt.png';
import steak from '../assets/static/imageScroll/chuleta-pollo-rebozada-bulgur-sobre-fondo-blanco_135427-5214.jpg';
import risotto from '../assets/static/imageScroll/chuletas-pollo-rebozadas-risotto-verduras-fondo-blanco_135427-5222.jpg';
import egg from '../assets/static/imageScroll/huevos.jpg';

const Scroll = () => {

    document.addEventListener('DOMContentLoaded', () => {
        const elementsCarousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elementsCarousel, {
            duration: 150,
            dist: -80,
            shift: 5,
            padding: 5,
            numVisible: 3,
            indicators: true,
            noWrap: false
        });

        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });

    return(
        <section className="scroll">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className="center-align title">¿Qué se te antoja hoy?</h3>
                        <div className="carousel center-align">
                            <div className="carousel-item">
                                <h4 className="subtitulo">Pollos</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Frescos</p>
                                <img alt="Product image" src={chicken} />
                            </div>

                            <div className="carousel-item">
                                <h4 className="subtitulo">Pata Muslo</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Fresca</p>
                                <img alt="Product image" src={leg} />
                            </div>
                            
                            <div className="carousel-item">
                                <h4 className="subtitulo">Filet</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Fresco</p>
                                <img alt="Product image" src={raw} />
                            </div>

                            <div className="carousel-item">
                                <h4 className="subtitulo">Medallones</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Pollo - Merluza</p>
                                <img alt="Product image" src={steak} />
                            </div>
                            
                            <div className="carousel-item">
                                <h4 className="subtitulo">Crocantes</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Pollo</p>
                                <img alt="Product image" src={risotto} />
                            </div>

                            <div className="carousel-item">
                                <h4 className="subtitulo">Huevos</h4>
                                <div className="linea-division"></div>
                                <p className="sabor">Rosados - Blancos</p>
                                <img alt="Product image" src={egg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Scroll