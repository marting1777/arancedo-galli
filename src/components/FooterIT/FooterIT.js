import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const date = new Date();

const FooterIT = props => {

    const [langText] = useState({
        title: 'Arancedo - Galli',
        subtitle: 'Arancedo - Galli abogados è una società focalizzata sugli affari internazionali e nazionali.',
        areas: 'Aree di pratica',
        areaList: [
            {id: 1, name: 'Diritto Pubblico'},
            {id: 2, name: 'Diritto Civile'},
            {id: 3, name: 'Diritto Commerciale e Societario'},
            {id: 4, name: 'Mercato di Capitali'},
            {id: 5, name: 'Recupero di crediti bancari'},
        ],
        hours: 'Orario di lavoro',
        days: 'Lunedì - Venerdì',
        time: '9 am - 20 pm',
        questions: 'Domande?',
        address: 'Marcelo T. de Alvear 636 piso 9°',
        phone: '+54 11 4311 7999',
        mail: 'info@arancedogalli.com.ar',
        rights: 'Tutti i diritti riservati.',
    });

    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{langText.title}</h2>
                            <p>{langText.subtitle}</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animated"><NavLink to="/"><span className="icon-twitter"></span></NavLink></li>
                                <li className="ftco-animated"><NavLink to="/"><span className="icon-facebook"></span></NavLink></li>
                                <li className="ftco-animated"><NavLink to="/"><span className="icon-instagram"></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">{langText.areas}</h2>
                            <ul className="list-unstyled">
                                {langText && langText.areaList.map(area => (
                                    <li key={area.id}><NavLink to="/servizi-legali" className="py-1 d-block"> > {area.name}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{langText.hours}</h2>
                            <div className="opening-hours">
                                <p className="pl-3">
                                    <span>{langText.days} <br/>{langText.time}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">{langText.questions}</h2>
                            <div className="block-23 mb-3">
                            <ul>
                                <li><span className="icon icon-map-marker"></span><span className="text">{langText.address}</span></li>
                                <li><span className="icon icon-phone"></span><span className="text">{langText.phone}</span></li>
                                <li><span className="icon icon-envelope"></span><span className="text">{langText.mail}</span></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright &copy;{date.getFullYear()} {langText.rights}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterIT;