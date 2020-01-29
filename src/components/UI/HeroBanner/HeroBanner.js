import React from 'react';
import './HeroBanner.scss';
import BannerBackground from '../../../assets/images/shake_hands.jpg';

const heroBanner = props => (
    <div className="hero-wrap js-fullheight" style={{backgroundImage: `url(${BannerBackground})`}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-10 text-center ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
                    <h2 className="subheading" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Estamos acá para ayudarte!</h2>
                    <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                        <span>Experiencia</span> . <span>Innovación</span> . <span>Excelencia</span>
                    </h1>
                    <p><a href="#" className="btn btn-primary py-3 px-4">Contactános</a></p>
                </div>
            </div>
        </div>
    </div>
);

export default heroBanner;