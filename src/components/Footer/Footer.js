import React from 'react';
import { NavLink } from 'react-router-dom';

const date = new Date();

const footer = props => (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Arancedo - Galli</h2>
                        <p>Arancedo-Galli Abogados es una firma enfocada en asuntos internacionales y domésticos.</p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animated"><NavLink to="/"><span className="icon-twitter"></span></NavLink></li>
                            <li className="ftco-animated"><NavLink to="/"><span className="icon-facebook"></span></NavLink></li>
                            <li className="ftco-animated"><NavLink to="/"><span className="icon-instagram"></span></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Practice Areas</h2>
                        <ul className="list-unstyled">
                            <li><NavLink to="/servicios" className="py-1 d-block"> > Derecho Público</NavLink></li>
                            <li><NavLink to="/servicios" className="py-1 d-block"> > Derecho Civil</NavLink></li>
                            <li><NavLink to="/servicios" className="py-1 d-block"> > Derecho Comercial y Societario</NavLink></li>
                            <li><NavLink to="/servicios" className="py-1 d-block"> > Mercado de Capitales</NavLink></li>
                            <li><NavLink to="/servicios" className="py-1 d-block"> > Recupero de créditos bancarios</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Horarios Laborales</h2>
                        <div className="opening-hours">
                            <p className="pl-3">
                                <span>Lunes – Viernes <br/>9 am - 20 pm</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Alguna Pregutna?</h2>
                        <div className="block-23 mb-3">
                        <ul>
                            <li><span className="icon icon-map-marker"></span><span className="text">Marcelo T. de Alvear 636 piso 9°</span></li>
                            <li><span className="icon icon-phone"></span><span className="text">+54 11 4311 7999</span></li>
                            <li><span className="icon icon-envelope"></span><span className="text">info@arancedogalli.com.ar</span></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>Copyright &copy;{date.getFullYear()} Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;